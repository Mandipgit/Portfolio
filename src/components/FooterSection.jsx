import React from 'react';
import { motion } from 'framer-motion';
import './FooterSection.css';

const FooterSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Left Side */}
        <div className="footer-left">
          <motion.h2 
            className="footer-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Pushing Towards<br />Success.
          </motion.h2>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div 
              className="footer-contact-cta" 
              onClick={scrollToContact}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') scrollToContact();
              }}
            >
              Contact Me <span className="arrow">↗</span>
            </div>
            <div className="footer-email">
              mandeeppokharel577@gmail.com
            </div>
          </motion.div>
        </div>

      </div>

      {/* Background Text */}
      <motion.div 
        className="footer-bg-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        MANDEEP
      </motion.div>
    </footer>
  );
};

export default FooterSection;
