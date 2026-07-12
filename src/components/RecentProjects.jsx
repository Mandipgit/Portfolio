import React from 'react';
import { motion } from 'framer-motion';
import './RecentProjects.css';

const projects = [
  {
    name: "Disaster360",
    description: "A disaster management platform for Nepal that enables real-time incident reporting, risk mapping, emergency alerts, and rescue coordination using AI-powered duplicate detection and GIS technologies.",
    link: "https://github.com/Mandipgit/Disaster-360"
  },
  {
    name: "Aviocast",
    description: "A modern aviation weather forecasting application that provides pilots and aviation enthusiasts with accurate weather insights and flight-related meteorological information.",
    link: "https://github.com/Mandipgit/AvioCast"
  },
  {
    name: "College Management System",
    description: "A comprehensive college management system for handling student records, attendance, academic activities, faculty management, and administrative operations through a centralized platform.",
    link: "https://github.com/Mandipgit/CMS_Official"
  },
  {
    name: "Ekul",
    description: "An AI-powered student guidance platform that helps students discover suitable colleges, courses, and career paths through personalized recommendations and intelligent insights.",
    link: "https://ekkul.com"
  }
];

export default function RecentProjects() {
  return (
    <section id="projects" className="recent-projects-section">
      <div className="projects-container">
        <motion.h2 
          className="projects-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Recent Projects
        </motion.h2>

        <motion.div 
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
        >
          {projects.map((project, index) => (
            <motion.a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View project: ${project.name}`}
              className="project-card"
              variants={{
                hidden: { rotateY: 180, opacity: 0 },
                visible: { 
                  rotateY: 0, 
                  opacity: 1, 
                  transition: { 
                    type: "spring",
                    stiffness: 70,
                    damping: 15,
                    mass: 1.2
                  }
                }
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02, 
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              style={{ transformStyle: "preserve-3d", textDecoration: "none" }}
            >
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-link">
                View Project <span>→</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
