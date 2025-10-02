import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import './Skills.css';

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const skills = [
    { name: 'UI/UX Design', level: 90, color: '#ff6b6b' },
    { name: 'Figma', level: 95, color: '#4ecdc4' },
    { name: 'Adobe Creative Suite', level: 85, color: '#45b7d1' },
    { name: 'Prototyping', level: 88, color: '#96ceb4' },
    { name: 'User Research', level: 80, color: '#feca57' },
    { name: 'Frontend Development', level: 75, color: '#ff9ff3' }
  ];

  return (
    <section className="skills">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="section-title"
        >
          {t.skillsTitle}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          {t.skillsSubtitle}
        </motion.p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="skill-card"
            >
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
