import { useParams, Link } from 'react-router-dom';
import { getRegionBySlug } from '../data/regions';
import './RegionPage.css';

const PLACEHOLDER_ARTICLES = [
  {
    id: 'article-1',
    title: 'Placeholder Article Title One',
    preview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    date: 'March 2025',
  },
  {
    id: 'article-2',
    title: 'Placeholder Article Title Two',
    preview:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
    date: 'February 2025',
  },
  {
    id: 'article-3',
    title: 'Placeholder Article Title Three',
    preview:
      'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum ultricies, lacus nunc ultrices odio, vel convallis purus mauris vel neque.',
    date: 'January 2025',
  },
];

export default function RegionPage() {
  const { regionSlug } = useParams<{ regionSlug: string }>();
  const region = getRegionBySlug(regionSlug ?? '');

  if (!region) {
    return (
      <div className="region-page region-not-found">
        <p>Region not found.</p>
        <Link to="/" className="back-btn">← Back to Map</Link>
      </div>
    );
  }

  return (
    <div className="region-page">
      <div className="region-header" style={{ borderBottomColor: region.hoverColor }}>
        <Link to="/#map" className="back-btn">← Back to Map</Link>
        <h1 className="region-title">{region.name}</h1>
        <div className="region-accent" style={{ background: region.hoverColor }} />
      </div>

      <div className="region-content">
        <p className="region-intro">
          This is the placeholder page for the <strong>{region.name}</strong> region.
          Articles and content will be added here.
        </p>

        <h2 className="articles-heading">Articles</h2>
        <div className="article-cards">
          {PLACEHOLDER_ARTICLES.map((article) => (
            <Link
              key={article.id}
              to={`/region/${region.slug}/article/${article.id}`}
              className="article-card"
            >
              <div className="article-card-accent" style={{ background: region.hoverColor }} />
              <div className="article-card-body">
                <span className="article-date">{article.date}</span>
                <h3 className="article-card-title">{article.title}</h3>
                <p className="article-card-preview">{article.preview}</p>
                <span className="article-read-more">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
