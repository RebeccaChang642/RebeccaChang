import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import './PortfolioPreview.css';

const PortfolioPreview = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      id: 1,
      title: '電商平台設計',
      category: 'UI/UX Design',
      image: '/api/placeholder/400/300',
      description: '現代化的電商平台設計，專注於使用者體驗和轉換率優化'
    },
    {
      id: 2,
      title: '行動應用設計',
      category: 'Mobile App',
      image: '/api/placeholder/400/300',
      description: '直觀易用的行動應用介面設計，提升使用者參與度'
    },
    {
      id: 3,
      title: '品牌識別設計',
      category: 'Branding',
      image: '/api/placeholder/400/300',
      description: '完整的品牌識別系統設計，包含標誌、色彩和應用規範'
    }
  ];

  return (
    <section className="portfolio-preview">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="section-title"
        >
          {t.portfolioTitle}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          {t.portfolioSubtitle}
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <span>{project.title}</span>
                </div>
                <div className="project-overlay">
                  <Link to={`/portfolio/${project.id}`} className="view-project">
                    {t.viewProject}
                  </Link>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="view-all-projects"
        >
          <Link to="/portfolio" className="btn-primary">
            {t.viewAllProjects}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
