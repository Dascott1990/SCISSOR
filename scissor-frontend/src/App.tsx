import React, { useState } from 'react';
import Header from './components/Header';
import HeaderHero from './components/HeaderHero';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQs from './components/FAQs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import URLShorten from './components/URLShorten';
import Sidebar from './components/Sidebar';
import Login from './components/Login';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <HeaderHero toggleSidebar={toggleSidebar} />
      <Hero />
      <Features />
      <Pricing />
      <URLShorten />
      <FAQs />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
