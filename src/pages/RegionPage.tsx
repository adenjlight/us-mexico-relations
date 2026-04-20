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
  {
    id: 'article-3',
    title: 'Placeholder Article Title Three',
    excerpt: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius turpis molestie dictum ultricies lacus nunc ultrices odio vel convallis purus mauris.',
    date: 'January 2025',
    readTime: '6 min read',
    num: '03',
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
            Back to all regions
          </Link>

          <div className="rp-eyebrow">Region</div>

          <h1 className="rp-title">
            <span className="rp-title-the">The </span>
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
          <img src={region.image} alt={region.imageAlt} />
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
          <h2 className="rp-articles-heading">From the {region.name}</h2>
        </div>

        <div className="rp-article-list" ref={listRef}>
          {PLACEHOLDER_ARTICLES.map((article) => (
            <Link
              key={article.id}
              to={`/region/${region.slug}/article/${article.id}`}
              className="rp-article-card"
            >
              <span className="rp-card-num">{article.num}</span>
              <div className="rp-card-body">
                <h3 className="rp-card-title">{article.title}</h3>
                <p className="rp-card-excerpt">{article.excerpt}</p>
              </div>
              <div className="rp-card-meta">
                <span className="rp-card-date">{article.date}</span>
                <span className="rp-card-time">{article.readTime}</span>
                <div className="rp-card-arrow">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="rp-footer">
        <div className="rp-footer-logo">PSC 3500 US–Mexico Relations</div>
        <p>Spring 2026</p>
      </footer>
    </div>
  );
}
