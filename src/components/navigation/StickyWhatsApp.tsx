'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';

export function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/?text=Hello%20Verona%20Team%2C%20I%20have%20a%20procurement%20inquiry."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-white/30 group"
      title="Contact via WhatsApp"
      aria-label="WhatsApp Support"
    >
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white"></span>
      </span>
      <MessageSquare className="w-6 h-6 fill-white text-[#25D366]" />
    </a>
  );
}
