"use client";
import React, { useEffect, useRef } from 'react';
import { RevealContainer, RevealItem } from './Reveal';
import { useInView, animate } from 'framer-motion';

// Value ko string ki jagah number banaya hai taaki math lag sake
const stats = [
  { label: 'SEMESTER GPA - SPPU', value: 8.95, suffix: '', isFloat: true },
  { label: 'PLACE - PRAXIS', value: 3, suffix: 'RD', isFloat: false },
  { label: 'DAILY COMMUTE', value: 45, suffix: 'KM', isFloat: false },
  { label: 'ENGINEERING YEAR', value: 2, suffix: 'ND', isFloat: false }
];

// Naya Custom Counter Component
function AnimatedNumber({ value, isFloat }: { value: number, isFloat?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView && ref.current) {
      animate(0, value, {
        duration: 2, // 2 seconds rapid count
        ease: [0.22, 1, 0.36, 1], // Wibify style smooth slow-down
        onUpdate: (v) => {
          if (ref.current) {
            // Agar SGPA (float) hai toh 2 decimal, warna direct number
            ref.current.textContent = isFloat ? v.toFixed(2) : Math.floor(v).toString().padStart(isFloat ? 1 : 2, '0');
          }
        },
      });
    }
  }, [inView, value, isFloat]);

  return <span ref={ref}>0</span>;
}

export default function Results() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background border-t border-wibify-border">
      <RevealContainer className="max-w-7xl mx-auto">
        <RevealItem className="text-wibify-gray text-xs tracking-[0.2em] uppercase mb-12 flex items-center gap-4">
          <span className="w-4 h-[1px] bg-wibify-gray"></span>
          [08] The Numbers
        </RevealItem>
        
        <RevealItem>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-20 leading-none">
            Data driven <span className="text-wibify-neon italic font-serif">results.</span>
          </h2>
        </RevealItem>

        <RevealContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-wibify-border pt-12">
          {stats.map((stat, index) => (
            <RevealItem key={index} className="flex flex-col">
              <div className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter flex items-baseline">
                {/* Yahan number count trigger hoga */}
                <AnimatedNumber value={stat.value} isFloat={stat.isFloat} />
                <span className="text-wibify-neon text-2xl md:text-4xl ml-1 font-serif italic">{stat.suffix}</span>
              </div>
              <div className="text-wibify-gray font-mono text-xs tracking-widest uppercase">
                {stat.label}
              </div>
            </RevealItem>
          ))}
        </RevealContainer>
      </RevealContainer>
    </section>
  );
}
