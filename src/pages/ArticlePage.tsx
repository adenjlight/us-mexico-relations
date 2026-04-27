import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRegionBySlug } from '../data/regions';
import { getArticle, getArticlesByRegion } from '../data/articles';
import Masthead from '../components/Masthead';
import './ArticlePage.css';

export default function ArticlePage() {
  const { regionSlug, articleId } = useParams<{ regionSlug: string; articleId: string }>();
  const region = getRegionBySlug(regionSlug ?? '');
  const progressRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const article = getArticle(regionSlug ?? '', articleId ?? '');
  const regionArticles = getArticlesByRegion(regionSlug ?? '');
  const currentIndex = regionArticles.findIndex((a) => a.id === articleId);
  const nextArticle = regionArticles[currentIndex + 1] ?? null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [regionSlug, articleId]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.width = `${(scrollTop / docHeight) * 100}%`;
      }
      if (navRef.current) {
        navRef.current.classList.toggle('scrolled', scrollTop > 20);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="ap-page">
      <div className="ap-progress" ref={progressRef} />

      <nav className="ap-nav" ref={navRef}>
        <Link to="/" className="ap-nav-logo">US<span>–</span>MX</Link>
      </nav>

      <header className="ap-header">
        <Link to={`/region/${regionSlug}`} className="ap-back-link">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 8H3M7 4l-4 4 4 4"/></svg>
          Back to {region?.name ?? 'Region'}
        </Link>

        {article ? <h1>{article.title}</h1> : <h1>Article not found</h1>}
        {article && (
          <Link
            to={`/author/${article.author.toLowerCase().replace(/\s+/g, '-')}`}
            className="ap-author"
          >
            By {article.author}
          </Link>
        )}
        {article?.abstract && (
          <p className="ap-abstract">{article.abstract}</p>
        )}
        {article?.abstractImage && (
          <div className="ap-image"><img src={article.abstractImage} alt="" /></div>
        )}
      </header>

      <div className="ap-body">
        {article ? (
          article.sections.map((section, si) => (
            <div key={si}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((block, bi) => {
                if (typeof block !== 'string') {
                  return (
                    <figure key={bi} className="ap-image" style={block.maxWidth ? { maxWidth: block.maxWidth, marginLeft: 'auto', marginRight: 'auto' } : undefined}>
                      <img src={block.image} alt={block.caption ?? ''} />
                      {block.caption && <figcaption>{block.caption}</figcaption>}
                    </figure>
                  );
                }
                return (
                  <p key={bi} className={si === 0 && bi === 0 ? 'drop-cap' : undefined} dangerouslySetInnerHTML={{ __html: block }} />
                );
              })}
            </div>
          ))
        ) : (
          <p>This article could not be found.</p>
        )}
      </div>

      <div className="ap-end">
        <div className="ap-end-divider">
          <div className="ap-line" />
          <div className="ap-dot" /><div className="ap-dot" /><div className="ap-dot" />
          <div className="ap-line" />
        </div>

        {nextArticle && (
          <Link to={`/region/${regionSlug}/article/${nextArticle.id}`} className="ap-next">
            <div>
              <div className="ap-next-label">Next article</div>
              <div className="ap-next-title">{nextArticle.title}</div>
            </div>
            <div className="ap-next-arrow">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </div>
          </Link>
        )}
      </div>

      <Masthead />
    </div>
  );
}
