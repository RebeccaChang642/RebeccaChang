import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP 動畫
    const ctx = gsap.context(() => {
      // 文字動畫
      gsap.fromTo(textRef.current.children, 
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5, 
          ease: 'power2.out',
          stagger: 0.3
        }
      );

      // 背景動畫
      gsap.fromTo('.hero-bg', 
        { scale: 1.1, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 2, 
          ease: 'power2.out' 
        }
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <div className="hero-bg">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
            <meshStandardMaterial 
              color="#ff6b6b" 
              wireframe 
              transparent 
              opacity={0.3}
            />
          </Sphere>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      <div className="hero-content">
        <div ref={textRef} className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-title"
          >
            創意設計師
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hero-subtitle"
          >
            專注於創造令人驚艷的數位體驗
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hero-buttons"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              查看作品
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              聯絡我
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hero-scroll"
        >
          <div className="scroll-indicator">
            <div className="scroll-line"></div>
            <span>向下滾動</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
