import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './QuoteSection.css';

const quote = "From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use, driven by clarity, structured systems, and intentional design.";

export default function QuoteSection() {
  const containerRef = useRef(null);
  
  // Trigger animation when the section is mostly in view
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });
  const [isRevealing, setIsRevealing] = useState(false);

  // Split quote into words, then characters
  const words = quote.split(" ");
  const totalChars = quote.length;

  useEffect(() => {
    if (isInView && !isRevealing) {
      // Start the reveal and lock scroll
      setIsRevealing(true);
      document.body.style.overflow = 'hidden';
      // Fallback for touch devices
      document.body.style.touchAction = 'none';
      
      // We know how long the animation will take based on stagger and duration
      // Stagger is 0.01s per char, duration is 0.2s, totalChars is ~175
      // Wait for completion then unlock
      const totalAnimationTime = (totalChars * 0.01 + 0.2) * 1000 + 300; // adding 300ms buffer
      
      const unlockTimer = setTimeout(() => {
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
      }, totalAnimationTime);

      return () => {
        clearTimeout(unlockTimer);
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
      };
    }
  }, [isInView, isRevealing, totalChars]);

  return (
    <section className="quote-section-wrapper" ref={containerRef}>
      <div className="quote-sticky-container">
        <div className="quote-content">
          <motion.p 
            className="quote-text"
            initial="hidden"
            animate={isRevealing ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.01 // very fast character reveal
                }
              }
            }}
          >
            {words.map((word, wordIndex) => (
              <span className="quote-word" key={wordIndex}>
                {word.split("").map((char, charIndex) => (
                  <motion.span 
                    key={charIndex} 
                    className="quote-char"
                    variants={{
                      hidden: { color: "#B8B8B8" },
                      visible: { 
                        color: "#111111", 
                        transition: { duration: 0.2, ease: "easeInOut" } 
                      }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordIndex < words.length - 1 && (
                  <span className="quote-space"> </span>
                )}
              </span>
            ))}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
