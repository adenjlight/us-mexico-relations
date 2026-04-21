import { Link } from 'react-router-dom';
import './Masthead.css';

const EDITORS = [
  { display: 'Aden Light', slug: 'aden-light' },
  { display: 'Lucy Bird', slug: 'lucy-bird' },
];

const CONTRIBUTORS = [
  { display: 'Sharpley, Sydney', slug: 'sydney-sharpley' },
  { display: 'Davis, Daniel', slug: 'daniel-davis' },
  { display: 'Duarte, Christopher', slug: 'christopher-duarte' },
  { display: 'Manko, Oliver', slug: 'oliver-manko' },
  { display: 'Donas, Dimitri', slug: 'dimitri-donas' },
  { display: 'Schwartz, Nico', slug: 'nico-schwartz' },
];

export default function Masthead() {
  return (
    <section className="masthead-section">
      <div className="masthead-inner">
        <div className="masthead-header">
          <div className="masthead-title">PSC 3500 — US–Mexico Relations</div>
          <div className="masthead-sub">Spring 2026</div>
        </div>
        <div className="masthead-columns">
          <div className="masthead-group">
            <div className="masthead-role">Co-Editors</div>
            {EDITORS.map(({ display, slug }) => (
              <Link key={slug} to={`/author/${slug}`} className="masthead-name masthead-name-link">
                {display}
              </Link>
            ))}
          </div>
          <div className="masthead-group">
            <div className="masthead-role">Contributors</div>
            {CONTRIBUTORS.map(({ display, slug }) => (
              <Link key={slug} to={`/author/${slug}`} className="masthead-name masthead-name-link">
                {display}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
