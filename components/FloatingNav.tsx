"use client";
import React from 'react';
import { MessageSquare, Phone, MessageCircle, MousePointer2 } from 'lucide-react';
import { triggerSwarm } from './SwarmController';

export default function FloatingNav() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-1 pr-6">
      <button
        onClick={triggerSwarm}
        className="bg-[#0f0f0f] border border-wibify-border p-4 hover:border-wibify-neon transition-colors duration-300 text-wibify-neon rounded-sm group relative overflow-hidden cursor-pointer"
        title="Swarm Rebuild Animation (Alt+Shift+S)"
      >
        <div className="absolute inset-0 bg-wibify-neon/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <MousePointer2 size={20} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
      </button>
      <a
        href="https://wa.me/918767842593"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0f0f0f] border border-wibify-border p-4 hover:border-wibify-neon transition-colors duration-300 text-wibify-gray hover:text-wibify-neon rounded-sm group relative overflow-hidden"
        title="WhatsApp: +91 8767842593"
      >
        <div className="absolute inset-0 bg-wibify-neon/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <MessageSquare size={20} className="relative z-10" />
      </a>
      <a
        href="mailto:sanyamchavan134@gmail.com"
        className="bg-[#0f0f0f] border border-wibify-border p-4 hover:border-wibify-neon transition-colors duration-300 text-wibify-gray hover:text-white rounded-sm group relative overflow-hidden"
        title="Email: sanyamchavan134@gmail.com"
      >
        <div className="absolute inset-0 bg-wibify-neon/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <MessageCircle size={20} className="relative z-10" />
      </a>
      <a
        href="tel:+918767842593"
        className="bg-[#0f0f0f] border border-wibify-border p-4 hover:border-wibify-neon transition-colors duration-300 text-wibify-gray hover:text-white rounded-sm group relative overflow-hidden"
        title="Call: +91 8767842593"
      >
        <div className="absolute inset-0 bg-wibify-neon/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <Phone size={20} className="relative z-10" />
      </a>
    </div>
  );
}
