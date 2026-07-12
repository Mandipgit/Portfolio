import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import './ContactSection.css';

const leftVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const rightContainerVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.3
    } 
  }
};

const formItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      
      // Auto-hide success message after 5 seconds
      if (submitStatus === 'success') {
        setTimeout(() => {
          setSubmitStatus(null);
          setStatusMessage('');
        }, 5000);
      }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* Left Side */}
        <motion.div 
          className="contact-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.h2 className="contact-title" variants={leftVariants}>
            Let's talk.
          </motion.h2>
          
          <motion.p className="contact-description" variants={leftVariants}>
            Have an exciting project, collaboration, or opportunity in mind? Fill out the form, and I'll get back to you as soon as possible.
          </motion.p>
          
          <motion.div 
            className="social-links"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
            }}
          >
            <motion.a href="https://github.com/mandipgit" target="_blank" rel="noopener noreferrer" className="social-btn" variants={leftVariants} aria-label="GitHub">
              <FaGithub />
            </motion.a>
            <motion.a href="#" className="social-btn" variants={leftVariants} aria-label="LinkedIn">
              <FaLinkedin />
            </motion.a>
            <motion.a href="https://www.facebook.com/mandip.pokharel.357" target="_blank" rel="noopener noreferrer" className="social-btn" variants={leftVariants} aria-label="Facebook">
              <FaFacebook />
            </motion.a>
            <motion.a href="https://www.instagram.com/mandeep_pokharel?igsh=NTIxbGt5emp1ejQ2" target="_blank" rel="noopener noreferrer" className="social-btn" variants={leftVariants} aria-label="Instagram">
              <FaInstagram />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div 
          className="contact-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={rightContainerVariants}
        >
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <AnimatePresence>
              {submitStatus && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`form-status-message ${submitStatus}`}
                >
                  {submitStatus === 'success' ? <FaCheckCircle className="status-icon" /> : <FaExclamationCircle className="status-icon" />}
                  <span>{statusMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div className="form-group" variants={formItemVariants}>
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleInputChange} className="form-input" placeholder="Enter your name" required disabled={isSubmitting} />
            </motion.div>
            
            <motion.div className="form-group" variants={formItemVariants}>
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleInputChange} className="form-input" placeholder="Enter your email" required disabled={isSubmitting} />
            </motion.div>
            
            <motion.div className="form-group" variants={formItemVariants}>
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" id="subject" value={formData.subject} onChange={handleInputChange} className="form-input" placeholder="What is this regarding?" required disabled={isSubmitting} />
            </motion.div>
            
            <motion.div className="form-group" variants={formItemVariants}>
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" value={formData.message} onChange={handleInputChange} className="form-textarea" placeholder="Tell me about your project" required disabled={isSubmitting}></textarea>
            </motion.div>
            
            <motion.button type="submit" className="form-submit-btn" variants={formItemVariants} disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="btn-content loading">
                  <FaSpinner className="spinner-icon" /> Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
