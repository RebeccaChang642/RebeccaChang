import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const experiences = [
    {
      year: '2024',
      title: '資深UI/UX設計師',
      company: '創意設計公司',
      description: '負責多個大型專案的設計規劃，帶領設計團隊完成產品設計'
    },
    {
      year: '2022',
      title: 'UI/UX設計師',
      company: '數位行銷公司',
      description: '專注於網站和行動應用的使用者體驗設計，提升產品易用性'
    },
    {
      year: '2020',
      title: '視覺設計師',
      company: '廣告代理商',
      description: '負責品牌視覺設計和平面設計，累積豐富的設計經驗'
    }
  ];

  const achievements = [
    '獲得2024年最佳UI設計獎',
    '完成50+個成功專案',
    '客戶滿意度達98%',
    '團隊協作經驗豐富'
  ];

  return (
    <div className="about">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="page-title"
        >
          關於我
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="page-subtitle"
        >
          我是一位充滿熱情的UI/UX設計師，專注於創造美觀且實用的數位體驗
        </motion.p>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="about-text"
          >
            <h2>我的故事</h2>
            <p>
              我從小就對美學和創意充滿熱情，大學時期選擇了設計相關科系，
              並在學習過程中發現了對使用者體驗設計的濃厚興趣。
            </p>
            <p>
              經過多年的實務經驗累積，我專精於UI/UX設計、使用者研究、
              原型設計和視覺設計。我相信好的設計不僅要美觀，更要解決實際問題，
              為使用者創造價值。
            </p>
            <p>
              我持續學習最新的設計趨勢和技術，並將這些知識應用到實際專案中，
              為客戶創造出既美觀又實用的設計解決方案。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="about-image"
          >
            <div className="image-placeholder">
              <span>設計師照片</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="experience-section"
        >
          <h2>工作經驗</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="timeline-item"
              >
                <div className="timeline-year">{exp.year}</div>
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="achievements-section"
        >
          <h2>成就與榮譽</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                className="achievement-card"
              >
                <div className="achievement-icon">🏆</div>
                <p>{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
