import React from 'react';
import { motion } from 'framer-motion';
import { FaJava } from 'react-icons/fa';
import { 
  SiPython, SiCplusplus, SiC, SiDart,
  SiHtml5, SiCss, SiReact,
  SiFlutter,
  SiFastapi, SiNestjs, SiDotnet,
  SiMysql, SiPostgresql, SiSupabase,
  SiFirebase, SiRender,
  SiDocker, SiGit
} from 'react-icons/si';
import './TechStack.css';

const techCategories = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "Dart", icon: SiDart, color: "#0175C2" }
    ]
  },
  {
    title: "Frontend Technologies",
    items: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "React", icon: SiReact, color: "#61DAFB" }
    ]
  },
  {
    title: "Mobile Development",
    items: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" }
    ]
  },
  {
    title: "Backend Technologies",
    items: [
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: ".NET", icon: SiDotnet, color: "#512BD4" }
    ]
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" }
    ]
  },
  {
    title: "Cloud & Deployment",
    items: [
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Render", icon: SiRender, color: "#000000" }
    ]
  },
  {
    title: "Developer Tools",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" }
    ]
  }
];



export default function TechStack() {
  return (
    <section id="toolkit" className="tech-stack-section">
      <div className="tech-stack-container">
        <motion.h2 
          className="tech-stack-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          My Development Toolkit
        </motion.h2>

        <div className="tech-categories-stack">
          {techCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex} 
              className="tech-category-column"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h3 
                className="tech-category-title"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
              >
                {category.title}
              </motion.h3>
              
              <motion.div 
                className="tech-items-grid"
                variants={{
                  hidden: { opacity: 1 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  }
                }}
              >
                {category.items.map((tech, techIndex) => (
                  <motion.div 
                    key={techIndex} 
                    className="tech-item-card"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                    }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <tech.icon className="tech-icon" style={{ color: tech.color }} />
                    <span className="tech-name">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
