'use client';

import React from 'react';
import { Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-400" role="contentinfo">
      <div className="section-inner py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <a
              href="#top"
              className="flex items-center gap-2 text-stone-100 font-display font-medium text-xl mb-6"
              aria-label="Elevated Visuals by Sosa - Home"
            >
              <span className="w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/40 text-brand-400 flex items-center justify-center text-xs font-sans font-bold">
                EV
              </span>
              <span>
                Elevated Visuals <span className="italic text-brand-400 font-normal">by Sosa</span>
              </span>
            </a>
            <p className="text-sm text-stone-400 leading-relaxed mb-6 max-w-xs">
              Cinematic, candid content for weddings, celebrations and the stories that matter most.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/elevatedvisualsbysosa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-brand-400 hover:border-brand-500/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com/@elevatedvisualsbysosa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-brand-400 hover:border-brand-500/40 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 11-5.2-1.74 2.89 2.89 0 012.31-1.37h.17V9.12a6.34 6.34 0 00-1-.08 6.34 6.34 0 106.34 6.34V8.56a8.27 8.27 0 004.6 1.43V6.69z" />
                </svg>
              </a>
              <a
                href="mailto:elevatedvisualsbysosa@gmail.com"
                aria-label="Email"
                className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-brand-400 hover:border-brand-500/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-medium text-stone-100 text-sm mb-4 tracking-wider uppercase">
              Navigate
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#work" className="hover:text-brand-400 transition-colors">Work</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-brand-400 transition-colors">About</a></li>
              <li><a href="#book" className="hover:text-brand-400 transition-colors">Enquire</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-medium text-stone-100 text-sm mb-4 tracking-wider uppercase">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#book" className="hover:text-brand-400 transition-colors">Weddings</a></li>
              <li><a href="#book" className="hover:text-brand-400 transition-colors">Celebrations</a></li>
              <li><a href="#book" className="hover:text-brand-400 transition-colors">Brand Stories</a></li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div>
            <h3 className="font-medium text-stone-100 text-sm mb-4 tracking-wider uppercase">
              Studio
            </h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>Canberra, ACT · Available worldwide</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href="mailto:elevatedvisualsbysosa@gmail.com" className="hover:text-brand-400 transition-colors">
                  elevatedvisualsbysosa@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-16 pt-8 border-t border-stone-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Elevated Visuals by Sosa. All rights reserved.</p>
          <p className="font-mono tracking-wider">Canberra Event Content Creator</p>
        </div>
      </div>
    </footer>
  );
}
