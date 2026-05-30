"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // Animation ko thoda aur deep kiya (y: 100, scale: 0.9) taaki clearly feel ho
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      
      // amount: 0.15 ensure karega ki element screen par aate hi trigger ho, margin fail hone ka chance khatam
      viewport={{ once: false, amount: 0.15 }}
      
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
