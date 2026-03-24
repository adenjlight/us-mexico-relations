import { useParams, Link } from 'react-router-dom';
import { getRegionBySlug } from '../data/regions';
import './ArticlePage.css';

const ARTICLE_BODY = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.

Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis.

Fusce fermentum. Nullam varius nulla nec sapien. Proin euismod, urna vel ultricies fringilla, est libero fermentum felis, sit amet malesuada purus lorem ut nunc. In nec felis. Donec ultrices urna. Nullam vulputate diam nec turpis. Sed consequat augue eget diam.`;

export default function ArticlePage() {
  const { regionSlug, articleId } = useParams<{ regionSlug: string; articleId: string }>();
  const region = getRegionBySlug(regionSlug ?? '');

  const articleNumber = articleId?.replace('article-', '') ?? '1';

  return (
    <div className="article-page">
      <div className="article-header">
        <Link to={`/region/${regionSlug}`} className="back-btn">
          ← Back to {region?.name ?? 'Region'}
        </Link>
      </div>

      <article className="article-body">
        <div className="article-meta">
          <span
            className="article-region-tag"
            style={{ background: region?.hoverColor ?? '#e0e0e0' }}
          >
            {region?.name ?? 'Region'}
          </span>
          <span className="article-date-meta">March 2025</span>
        </div>

        <h1 className="article-title">Placeholder Article Title {articleNumber}</h1>

        <div className="article-content">
          {ARTICLE_BODY.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
