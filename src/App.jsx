import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import HeroAboutTransition from './components/HeroAboutTransition';
import QuoteSection from './components/QuoteSection';
import TechStack from './components/TechStack';
import RecentProjects from './components/RecentProjects';
import ContactSection from './components/ContactSection';
import FloatingSocials from './components/FloatingSocials';
import FooterSection from './components/FooterSection';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = (id) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="app">
      {/* Global Persistent Top Nav Pill */}
      <div className="global-top-nav">
        <div className="nav-pill-container">
          <div className="nav-pill">
            <span className="nav-name">Mandeep</span>
            <button 
              className="nav-toggle-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={16} /> : <span className="nav-dots">...</span>}
            </button>
          </div>
          
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="animated-dropdown-menu"
                initial={{ opacity: 0, scale: 0.95, y: -10, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, y: -10, filter: "blur(10px)" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <button className="dropdown-item" onClick={() => handleScrollTo('about-content')}>About Me</button>
                <button className="dropdown-item" onClick={() => handleScrollTo('toolkit')}>My Development Toolkit</button>
                <button className="dropdown-item" onClick={() => handleScrollTo('projects')}>Recent Projects</button>
                <button className="dropdown-item" onClick={() => handleScrollTo('contact')}>Contact</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      <HeroAboutTransition />
      <QuoteSection />
      <TechStack />
      <RecentProjects />
      <ContactSection />
      <FooterSection />
      <FloatingSocials />
    </div>
  );
}

export default App;
