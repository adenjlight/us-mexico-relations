import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegionPage from './pages/RegionPage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/region/:regionSlug" element={<RegionPage />} />
        <Route path="/region/:regionSlug/article/:articleId" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
