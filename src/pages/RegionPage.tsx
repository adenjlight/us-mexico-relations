import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRegionBySlug } from '../data/regions';
import './RegionPage.css';

const PLACEHOLDER_ARTICLES = [
  {
    id: 'article-1',
    title: 'Placeholder Article Title One',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.',
    date: 'March 2025',
    readTime: '8 min read',
    tagColor: 'gold',
    pattern: 'pattern-1',
    num: '01',
  },
  {
    id: 'article-2',
    title: 'Placeholder Article Title Two',
    excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet.',
    date: 'February 2025',
    readTime: '11 min read',
    tagColor: 'terracotta',
    pattern: 'pattern-2',
    num: '02',
  },
  {
    id: 'article-3',
    title: 'Placeholder Article Title Three',
    excerpt: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius turpis molestie dictum ultricies lacus nunc ultrices odio vel convallis purus mauris.',
    date: 'January 2025',
    readTime: '6 min read',
    tagColor: 'sage',
    pattern: 'pattern-3',
    num: '03',
  },
];

export default function RegionPage() {
  const { regionSlug } = useParams<{ regionSlug: string }>();
  const region = getRegionBySlug(regionSlug ?? '');
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const cards = listRef.current?.querySelectorAll('.article-card-lg');
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((card, i) => {
      (card as HTMLElement).style.transitionDelay = `${i * 0.15}s`;
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  if (!region) {
    return (
      <div className="region-page region-not-found">
        <p>Region not found.</p>
        <Link to="/" className="rp-back-link">← Back to Map</Link>
      </div>
    );
  }

  return (
    <div className="region-page">
      <nav className="rp-nav">
        <Link to="/" className="rp-nav-logo">US<span>–</span>MX</Link>
        <ul className="rp-nav-links">
          <li><Link to="/">Overview</Link></li>
          <li><Link to="/#map">Regions</Link></li>
        </ul>
      </nav>

      <section className="rp-hero">
        <Link to="/#map" className="rp-back-link">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 8H3M7 4l-4 4 4 4"/></svg>
          Back to all regions
        </Link>
        <div className="rp-eyebrow">Region</div>
        <h1 className="rp-title">The <em>{region.name}</em></h1>
        <p className="rp-description">
          Placeholder region description for {region.name}. Articles and detailed content will be added here covering history, culture, and cross-border dynamics.
        </p>
        <div className="rp-meta">
          <div className="rp-meta-item">
            <div className="rp-meta-label">States</div>
            <div className="rp-meta-states">{region.states.join(' · ')}</div>
          </div>
        </div>
      </section>

      <div className="rp-divider"><hr /></div>

      <section className="rp-articles">
        <div className="rp-articles-label">Articles</div>
        <h2 className="rp-articles-heading">From the {region.name}</h2>

        <div className="article-list" ref={listRef}>
          {PLACEHOLDER_ARTICLES.map((article) => (
            <Link
              key={article.id}
              to={`/region/${region.slug}/article/${article.id}`}
              className="article-card-lg"
            >
              <div className={`card-visual ${article.pattern}`}>
                <div className="card-number">{article.num}</div>
              </div>
              <div className="card-content">
                <div className="card-tag">
                  <div className={`card-tag-dot ${article.tagColor}`} />
                  <span className="card-tag-text">{article.date}</span>
                </div>
                <h3 className="card-title-lg">{article.title}</h3>
                <p className="card-excerpt-lg">{article.excerpt}</p>
                <div className="card-footer-row">
                  <span className="card-read-time">{article.readTime}</span>
                  <div className="card-arrow">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="rp-footer">
        <div className="rp-footer-logo">US<span>–</span>Mexico Relations</div>
        <p>A research project exploring history, culture, and diplomacy.</p>
      </footer>
    </div>
  );
}
