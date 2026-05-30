import React from 'react';

export default function Contact() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background border-t border-wibify-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* Left Side: Contact Info & Highlighted Text */}
        <div>
          <div className="text-wibify-gray text-xs tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
            <span className="w-4 h-[1px] bg-wibify-gray"></span>
            [06] CONTACT
          </div>
          
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-wibify-neon mb-12">
            Let's talk.
          </h2>

          {/* Wibify Style Highlighted Text */}
          <div className="text-lg md:text-xl font-medium leading-loose mb-16 max-w-md">
            <span className="bg-wibify-neon text-black px-2 py-1 box-decoration-clone">
              Direct line to Sanyam — no account manager and no
            </span>{' '}
            <span className="bg-wibify-neon text-black px-2 py-1 box-decoration-clone">
              briefing phone-tag between departments. Tell me
            </span>{' '}
            <span className="bg-wibify-neon text-black px-2 py-1 box-decoration-clone">
              about your next project for ambitious digital products,
            </span>{' '}
            <span className="bg-wibify-neon text-black px-2 py-1 box-decoration-clone">
              and I'll reply within 24 hours with concrete next
            </span>{' '}
            <span className="bg-wibify-neon text-black px-2 py-1 box-decoration-clone">
              steps.
            </span>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 text-sm font-mono border-t border-wibify-border pt-10">
            <div>
              <div className="text-wibify-gray tracking-widest uppercase mb-2 text-xs">Email</div>
              <a href="mailto:sanyamchavan134@gmail.com" className="hover:text-wibify-neon transition-colors">sanyamchavan134@gmail.com</a>
            </div>
            <div>
              <div className="text-wibify-gray tracking-widest uppercase mb-2 text-xs">Phone</div>
              <a href="tel:+918767842593" className="hover:text-wibify-neon transition-colors">+918767842593</a>
            </div>
            <div>
              <div className="text-wibify-gray tracking-widest uppercase mb-2 text-xs">Base</div>
              <div className="text-white">Pune, Maharashtra</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-black bg-wibify-neon px-3 py-1 text-xs font-bold uppercase tracking-widest">
                Reply within 24h
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Briefing Form */}
        <div className="bg-[#050505] border border-wibify-border p-8 md:p-12 rounded-sm relative">
           <div className="text-wibify-neon font-mono text-xs tracking-widest uppercase mb-4">
            Briefing
          </div>
          <h3 className="text-3xl font-bold mb-10 border-b border-wibify-border/50 pb-6">
            Send a short briefing.
          </h3>

          <form className="flex flex-col gap-8 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-wibify-gray font-mono text-xs tracking-widest uppercase">First Name <span className="text-wibify-neon">*</span></label>
                <input type="text" placeholder="Anna" className="bg-[#0a0a0a] border border-wibify-border p-4 text-white focus:border-wibify-neon outline-none transition-colors w-full rounded-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-wibify-gray font-mono text-xs tracking-widest uppercase">Last Name <span className="text-wibify-neon">*</span></label>
                <input type="text" placeholder="Smith" className="bg-[#0a0a0a] border border-wibify-border p-4 text-white focus:border-wibify-neon outline-none transition-colors w-full rounded-sm" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-wibify-gray font-mono text-xs tracking-widest uppercase">Email <span className="text-wibify-neon">*</span></label>
              <input type="email" placeholder="anna@company.com" className="bg-[#0a0a0a] border border-wibify-border p-4 text-white focus:border-wibify-neon outline-none transition-colors w-full rounded-sm" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-wibify-gray font-mono text-xs tracking-widest uppercase">Company (Optional)</label>
                <input type="text" placeholder="Studio Inc." className="bg-[#0a0a0a] border border-wibify-border p-4 text-white focus:border-wibify-neon outline-none transition-colors w-full rounded-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-wibify-gray font-mono text-xs tracking-widest uppercase">Website (Optional)</label>
                <input type="text" placeholder="https://..." className="bg-[#0a0a0a] border border-wibify-border p-4 text-white focus:border-wibify-neon outline-none transition-colors w-full rounded-sm" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-wibify-gray font-mono text-xs tracking-widest uppercase">Message (Optional)</label>
              <textarea rows={4} placeholder="Idea, industry, timeline — what we should know." className="bg-[#0a0a0a] border border-wibify-border p-4 text-white focus:border-wibify-neon outline-none transition-colors w-full rounded-sm resize-none"></textarea>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <input type="checkbox" className="w-5 h-5 accent-wibify-neon bg-transparent border-wibify-border cursor-pointer" />
              <span className="text-wibify-gray text-xs">I consent to the processing of my data according to the privacy policy.</span>
            </div>

            <button type="button" className="mt-4 border border-wibify-border py-5 hover:bg-white hover:text-black transition-colors duration-300 font-medium">
              Send request →
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
