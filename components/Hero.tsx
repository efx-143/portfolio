"use client";
import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wibify-neon/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="flex flex-col lg:flex-row justify-between items-center relative z-10 w-full h-full mt-10">
        
        {/* Left Side: Text Area */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center pointer-events-auto z-20">
          <div className="flex items-center gap-4 mb-8 text-wibify-gray text-xs tracking-[0.2em] uppercase">
            <span className="w-8 h-[1px] bg-wibify-gray"></span>
            [01] Sanyam Chavan — Portfolio
          </div>
          
          {/* Updated Personal Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[1.05] max-w-3xl">
            Engineering intelligent <br />
            <span className="text-wibify-neon italic font-serif pr-2">systems</span> that <br />
            scale and adapt.
          </h1>
          
          <p className="text-wibify-gray mt-8 text-lg max-w-lg font-light leading-relaxed">
            Mechatronics Engineering student and full-stack developer. Building everything from offline React Native applications to self-healing AI frameworks.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <button className="bg-[#0f0f0f] border border-wibify-border px-8 py-4 rounded-sm text-sm font-medium hover:border-wibify-neon transition-all duration-300 relative group overflow-hidden">
              <span className="relative z-10 group-hover:text-wibify-neon transition-colors duration-300">Start a project →</span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-wibify-neon shadow-[0_0_10px_#ccff00]"></div>
            </button>
            <div className="flex items-center gap-3 text-sm text-wibify-gray bg-[#0f0f0f] border border-wibify-border px-6 py-4 rounded-sm">
              <div className="w-2 h-2 bg-wibify-neon rounded-sm"></div>
              Arch Linux Environment
            </div>
          </div>
        </div>

        {/* Right Side: Static Image */}
        <div className="absolute right-0 top-0 lg:relative lg:w-[40%] h-full lg:h-[80vh] flex justify-center lg:justify-start items-center z-10 pointer-events-auto lg:-ml-12">
           <img 
             src="/strategie.avif" 
             alt="3D Abstract Object" 
             className="w-full max-w-[600px] h-auto object-contain opacity-70 mix-blend-screen scale-105"
           />
        </div>

      </div>
      
      {/* Bottom Stats Bar */}
      <div className="mt-auto mb-10 flex flex-wrap gap-12 text-xs font-mono text-wibify-gray border-t border-wibify-border/50 pt-8 w-full z-20 relative">
        <div className="flex items-center gap-3">
          <span className="bg-wibify-neon/10 text-wibify-neon p-1 rounded-sm">★</span> 
          8.95 SGPA - SPPU
        </div>
        <div className="flex items-center gap-3">
          <span className="text-wibify-neon border border-wibify-neon/30 p-1 rounded-sm">✦</span> 
          3RD PLACE - PRAXIS
        </div>
        <div className="flex items-center gap-3">
          <span className="text-wibify-neon border border-wibify-neon/30 p-1 rounded-sm">⚡</span> 
          PYTHON, C++, REACT NATIVE
        </div>
      </div>
    </section>
  );
}
