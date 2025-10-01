import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './AboutPreview.css';

const AboutPreview = () => {
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
          關於我
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          我是一位充滿熱情的UI/UX設計師，專注於創造美觀且實用的數位體驗
        </motion.p>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <h3>設計理念</h3>
            <p>
              我相信好的設計不僅要美觀，更要解決實際問題。我專注於使用者體驗，
              透過深入的研究和測試，創造出既美觀又實用的設計解決方案。
            </p>
            <p>
              從概念發想到最終實現，我享受整個設計過程，並持續學習最新的設計趨勢和技術。
            </p>
            <Link to="/about" className="learn-more-btn">
              了解更多 →
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
              <span>設計師照片</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
