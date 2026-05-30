import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-32 pb-12 px-6 md:px-12 border-t border-wibify-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-32">
        <div>
          <div className="text-wibify-neon font-bold text-5xl tracking-tighter mb-4">S.</div>
          <h2 className="text-2xl font-bold max-w-xs">
            Mechatronics & Software <br/>
            <span className="text-wibify-gray font-normal italic">from Pune, MH.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
          <div>
            <h4 className="text-xs font-mono text-wibify-gray tracking-widest uppercase mb-6">Base</h4>
            <ul className="text-sm space-y-3 text-wibify-gray font-light">
              <li>Pune, Maharashtra</li>
              <li>Wadhu BK → Lohegaon</li>
              <li>MMIT Campus</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-mono text-wibify-gray tracking-widest uppercase mb-6">Social</h4>
            <ul className="text-sm space-y-3 text-wibify-gray font-light">
              <li><a href="https://instagram.com/pov.sanyam" target="_blank" className="hover:text-wibify-neon transition-colors">IG: pov.sanyam ↗</a></li>
              <li><a href="https://instagram.com/cosmic_balak" target="_blank" className="hover:text-wibify-neon transition-colors">IG: cosmic_balak ↗</a></li>
              <li><a href="#" className="hover:text-wibify-neon transition-colors">GitHub ↗</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-mono text-wibify-gray border-t border-wibify-border/50 pt-8">
        <p>© 2026 SANYAM CHAVAN</p>
        <p className="mt-4 md:mt-0">ENGINEERED IN ARCH LINUX</p>
      </div>
    </footer>
  );
}
