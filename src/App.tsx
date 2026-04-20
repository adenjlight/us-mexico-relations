import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegionPage from './pages/RegionPage';
import ArticlePage from './pages/ArticlePage';
import PodcastPage from './pages/PodcastPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/region/:regionSlug" element={<RegionPage />} />
        <Route path="/region/:regionSlug/article/:articleId" element={<ArticlePage />} />
        <Route path="/region/:regionSlug/podcast" element={<PodcastPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
