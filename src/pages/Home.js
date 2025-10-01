import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import PortfolioPreview from '../components/PortfolioPreview';
import Skills from '../components/Skills';
import './Home.css';

// 註冊 GSAP 插件
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    // GSAP 動畫設定
    const ctx = gsap.context(() => {
      // 文字動畫
      gsap.fromTo('.hero-text', 
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5, 
          ease: 'power2.out',
          stagger: 0.2
        }
      );

      // 滾動觸發動畫
      gsap.fromTo('.section-title', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.section-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // 卡片動畫
      gsap.fromTo('.card', 
        { opacity: 0, y: 80, scale: 0.8 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 1, 
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.cards-container',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={homeRef} className="home">
      <Hero />
      <AboutPreview />
      <Skills />
      <PortfolioPreview />
    </div>
  );
};

export default Home;
