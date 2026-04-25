import React from 'react';
import { motion } from 'motion/react';

const Section = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`py-24 md:py-32 relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for premium feel
          delay: 0.1 
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
