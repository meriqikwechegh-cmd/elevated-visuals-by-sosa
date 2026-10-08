'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Camera } from 'lucide-react';
import Skeleton from './Skeleton';

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth > 0) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <section id="about" className="section bg-stone-900 border-t border-stone-800" aria-labelledby="about-heading">
      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-stone-800 shadow-strong bg-stone-950">
              {!imageLoaded && (
                <div className="absolute inset-0 z-0">
                  <Skeleton variant="image" className="w-full h-full rounded-none" />
                </div>
              )}
              <img
                ref={imageRef}
                src="https://customer-assets.emergentagent.com/job_sosa-portfolio/artifacts/p8y7x4rj_Everything%E2%80%99s%20Hallelujah%F0%9F%96%A4%E2%9D%A4%EF%B8%8F%23fyp%20%23foryou.jpg"
                alt="Sosa at work behind the camera"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover filter brightness-95 contrast-105 transition-opacity duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:right-6 bg-stone-950/90 backdrop-blur-md border border-stone-800 rounded-2xl p-5 md:p-6 shadow-strong max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-100 mt-0.5">
                    Behind the lens
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:pl-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-caption font-medium tracking-wider mb-6">
              About Sosa
            </span>
            <h2
              id="about-heading"
              className="font-display text-display-md text-stone-100 font-medium tracking-tight mb-8 leading-snug"
            >
              I&apos;m Sosa — a Canberra-based content creator preserving the energy, details and in-between moments of the occasions that mean the most.
            </h2>

            <div className="space-y-6 text-stone-300 text-body-lg font-light leading-relaxed mb-10">
              <p>
                My work is for people who want to be fully there. I catch the looks you miss, the movement in the room, and the details that bring it all back.
              </p>
              <p className="font-normal text-stone-100 italic">
                You stay present. I make it last.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a href="#book" className="btn-primary">
                Tell me about your occasion
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#work" className="btn-secondary">
                View selected work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
