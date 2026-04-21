import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRegionBySlug } from '../data/regions';
import { getArticle, getArticlesByRegion } from '../data/articles';
import Masthead from '../components/Masthead';
import './ArticlePage.css';

const ARTICLES: Record<string, { title: string; date: string; lede: string; readTime: string }> = {
  'article-1': {
    title: 'Placeholder Article Title One',
    date: 'March 2025',
    lede: 'A placeholder lede summarizing the key argument of this article — the compelling hook that draws the reader into the full piece.',
    readTime: '8 min read',
  },
  'article-2': {
    title: 'Placeholder Article Title Two',
    date: 'February 2025',
    lede: 'A placeholder lede for the second article, offering a brief and evocative summary of what follows in the body text.',
    readTime: '11 min read',
  },
  'article-3': {
    title: 'Placeholder Article Title Three',
    date: 'January 2025',
    lede: 'A placeholder lede for the third article — context, stakes, and a reason to keep reading all condensed into a sentence or two.',
    readTime: '6 min read',
  },
};

const BODY_PARAGRAPHS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
  'Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis.',
  'Fusce fermentum. Nullam varius nulla nec sapien. Proin euismod, urna vel ultricies fringilla, est libero fermentum felis, sit amet malesuada purus lorem ut nunc. In nec felis. Donec ultrices urna. Nullam vulputate diam nec turpis. Sed consequat augue eget diam. Sed tincidunt.',
];

export default function ArticlePage() {
  const { regionSlug, articleId } = useParams<{ regionSlug: string; articleId: string }>();
  const region = getRegionBySlug(regionSlug ?? '');
  const progressRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const realArticle = getArticle(regionSlug ?? '', articleId ?? '');
  const fallbackMeta = ARTICLES[articleId ?? ''] ?? ARTICLES['article-1'];
  const meta = realArticle
    ? { title: realArticle.title, date: realArticle.date, lede: realArticle.lede, readTime: realArticle.readTime }
    : fallbackMeta;

  const regionArticles = getArticlesByRegion(regionSlug ?? '');
  const allIds = regionArticles.length > 0 ? regionArticles.map((a) => a.id) : Object.keys(ARTICLES);
  const currentIndex = allIds.indexOf(articleId ?? '');
  const nextId = allIds[currentIndex + 1];
  const nextRealArticle = nextId ? getArticle(regionSlug ?? '', nextId) : null;
  const nextMeta = nextId
    ? { title: nextRealArticle?.title ?? ARTICLES[nextId]?.title ?? '' }
    : null;

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

        <h1>{meta.title}</h1>
        {realArticle && <p className="ap-author">By {realArticle.author}</p>}
      </header>

      <div className="ap-body">
        {realArticle ? (
          realArticle.sections.map((section, si) => (
            <div key={si}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((para, pi) => (
                <p key={pi} className={si === 0 && pi === 0 ? 'drop-cap' : undefined} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>
          ))
        ) : (
          <>
            <p className="drop-cap">{BODY_PARAGRAPHS[0]}</p>
            <p>{BODY_PARAGRAPHS[1]}</p>
            <div className="ap-image"><span>Image placeholder</span></div>
            <h2>Section heading</h2>
            <p>{BODY_PARAGRAPHS[2]}</p>
            <div className="ap-pull-stat">
              <div className="ap-pull-number">$5.9B</div>
              <div className="ap-pull-label">Placeholder statistic label</div>
            </div>
            <blockquote>
              <p>Placeholder pull quote — a striking sentence from the article that encapsulates a key insight or argument.</p>
              <cite>— Source Name, Institution</cite>
            </blockquote>
            <h2>Second section heading</h2>
            <p>{BODY_PARAGRAPHS[3]}</p>
            <p>{BODY_PARAGRAPHS[1]}</p>
          </>
        )}
      </div>

      <div className="ap-end">
        <div className="ap-end-divider">
          <div className="ap-line" />
          <div className="ap-dot" /><div className="ap-dot" /><div className="ap-dot" />
          <div className="ap-line" />
        </div>

        {nextMeta && (
          <Link to={`/region/${regionSlug}/article/${nextId}`} className="ap-next">
            <div>
              <div className="ap-next-label">Next article</div>
              <div className="ap-next-title">{nextMeta.title}</div>
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
