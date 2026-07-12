import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Antigravity from './Antigravity';
import './HeroAboutTransition.css';
import Image1 from '../assets/Image1.jpg';
import Image2 from '../assets/Image2.jpg';

export default function HeroAboutTransition() {
  const containerRef = useRef(null);
  const heroRef = useRef(null); // Reference for drag constraints
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);
  const heroY = useTransform(smoothProgress, [0, 0.25], [0, -100]);
  const footerY = useTransform(smoothProgress, [0, 0.25], [0, 50]);

  const imageY = useTransform(smoothProgress, [0, 0.6], ["35vh", "0vh"]);
  const imageWidth = useTransform(smoothProgress, [0, 0.6], ["180px", "450px"]);
  const imageHeight = useTransform(smoothProgress, [0, 0.6], ["220px", "550px"]);
  const imageRotateY = useTransform(smoothProgress, [0, 0.6], [0, 180]);
  const imageBorderRadius = useTransform(smoothProgress, [0, 0.6], ["16px", "32px"]);
  
  const image1Opacity = useTransform(smoothProgress, [0, 0.6], [1, 0]);
  const image2Opacity = useTransform(smoothProgress, [0, 0.6], [0, 1]);

  const aboutOpacity = useTransform(smoothProgress, [0.4, 0.7], [0, 1]);
  const aboutY = useTransform(smoothProgress, [0.4, 0.7], [50, 0]);

  return (
    <section id="about" className="transition-wrapper" ref={containerRef}>
      <div id="about-content" style={{ position: 'absolute', top: '200vh' }} />
      <div className="sticky-container">
        
        {/* ===================== ANTIGRAVITY LAYER ===================== */}
        <div className="layer antigravity-layer" style={{ zIndex: 0, pointerEvents: 'auto' }}>
          <Antigravity
            count={300}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.5}
            lerpSpeed={0.05}
            color="#3504f9"
            autoAnimate={false}
            particleVariance={1}
            particleShape="tetrahedron"
          />
        </div>

        {/* ===================== HERO LAYER ===================== */}
        <motion.div 
          className="layer hero-layer"
          style={{ opacity: heroOpacity, y: heroY }}
          ref={heroRef}
        >


          {/* Interactive Floating Icons with Draggable Physics and Parallax */}
          <motion.div 
            className="floating-icon icon-sparkle" 
            style={{ rotate: -15 }}
            drag
            dragConstraints={heroRef}
            dragElastic={0.8}
            dragSnapToOrigin={true}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 15 }}
            whileDrag={{ cursor: "grabbing" }}
          >
            <motion.div
              animate={{ y: [-5, 5, -5], scale: [0.98, 1.04, 0.98] }}
              transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity }}
            >
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" fill="#111"/>
              </svg>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="floating-icon icon-zap" 
            style={{ rotate: 15 }}
            drag
            dragConstraints={heroRef}
            dragElastic={0.8}
            dragSnapToOrigin={true}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 15 }}
            whileDrag={{ cursor: "grabbing" }}
          >
            <motion.div
              animate={{ y: [5, -5, 5], scale: [1.02, 0.98, 1.02] }}
              transition={{ duration: 5.2, ease: "easeInOut", repeat: Infinity }}
            >
              <svg width="90" height="90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 5L20 55H50L45 95L85 45H55L60 5Z" fill="#111"/>
              </svg>
            </motion.div>
          </motion.div>
          
          {/* Huge Typography */}
          <div className="hero-huge-text-container">
            <h1 className="hero-huge-text">
              <span className="huge-line">SOFTWARE</span>
              <span className="huge-line">DEVELOPER</span>
            </h1>
          </div>
        </motion.div>

        {/* Hero Footer */}
        <motion.div 
          className="hero-bottom-footer"
          style={{ opacity: heroOpacity, y: footerY }}
        >
          <div className="footer-left">©2026</div>
        </motion.div>


        {/* ===================== SHARED IMAGE LAYER ===================== */}
        <div className="layer image-layer">
          <motion.div 
            className="profile-image-animator"
            style={{
              y: imageY,
              width: imageWidth,
              height: imageHeight,
              rotateY: imageRotateY,
              borderRadius: imageBorderRadius,
              transformStyle: "preserve-3d",
              position: "relative"
            }}
          >
            {/* Image 1 - Fades out */}
            <motion.img 
              src={Image1} 
              alt="Mandeep Pokharel - Portrait 1" 
              className="profile-image" 
              style={{ opacity: image1Opacity, position: "absolute", top: 0, left: 0 }}
            />
            {/* Image 2 - Fades in and is pre-flipped to correct orientation when container flips 180 */}
            <motion.img 
              src={Image2} 
              alt="Mandeep Pokharel - Portrait 2" 
              className="profile-image" 
              style={{ opacity: image2Opacity, position: "absolute", top: 0, left: 0, rotateY: 180 }}
            />
          </motion.div>
        </div>


        {/* ===================== ABOUT LAYER ===================== */}
        <motion.div 
          className="layer about-layer"
          style={{ opacity: aboutOpacity, y: aboutY }}
        >
          <div className="about-content">
            
            {/* Left Side */}
            <div className="about-column about-left">
              <h2 className="about-hey">Hey!</h2>
              <p className="about-bio">
                I'm Mandeep Pokharel, a BSc CSIT Final Year student passionate about software engineering, mobile application development, AI, and aviation technologies.
              </p>
            </div>

            {/* Right Side */}
            <div className="about-column about-right">
              <p className="about-bio">
                I build modern mobile and web applications with a focus on clean design, scalable architecture, and practical solutions. My interests include Flutter, FastAPI, AI-powered applications, GIS systems, and aviation technology.
              </p>
              
              <a 
                href="#projects"
                className="about-cta"
                style={{ textDecoration: 'none', display: 'inline-flex' }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                View My Projects <ArrowRight size={18} />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
