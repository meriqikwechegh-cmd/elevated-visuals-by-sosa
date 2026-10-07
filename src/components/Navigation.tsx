'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Enquire', href: '#book' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-stone-950/85 backdrop-blur-md border-b border-stone-800/60 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 text-stone-50 font-display font-medium text-xl md:text-2xl group transition-transform duration-300 hover:scale-[1.01]"
          aria-label="Elevated Visuals by Sosa - Home"
        >
          <span className="w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/40 text-brand-400 flex items-center justify-center text-xs font-sans font-bold group-hover:bg-brand-500 group-hover:text-stone-950 transition-colors">
            EV
          </span>
          <span className="tracking-tight">
            Elevated Visuals <span className="italic text-brand-400 font-normal">by Sosa</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-300 hover:text-white text-sm font-medium transition-colors tracking-wide relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#book"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full bg-brand-500/20 hover:bg-brand-500 text-brand-300 hover:text-stone-950 border border-brand-500/30 transition-all duration-300 shadow-soft"
          >
            Check date
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-stone-300 hover:text-white hover:bg-stone-800/60 transition-colors"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-stone-950/95 backdrop-blur-xl border-b border-stone-800 p-6 shadow-strong animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-200 hover:text-brand-400 text-lg font-medium py-2 border-b border-stone-900 transition-colors flex items-center justify-between"
              >
                {link.name}
                <ArrowRight className="w-4 h-4 text-stone-500" />
              </a>
            ))}
          </div>

          <a
            href="#book"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary w-full text-center flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-brand-600" />
            Check Availability
          </a>
        </div>
      )}
    </header>
  );
}
