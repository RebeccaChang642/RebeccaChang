import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import './Footer.css';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    // GSAP 動畫
    gsap.fromTo('.footer', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.5 }
    );
  }, []);

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
    >
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t.contactInfo}</h3>
            <p>email@example.com</p>
            <p>+886 912 345 678</p>
          </div>
          
          <div className="footer-section">
            <h3>{t.socialMedia}</h3>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Instagram
                </motion.span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  LinkedIn
                </motion.span>
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Behance
                </motion.span>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>{t.quickLinks}</h3>
            <div className="quick-links">
              <a href="/portfolio">{t.portfolio}</a>
              <a href="/about">{t.about}</a>
              <a href="/contact">{t.contact}</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 UI/UX Designer Portfolio. {t.allRightsReserved}</p>
          <p>{t.madeWith}</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
