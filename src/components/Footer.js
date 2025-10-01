import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import './Footer.css';

const Footer = () => {
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
            <h3>聯絡資訊</h3>
            <p>email@example.com</p>
            <p>+886 912 345 678</p>
          </div>
          
          <div className="footer-section">
            <h3>社群媒體</h3>
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
            <h3>快速連結</h3>
            <div className="quick-links">
              <a href="/portfolio">作品集</a>
              <a href="/about">關於我</a>
              <a href="/contact">聯絡</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 UI/UX Designer Portfolio. All rights reserved.</p>
          <p>Made with ❤️ using React, Three.js & GSAP</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
