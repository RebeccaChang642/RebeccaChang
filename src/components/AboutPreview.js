import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import './AboutPreview.css';

const AboutPreview = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="about-preview">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="section-title"
        >
          {t.aboutTitle}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          {t.aboutSubtitle}
        </motion.p>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <h3>{t.designPhilosophy}</h3>
            <p>
              {t.aboutText1}
            </p>
            <p>
              {t.aboutText2}
            </p>
            <Link to="/about" className="learn-more-btn">
              {t.learnMore} →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="about-image"
          >
            <div className="image-placeholder">
              <span>{t.designerPhoto}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
