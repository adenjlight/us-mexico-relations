import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import RegionPage from './pages/RegionPage';
import ArticlePage from './pages/ArticlePage';
import PodcastPage from './pages/PodcastPage';
import AuthorPage from './pages/AuthorPage';

function NotFound() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--navy)', color: 'var(--cream)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '4rem', fontWeight: 700, color: 'var(--gold)' }}>404</div>
      <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Page not found.</p>
      <Link to="/" style={{ color: 'var(--gold)', textDecoration: 'underline', fontSize: '0.9rem' }}>Back to home</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/region/:regionSlug" element={<RegionPage />} />
        <Route path="/region/:regionSlug/article/:articleId" element={<ArticlePage />} />
        <Route path="/region/:regionSlug/podcast" element={<PodcastPage />} />
        <Route path="/author/:authorSlug" element={<AuthorPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
