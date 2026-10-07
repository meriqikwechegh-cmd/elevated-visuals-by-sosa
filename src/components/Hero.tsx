'use client';

import React from 'react';
import { ArrowRight, Eye, Film, ShieldCheck, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950 pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background Video & Overlays */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://customer-assets.emergentagent.com/job_sosa-portfolio/artifacts/p8y7x4rj_Everything%E2%80%99s%20Hallelujah%F0%9F%96%A4%E2%9D%A4%EF%B8%8F%23fyp%20%23foryou.jpg"
          className="w-full h-full object-cover opacity-35 scale-105 transform filter contrast-105"
        >
          <source
            src="https://customer-assets.emergentagent.com/job_sosa-portfolio/artifacts/q01f3sig_MR%20%26%20MRS%20OZOH%F0%9F%A4%8DA%20beautiful%20union%20of%20two%20hearts%2C%20two%20families%2C%20honouring%20culture%2C%20celebrating%20lov.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/50 to-stone-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-900/30 via-transparent to-stone-950" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-custom py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900/80 backdrop-blur-md border border-brand-500/30 text-stone-200 text-xs md:text-sm font-medium tracking-wide mb-8 shadow-soft">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Now taking 2026 dates · Canberra &amp; beyond</span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="font-display text-display-xl text-stone-50 font-medium tracking-tight mb-8 leading-[1.05]"
          >
            Your moments deserve{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-stone-100">to be remembered</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-brand-500/30 -z-10 rounded-sm" />
            </span>
            <br />
            <span className="italic font-normal text-brand-400">exactly as they felt.</span>
          </h1>

          {/* Subtext */}
          <p className="text-body-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Cinematic, candid content for weddings, celebrations and the stories that matter most.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#book" className="btn-primary w-full sm:w-auto px-8 py-4 text-base">
              Check your date
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#work" className="btn-secondary w-full sm:w-auto px-8 py-4 text-base">
              View the work
            </a>
          </div>

          {/* Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-stone-300 text-xs md:text-sm font-medium tracking-wider uppercase border-t border-stone-800/80 pt-10">
            <span className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-brand-400" />
              Candid
            </span>
            <span className="flex items-center gap-2">
              <Film className="w-4 h-4 text-brand-400" />
              Cinematic
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-400" />
              Delivered with intention
            </span>
          </div>
        </div>
      </div>

      {/* Down Scroll Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 text-stone-400">
        <a href="#services" aria-label="Scroll down to services">
          <ChevronDown className="w-6 h-6 hover:text-white transition-colors" />
        </a>
      </div>
    </section>
  );
}
