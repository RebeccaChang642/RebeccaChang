import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();

  // 模擬專案數據
  const projects = {
    1: {
      title: '電商平台設計',
      category: 'UI/UX Design',
      year: '2024',
      description: '現代化的電商平台設計，專注於使用者體驗和轉換率優化。這個專案包含了完整的購物流程設計，從商品瀏覽到結帳完成，每個環節都經過精心設計。',
      challenge: '如何在競爭激烈的電商市場中脫穎而出，提供更好的使用者體驗？',
      solution: '我們採用了簡潔現代的設計風格，優化了購物流程，並加入了個性化推薦功能。',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle'],
      role: 'UI/UX Designer',
      duration: '3個月',
      team: '5人團隊'
    },
    2: {
      title: '行動應用設計',
      category: 'Mobile App',
      year: '2024',
      description: '直觀易用的行動應用介面設計，提升使用者參與度。這個應用專注於社交功能，讓使用者能夠輕鬆分享和互動。',
      challenge: '如何在小螢幕上提供豐富的功能同時保持簡潔的介面？',
      solution: '我們採用了卡片式設計和手勢操作，讓使用者能夠直觀地使用各種功能。',
      technologies: ['Figma', 'Principle', 'After Effects', 'Sketch'],
      role: 'Lead Designer',
      duration: '4個月',
      team: '6人團隊'
    },
    3: {
      title: '品牌識別設計',
      category: 'Branding',
      year: '2023',
      description: '完整的品牌識別系統設計，包含標誌、色彩和應用規範。為新創公司打造獨特的品牌形象。',
      challenge: '如何創造一個既現代又具有記憶點的品牌識別？',
      solution: '我們設計了簡潔有力的標誌，並建立了完整的視覺識別系統。',
      technologies: ['Illustrator', 'Photoshop', 'InDesign', 'Figma'],
      role: 'Brand Designer',
      duration: '2個月',
      team: '3人團隊'
    }
  };

  const project = projects[id] || projects[1];

  return (
    <div className="project-detail">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="project-header"
        >
          <Link to="/portfolio" className="back-link">
            ← 返回作品集
          </Link>
          
          <div className="project-meta">
            <span className="project-category">{project.category}</span>
            <span className="project-year">{project.year}</span>
          </div>
          
          <h1 className="project-title">{project.title}</h1>
          
          <p className="project-description">{project.description}</p>
        </motion.div>

        <div className="project-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="project-image"
          >
            <div className="image-placeholder">
              <span>{project.title}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="project-info"
          >
            <div className="info-section">
              <h3>專案挑戰</h3>
              <p>{project.challenge}</p>
            </div>

            <div className="info-section">
              <h3>解決方案</h3>
              <p>{project.solution}</p>
            </div>

            <div className="info-section">
              <h3>使用技術</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-details">
              <div className="detail-item">
                <span className="detail-label">角色</span>
                <span className="detail-value">{project.role}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">時程</span>
                <span className="detail-value">{project.duration}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">團隊</span>
                <span className="detail-value">{project.team}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="project-navigation"
        >
          <Link to="/portfolio" className="nav-btn">
            查看所有作品
          </Link>
          <Link to="/contact" className="nav-btn primary">
            聯絡我
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
