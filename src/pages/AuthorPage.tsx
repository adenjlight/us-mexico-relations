import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { regions } from '../data/regions';
import { getArticlesByRegion } from '../data/articles';
import { getPodcastsByAuthor } from '../data/podcasts';
import Masthead from '../components/Masthead';
import './AuthorPage.css';

const slugToName = (slug: string) =>
  slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');

export default function AuthorPage() {
  const { authorSlug } = useParams<{ authorSlug: string }>();
  const authorName = slugToName(authorSlug ?? '');

  const authorArticles = regions.flatMap(region =>
    getArticlesByRegion(region.slug)
      .filter(a => a.author === authorName)
      .map(a => ({ ...a, regionSlug: region.slug, regionName: region.name }))
  );

  const authorPodcasts = getPodcastsByAuthor(authorName);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="aup-page">
      <nav className="aup-nav">
        <Link to="/" className="aup-nav-logo">US<span>–</span>MX</Link>
      </nav>

      <header className="aup-header">
        <Link to="/" className="aup-back-link">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 8H3M7 4l-4 4 4 4"/></svg>
          Back
        </Link>
        <h1 className="aup-name">{authorName}</h1>
      </header>

      <div className="aup-body">
        {authorArticles.length === 0 && authorPodcasts.length === 0 ? (
          <p className="aup-empty">No articles found.</p>
        ) : (
          <>
            {authorArticles.map(article => (
              <Link
                key={article.id}
                to={`/region/${article.regionSlug}/article/${article.id}`}
                className="aup-card"
              >
                <span className="aup-card-region">{article.regionName}</span>
                <h2 className="aup-card-title">{article.title}</h2>
                <div className="aup-card-arrow">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </div>
              </Link>
            ))}
            {authorPodcasts.map(({ regionSlug, podcast }) => (
              <Link
                key={regionSlug}
                to={`/region/${regionSlug}/podcast`}
                className="aup-card"
              >
                <span className="aup-card-region aup-card-region--podcast">Podcast</span>
                <h2 className="aup-card-title">{podcast.title}</h2>
                <div className="aup-card-arrow">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>

      <Masthead />
    </div>
  );
}
