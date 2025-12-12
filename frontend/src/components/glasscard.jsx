import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`backdrop-blur-xl bg-neon-glass border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;