"use client";
import React, { useState } from 'react';
import { RevealContainer, RevealItem } from './Reveal';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  { 
    id: '01', 
    title: 'Anya Framework', 
    type: 'AI / AUTONOMOUS', 
    year: '2026',
    description: 'An autonomous self-healing and learning AI framework. Unlike standard chat agents, Anya is built to dynamically adapt, learn from its environment, and resolve its own operational errors. Secured 3rd place at the PRAXIS national workshop.',
    tech: ['Python', 'Neural Networks', 'Self-Healing Logic'],
    link: 'https://github.com/efx-143'
  },
  { 
    id: '02', 
    title: 'Friction', 
    type: 'REACT NATIVE', 
    year: '2026',
    description: 'An offline-first React Native mobile application engineered to combat doom-scrolling. Friction actively blocks infinite-scrolling feeds and helps users reclaim their digital focus through aggressive screen-time intervention.',
    tech: ['React Native', 'Mobile UI', 'Local Storage'],
    link: 'https://github.com/efx-143'
  },
  { 
    id: '03', 
    title: 'Living Diary', 
    type: 'SOFTWARE', 
    year: '2025',
    description: 'A secure, local-first software that organizes thoughts, tracks daily cognitive patterns, and stores encrypted entries locally on the Arch Linux environment without relying on vulnerable cloud servers.',
    tech: ['C++', 'Security', 'File System'],
    link: 'https://github.com/efx-143'
  },
  { 
    id: '04', 
    title: 'College Filter', 
    type: 'WEB UTILITY', 
    year: '2025',
    description: 'A high-speed web utility designed to help engineering students filter and sort SPPU affiliated colleges based on cut-offs, placement records, and commute distances.',
    tech: ['Next.js', 'Data Parsing', 'UI/UX'],
    link: 'https://github.com/efx-143'
  },
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-32 px-6 md:px-12 bg-background border-t border-wibify-border">
      <RevealContainer>
        
        <RevealItem className="text-wibify-gray text-xs tracking-[0.2em] uppercase mb-12">
          [02] Selected Work / 2024 — 2026
        </RevealItem>
        
        <RevealItem>
          <h2 className="text-5xl md:text-7xl lg:text-[8vw] font-bold tracking-tighter mb-16 leading-none">
            What I've <span className="text-wibify-neon italic font-serif">built.</span>
          </h2>
        </RevealItem>

        <div className="flex flex-col border-t border-wibify-border group/list">
          {projects.map((project) => (
            <RevealItem key={project.id}>
              <div className="border-b border-wibify-border">
                {/* Header Row (Clickable) */}
                <div 
                  onClick={() => toggleExpand(project.id)}
                  className="group/row relative flex items-center justify-between py-10 md:py-14 cursor-pointer z-10"
                >
                  <div className="flex items-center gap-8 md:gap-16">
                    <span className={`text-sm font-mono transition-colors duration-300 ${expandedId === project.id ? 'text-wibify-neon opacity-100' : 'text-wibify-gray opacity-50 group-hover/row:text-wibify-neon'}`}>
                      {project.id}
                    </span>
                    <h3 className={`text-4xl md:text-6xl font-bold tracking-tight transition-all duration-500 ${expandedId === project.id ? 'text-wibify-neon pl-4' : 'text-white group-hover/row:text-wibify-neon group-hover/row:pl-4'}`}>
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="hidden md:flex items-center gap-8 text-wibify-gray font-mono text-xs tracking-widest uppercase">
                    <span className="transition-colors duration-300 group-hover/row:text-white">{project.type}</span>
                    <span className="transition-colors duration-300 group-hover/row:text-white">{project.year}</span>
                    <motion.span 
                      animate={{ rotate: expandedId === project.id ? 45 : 0 }}
                      className={`text-2xl transition-opacity duration-300 ${expandedId === project.id ? 'opacity-100 text-wibify-neon' : 'opacity-0 group-hover/row:opacity-100 text-wibify-neon'}`}
                    >
                      +
                    </motion.span>
                  </div>
                </div>

                {/* Expandable Details Section */}
                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-14 pt-4 flex flex-col md:flex-row gap-8 md:gap-16 md:pl-[6.5rem]">
                        <div className="w-full md:w-2/3">
                          <p className="text-wibify-gray text-lg font-light leading-relaxed mb-8">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-3">
                            {project.tech.map((t, i) => (
                              <span key={i} className="border border-wibify-border px-3 py-1.5 text-xs font-mono text-white uppercase tracking-widest bg-[#050505]">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="w-full md:w-1/3 flex items-start md:justify-end">
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center gap-2 border border-wibify-neon text-wibify-neon px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-wibify-neon hover:text-black transition-all duration-300"
                          >
                            View Repository ↗
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealItem>
          ))}
        </div>
        
      </RevealContainer>
    </section>
  );
}
