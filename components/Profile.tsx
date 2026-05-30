import React from 'react';

export default function Profile() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#050505] border-t border-wibify-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* Profile Image Space */}
        <div className="w-full md:w-1/3 relative group">
          <div className="aspect-[3/4] bg-[#0a0a0a] border border-wibify-border overflow-hidden rounded-sm relative">
             <div className="absolute inset-0 bg-wibify-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
             {/* Using a placeholder. Replace with your aesthetic photo */}
             <img 
               src="/sanyam.png" 
               alt="Sanyam Chavan" 
               className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
             />
             <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent z-20">
                <div className="flex gap-4 text-xs font-mono text-wibify-neon">
                    <span># DEVELOPER</span>
                    <span># ENGINEER</span>
                </div>
             </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -right-4 -bottom-4 w-24 h-24 border-r border-b border-wibify-neon/50"></div>
          <div className="absolute -left-4 -top-4 w-8 h-8 border-l border-t border-wibify-gray/50"></div>
        </div>

        {/* Profile Details */}
        <div className="w-full md:w-2/3">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Sanyam <span className="text-wibify-neon italic font-serif">Chavan.</span>
          </h2>
          <p className="text-wibify-gray text-xl mb-12 max-w-2xl font-light leading-relaxed">
            19-year-old Mechatronics student based in Pune. I balance a 45km daily commute, managing family business operations, and engineering autonomous systems like Anya. I build to solve real-world friction.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-wibify-border pt-12">
            <div>
              <div className="text-4xl font-bold text-white mb-2">19</div>
              <div className="text-xs font-mono text-wibify-gray uppercase tracking-widest">Age</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">45<span className="text-lg text-wibify-neon">km</span></div>
              <div className="text-xs font-mono text-wibify-gray uppercase tracking-widest">Daily Commute</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">01</div>
              <div className="text-xs font-mono text-wibify-gray uppercase tracking-widest">AI Framework</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">MH</div>
              <div className="text-xs font-mono text-wibify-gray uppercase tracking-widest">Pune Base</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
