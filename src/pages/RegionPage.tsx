import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRegionBySlug } from '../data/regions';
import { getPodcastBySlug } from '../data/podcasts';
import { getArticlesByRegion } from '../data/articles';
import Masthead from '../components/Masthead';
import './RegionPage.css';

const PLACEHOLDER_ARTICLES = [
  {
    id: 'article-1',
    title: 'Placeholder Article Title One',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.',
    date: 'March 2025',
    readTime: '8 min read',
    num: '01',
  },
  {
    id: 'article-2',
    title: 'Placeholder Article Title Two',
    excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet.',
    date: 'February 2025',
    readTime: '11 min read',
    num: '02',
  },
];

export default function RegionPage() {
  const { regionSlug } = useParams<{ regionSlug: string }>();
  const region = getRegionBySlug(regionSlug ?? '');
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const cards = listRef.current?.querySelectorAll('.rp-article-card');
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((card, i) => {
      (card as HTMLElement).style.transitionDelay = `${i * 0.12}s`;
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  const realArticles = getArticlesByRegion(region?.slug ?? '');
  const articles = realArticles.length > 0
    ? realArticles.slice(0, region?.articleCount ?? realArticles.length).map((a, i) => ({
        id: a.id,
        title: a.title,
        excerpt: a.excerpt,
        date: a.date,
        readTime: a.readTime,
        num: String(i + 1).padStart(2, '0'),
      }))
    : PLACEHOLDER_ARTICLES.slice(0, region?.articleCount ?? PLACEHOLDER_ARTICLES.length);

  if (!region) {
    return (
      <div className="region-page region-not-found">
        <p>Region not found.</p>
        <Link to="/" className="rp-back-link">← Back to Map</Link>
      </div>
    );
  }

  return (
    <div
      className="region-page"
      style={{ '--region-color': region.color } as React.CSSProperties}
    >
      <section className="rp-hero">
        <div className="rp-hero-content">
          <Link to="/#map" className="rp-back-link">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 8H3M7 4l-4 4 4 4"/></svg>
          </Link>

          <div className="rp-eyebrow">Region</div>

          <h1 className="rp-title">
            <span className="rp-title-name">{region.name}</span>
          </h1>

          <p className="rp-description">{region.description}</p>

          <div className="rp-divider" />

          <div className="rp-stats">
            <div className="rp-stat">
              <span className="rp-stat-label">States Covered</span>
              <span className="rp-stat-states">{region.states.join(', ')}</span>
            </div>
            <div className="rp-stat">
              <span className="rp-stat-value">{region.population}</span>
              <span className="rp-stat-label">Population</span>
            </div>
          </div>
        </div>

        <div className="rp-hero-image">
          <img
            src={region.image}
            alt={region.imageAlt}
            style={{
              ...(region.imagePosition ? { objectPosition: region.imagePosition } : {}),
              ...(region.imageContain ? { objectFit: 'contain' as const } : {}),
            }}
          />
          <span className="rp-image-caption">{region.imageAlt}</span>
          <a
            className="rp-image-credit"
            href={region.imageCreditUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {region.imageCredit}
          </a>
        </div>
      </section>

      <section className="rp-articles">
        <div className="rp-articles-header">
          <span className="rp-articles-label">Articles</span>
          <h2 className="rp-articles-heading">From {region.name}</h2>
        </div>

        <div className="rp-article-list" ref={listRef}>
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/region/${region.slug}/article/${article.id}`}
              className="rp-article-card"
            >
              <span className="rp-card-num">{article.num}</span>
              <div className="rp-card-body">
                <h3 className="rp-card-title">{article.title}</h3>
              </div>
              <div className="rp-card-meta">
                <div className="rp-card-arrow">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </div>
              </div>
            </Link>
          ))}

          {(() => {
            const podcast = getPodcastBySlug(region.slug);
            if (!podcast) return null;
            return (
              <Link
                to={`/region/${region.slug}/podcast`}
                className="rp-article-card rp-podcast-card"
              >
                <span className="rp-card-num">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zm-1 3a1 1 0 0 1 2 0v7a1 1 0 0 1-2 0V5zm-3 7a4 4 0 0 0 8 0h1a5 5 0 0 1-4.5 4.97V19h-1v-2.03A5 5 0 0 1 3 12H4z"/></svg>
                </span>
                <div className="rp-card-body">
                  <span className="rp-podcast-badge">Podcast</span>
                  <h3 className="rp-card-title">{podcast.title}</h3>
                </div>
                <div className="rp-card-meta">
                  <div className="rp-card-arrow">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </div>
                </div>
              </Link>
            );
          })()}
        </div>
      </section>

      <Masthead />
    </div>
  );
}
