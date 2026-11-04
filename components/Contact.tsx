"use client";
import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, ArrowUpRight, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = `${firstName} ${lastName}`.trim();
    const subject = encodeURIComponent(`Project Briefing from ${fullName || 'Client'}`);
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:sanyamchavan134@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppSubmit = () => {
    const fullName = `${firstName} ${lastName}`.trim();
    const text = encodeURIComponent(
      `Hi Sanyam, my name is ${fullName || 'a client'}${company ? ` from ${company}` : ''}.\nEmail: ${email}\n\n${message || 'I would like to discuss a project with you.'}`
    );
    window.open(`https://wa.me/918767842593?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-background border-t border-wibify-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* Left Side: Contact Info & Highlighted Text */}
        <div>
          <div className="text-wibify-gray text-xs tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
            <span className="w-4 h-[1px] bg-wibify-gray"></span>
            [06] CONTACT
          </div>
          
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-wibify-neon mb-12">
            Let&apos;s talk.
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
              and I&apos;ll reply within 24 hours with concrete next
            </span>{' '}
            <span className="bg-wibify-neon text-black px-2 py-1 box-decoration-clone">
              steps.
            </span>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 text-sm font-mono border-t border-wibify-border pt-10">
            <div>
              <div className="text-wibify-gray tracking-widest uppercase mb-2 text-xs flex items-center gap-2">
                <Mail size={14} className="text-wibify-neon" />
                Email
              </div>
              <a href="mailto:sanyamchavan134@gmail.com" className="hover:text-wibify-neon transition-colors break-all">
                sanyamchavan134@gmail.com
              </a>
            </div>
            <div>
              <div className="text-wibify-gray tracking-widest uppercase mb-2 text-xs flex items-center gap-2">
                <MessageSquare size={14} className="text-wibify-neon" />
                WhatsApp
              </div>
              <a href="https://wa.me/918767842593" target="_blank" rel="noopener noreferrer" className="hover:text-wibify-neon transition-colors inline-flex items-center gap-1">
                <span>+91 8767842593</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
            <div>
              <div className="text-wibify-gray tracking-widest uppercase mb-2 text-xs flex items-center gap-2">
                <Phone size={14} className="text-wibify-neon" />
                Direct Call
              </div>
              <a href="tel:+918767842593" className="hover:text-wibify-neon transition-colors">
                +91 8767842593
              </a>
            </div>
            <div>
              <div className="text-wibify-gray tracking-widest uppercase mb-2 text-xs">Base</div>
              <div className="text-white">Pune, Maharashtra</div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/918767842593"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-wibify-neon bg-wibify-neon/10 hover:bg-wibify-neon hover:text-black text-wibify-neon font-mono text-xs px-5 py-3.5 rounded-sm transition-all duration-300"
            >
              <MessageSquare size={14} />
              <span>Chat on WhatsApp (+91 8767842593)</span>
              <ArrowRight size={13} />
            </a>
            <a
              href="mailto:sanyamchavan134@gmail.com"
              className="inline-flex items-center gap-2 border border-wibify-border hover:border-white text-white font-mono text-xs px-5 py-3.5 rounded-sm transition-all duration-300 bg-[#0f0f0f]"
            >
              <Mail size={14} />
              <span>Open in Mail App</span>
              <ArrowRight size={13} />
            </a>
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

          <form onSubmit={handleEmailSubmit} className="flex flex-col gap-8 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-wibify-gray font-mono text-xs tracking-widest uppercase">First Name <span className="text-wibify-neon">*</span></label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Your Name"
                  className="bg-[#0a0a0a] border border-wibify-border p-4 text-white focus:border-wibify-neon outline-none transition-colors w-full rounded-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-wibify-gray font-mono text-xs tracking-widest uppercase">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="bg-[#0a0a0a] border border-wibify-border p-4 text-white focus:border-wibify-neon outline-none transition-colors w-full rounded-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-wibify-gray font-mono text-xs tracking-widest uppercase">Email <span className="text-wibify-neon">*</span></label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@domain.com"
                className="bg-[#0a0a0a] border border-wibify-border p-4 text-white focus:border-wibify-neon outline-none transition-colors w-full rounded-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-wibify-gray font-mono text-xs tracking-widest uppercase">Company / Organization (Optional)</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company or University"
                className="bg-[#0a0a0a] border border-wibify-border p-4 text-white focus:border-wibify-neon outline-none transition-colors w-full rounded-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-wibify-gray font-mono text-xs tracking-widest uppercase">Message <span className="text-wibify-neon">*</span></label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Idea, timeline, or requirements — what should we engineer?"
                className="bg-[#0a0a0a] border border-wibify-border p-4 text-white focus:border-wibify-neon outline-none transition-colors w-full rounded-sm resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 border border-wibify-neon bg-wibify-neon text-black py-4 font-mono text-xs uppercase tracking-widest font-bold hover:bg-transparent hover:text-wibify-neon transition-all duration-300 cursor-pointer"
              >
                <span>Send via Email</span>
                <ArrowRight size={14} />
              </button>
              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="flex-1 inline-flex items-center justify-center gap-2 border border-wibify-border hover:border-wibify-neon py-4 font-mono text-xs uppercase tracking-widest text-white hover:text-wibify-neon transition-all duration-300 cursor-pointer bg-[#0f0f0f]"
              >
                <span>Send via WhatsApp</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
