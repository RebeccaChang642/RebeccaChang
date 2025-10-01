import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: '電商平台設計',
      category: 'UI/UX Design',
      description: '現代化的電商平台設計，專注於使用者體驗和轉換率優化',
      technologies: ['Figma', 'Adobe XD', 'Sketch'],
      year: '2024'
    },
    {
      id: 2,
      title: '行動應用設計',
      category: 'Mobile App',
      description: '直觀易用的行動應用介面設計，提升使用者參與度',
      technologies: ['Figma', 'Principle', 'After Effects'],
      year: '2024'
    },
    {
      id: 3,
      title: '品牌識別設計',
      category: 'Branding',
      description: '完整的品牌識別系統設計，包含標誌、色彩和應用規範',
      technologies: ['Illustrator', 'Photoshop', 'InDesign'],
      year: '2023'
    },
    {
      id: 4,
      title: '網站重新設計',
      category: 'Web Design',
      description: '企業官網的全面重新設計，提升品牌形象和使用者體驗',
      technologies: ['Figma', 'HTML/CSS', 'JavaScript'],
      year: '2023'
    },
    {
      id: 5,
      title: '儀表板設計',
      category: 'Dashboard',
      description: '數據可視化儀表板設計，讓複雜數據變得易於理解',
      technologies: ['Figma', 'D3.js', 'Chart.js'],
      year: '2023'
    },
    {
      id: 6,
      title: '社交媒體設計',
      category: 'Social Media',
      description: '創意社交媒體內容設計，提升品牌在線上的影響力',
      technologies: ['Photoshop', 'Illustrator', 'After Effects'],
      year: '2022'
    }
  ];

  const categories = ['全部', 'UI/UX Design', 'Mobile App', 'Branding', 'Web Design', 'Dashboard', 'Social Media'];

  return (
    <div className="portfolio">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="page-title"
        >
          作品集
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="page-subtitle"
        >
          探索我的設計作品，每個專案都展現不同的創意和技術
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="filter-tabs"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className={`filter-tab ${index === 0 ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="project-card"
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <span>{project.title}</span>
                </div>
                <div className="project-overlay">
                  <span className="project-year">{project.year}</span>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
