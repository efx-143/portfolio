"use client";
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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
      <nav className="fixed top-0 w-full z-[999] flex items-center justify-between px-6 md:px-12 py-6 pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto mix-blend-difference text-white">
          <div className="text-wibify-neon font-bold text-3xl tracking-tighter">
            S.
          </div>
        </div>
        <div className="flex items-center gap-4 pointer-events-auto">
          <Link href="#" className="hidden md:block text-sm border border-wibify-border px-4 py-2 rounded hover:bg-white hover:text-black transition-all duration-300 bg-[#050505]/50 backdrop-blur-sm">
            Contact Me →
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="border border-wibify-border p-2 rounded hover:bg-white hover:text-black transition-all duration-300 bg-[#050505] text-white cursor-pointer">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-[#050505] z-[998] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col justify-center px-6 md:px-24 ${
          isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
        }`}>
        <div className="flex flex-col gap-4 text-6xl md:text-[8vw] font-bold tracking-tighter leading-none">
          <a href="#" onClick={() => setIsOpen(false)} className="hover:text-wibify-neon hover:translate-x-8 transition-all duration-500 w-max">Profile</a>
          <a href="#" onClick={() => setIsOpen(false)} className="hover:text-wibify-neon hover:translate-x-8 transition-all duration-500 w-max">Projects</a>
          <a href="#" onClick={() => setIsOpen(false)} className="hover:text-wibify-neon hover:translate-x-8 transition-all duration-500 w-max">Terminal</a>
          <a href="#" onClick={() => setIsOpen(false)} className="hover:text-wibify-neon hover:translate-x-8 transition-all duration-500 w-max">Contact</a>
        </div>
        <div className="absolute bottom-12 left-6 md:left-24 text-wibify-gray font-mono text-xs uppercase tracking-widest flex gap-8">
            <a href="https://instagram.com/pov.sanyam" target="_blank" className="hover:text-wibify-neon transition-colors">IG: pov.sanyam ↗</a>
            <a href="https://instagram.com/cosmic_balak" target="_blank" className="hover:text-wibify-neon transition-colors">IG: cosmic_balak ↗</a>
        </div>
      </div>
    </>
  );
}
