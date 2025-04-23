import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import Header from './header/header.jsx';
import HeroContent from './hero_content/hero_content.jsx';
import VideoUnsri from './video_unsri/video_unsri.jsx';
import Section2 from './section2/section2.jsx';
import Kepengurusan from './kepengurusan/kepengurusan.jsx';
import SectionAlumni from './section_alumni/section_alumni.jsx';
import Footer from './footer/footer.jsx';
import NotFound from './404 not found/404.jsx'; // pastikan file ini ada

function Home() {
  return (
    <>
      <Header />
      <HeroContent />
      <VideoUnsri />
      <Section2 />
      <Kepengurusan />
      <SectionAlumni />
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </StrictMode>
);
