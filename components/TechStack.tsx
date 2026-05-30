import React from 'react';

const claims = [
  { name: 'React Native', desc: 'Cross-platform mobile framework — used for building offline-first, performance-focused apps like Friction.' },
  { name: 'Arch Linux', desc: 'Primary development environment — optimized for speed, complete customization, and low-level control.' },
  { name: 'Python & C++', desc: 'Core languages for AI models, self-healing frameworks like Anya, and hardware-level mechatronics integrations.' },
  { name: 'Next.js & Tailwind', desc: 'Modern web stack — utilizing React ecosystems for high-performance, pixel-perfect user interfaces.' }
];

export default function TechStack() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background border-t border-wibify-border">
      <div className="flex flex-col md:flex-row gap-16 max-w-7xl mx-auto">
        <div className="md:w-1/3">
           <div className="text-wibify-gray text-xs tracking-[0.2em] uppercase mb-8">
            [REF] CORE STACK
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Verify the <br/> arsenal.</h2>
          <p className="text-wibify-gray text-lg font-light">
            Built on reliable, high-performance technologies. No bloatware, just optimized engineering.
          </p>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {claims.map((claim, idx) => (
            <div key={idx} className="group cursor-pointer">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 group-hover:text-wibify-neon transition-colors duration-300">
                {claim.name} <span className="text-wibify-gray font-normal text-sm opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </h3>
              <p className="text-wibify-gray text-sm leading-relaxed font-light">{claim.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
