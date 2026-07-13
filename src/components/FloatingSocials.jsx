import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import './FloatingSocials.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function FloatingSocials() {
  return (
    <motion.div
      className="floating-socials"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.a href="https://github.com/mandipgit" target="_blank" rel="noopener noreferrer" className="floating-social-btn" variants={itemVariants} aria-label="GitHub">
        <FaGithub />
      </motion.a>
      <motion.a href="https://www.linkedin.com/in/mandeep-pokharel-726097422" target="_blank" rel="noopener noreferrer" className="floating-social-btn" variants={itemVariants} aria-label="LinkedIn">
        <FaLinkedin />
      </motion.a>
      <motion.a href="https://www.facebook.com/mandip.pokharel.357" target="_blank" rel="noopener noreferrer" className="floating-social-btn" variants={itemVariants} aria-label="Facebook">
        <FaFacebook />
      </motion.a>
      <motion.a href="https://www.instagram.com/mandeep_pokharel?igsh=NTIxbGt5emp1ejQ2" target="_blank" rel="noopener noreferrer" className="floating-social-btn" variants={itemVariants} aria-label="Instagram">
        <FaInstagram />
      </motion.a>
    </motion.div>
  );
}
