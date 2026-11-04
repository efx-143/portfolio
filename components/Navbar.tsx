"use client";
import { Menu, X, MousePointer2, ArrowUpRight, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { triggerSwarm } from './SwarmController';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-[999] flex items-center justify-between px-6 md:px-12 py-5 pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto mix-blend-difference text-white">
          <a href="#" className="text-wibify-neon font-bold text-3xl tracking-tighter hover:opacity-80 transition-opacity">
            S.
          </a>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 pointer-events-auto">
          {!isOpen && (
            <>
              <button
                onClick={triggerSwarm}
                className="flex items-center gap-2 text-xs font-mono border border-wibify-neon/40 bg-wibify-neon/10 hover:bg-wibify-neon hover:text-black text-wibify-neon px-3.5 py-2 rounded transition-all duration-300 cursor-pointer shadow-[0_0_12px_rgba(204,255,0,0.12)] group"
                title="Watch multiplayer cursors rebuild the site live (Alt+Shift+S)"
              >
                <MousePointer2 size={13} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden sm:inline font-medium">Swarm Rebuild</span>
                <span className="sm:hidden font-medium">Swarm</span>
              </button>

              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-1.5 text-sm border border-wibify-border px-4 py-2 rounded hover:bg-white hover:text-black transition-all duration-300 bg-[#050505]/60 backdrop-blur-sm cursor-pointer"
              >
                <span>Contact Me</span>
                <ArrowRight size={14} />
              </a>
            </>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="border border-wibify-border p-2.5 rounded hover:bg-white hover:text-black transition-all duration-300 bg-[#050505] text-white cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-[#050505] z-[998] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col justify-between px-6 sm:px-12 md:px-24 pt-28 pb-10 overflow-y-auto ${
          isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-5 sm:gap-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight my-auto">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-wibify-neon hover:translate-x-6 transition-all duration-300 w-max"
          >
            Profile
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-wibify-neon hover:translate-x-6 transition-all duration-300 w-max"
          >
            Projects
          </a>
          <a
            href="#workspace"
            onClick={() => setIsOpen(false)}
            className="hover:text-wibify-neon hover:translate-x-6 transition-all duration-300 w-max"
          >
            Workspace
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-wibify-neon hover:translate-x-6 transition-all duration-300 w-max"
          >
            Contact
          </a>

          <div className="pt-4">
            <button
              onClick={() => {
                setIsOpen(false);
                triggerSwarm();
              }}
              className="inline-flex items-center gap-2.5 border border-wibify-neon/50 bg-wibify-neon/10 hover:bg-wibify-neon hover:text-black text-wibify-neon px-4 py-3 rounded-sm font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer group"
            >
              <MousePointer2 size={15} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Launch Swarm Rebuild</span>
              <span className="text-[10px] opacity-70 bg-black/40 px-2 py-0.5 rounded border border-white/10 font-mono">
                Alt+Shift+S
              </span>
            </button>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="pt-8 border-t border-wibify-border/40 text-wibify-gray font-mono text-xs uppercase tracking-widest flex flex-wrap gap-x-8 gap-y-3">
          <a href="mailto:sanyamchavan134@gmail.com" className="hover:text-wibify-neon transition-colors inline-flex items-center gap-1">
            <span>sanyamchavan134@gmail.com</span>
            <ArrowUpRight size={12} />
          </a>
          <a href="https://wa.me/918767842593" target="_blank" rel="noopener noreferrer" className="hover:text-wibify-neon transition-colors inline-flex items-center gap-1">
            <span>WhatsApp: +91 8767842593</span>
            <ArrowUpRight size={12} />
          </a>
          <a href="https://instagram.com/pov.sanyam" target="_blank" rel="noopener noreferrer" className="hover:text-wibify-neon transition-colors inline-flex items-center gap-1">
            <span>IG: pov.sanyam</span>
            <ArrowUpRight size={12} />
          </a>
          <a href="https://mxesa.in" target="_blank" rel="noopener noreferrer" className="hover:text-wibify-neon transition-colors inline-flex items-center gap-1">
            <span>MXESA: mxesa.in</span>
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </>
  );
}
