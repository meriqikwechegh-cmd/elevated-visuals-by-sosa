'use client';

import React from 'react';
import { Heart, Sparkles, Camera, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectOccasion?: (occasion: 'wedding' | 'celebration' | 'brand') => void;
}

export default function Services({ onSelectOccasion }: ServicesProps) {
  const handleEnquire = (occasion: 'wedding' | 'celebration' | 'brand') => {
    if (onSelectOccasion) {
      onSelectOccasion(occasion);
    }
    const bookElem = document.getElementById('book');
    if (bookElem) {
      bookElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 'wedding' as const,
      category: 'Wedding',
      title: 'Wedding',
      description: 'For the day you want to be fully present for.',
      actionText: 'Enquire for your date',
      icon: Heart,
    },
    {
      id: 'celebration' as const,
      category: 'Celebration',
      title: 'Celebration',
      description: 'For milestones, movement and all the energy in between.',
      actionText: 'Enquire for your date',
      icon: Sparkles,
    },
    {
      id: 'brand' as const,
      category: 'Brand',
      title: 'Brand',
      description: 'For visual stories that give your idea a point of view.',
      actionText: 'Start a project',
      icon: Camera,
    },
  ];

  return (
    <section id="services" className="section bg-stone-900 border-t border-stone-800" aria-labelledby="services-heading">
      <div className="section-inner">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-caption font-medium tracking-wider mb-6">
            What are we capturing?
          </span>
          <h2
            id="services-heading"
            className="font-display text-display-md text-stone-100 font-medium tracking-tight mb-6"
          >
            Choose your occasion and head straight into an enquiry. <span className="italic text-brand-400 font-normal">No long forms. No pressure.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-label="Service categories">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => handleEnquire(service.id)}
                className="group relative bg-stone-950/60 border border-stone-800 rounded-3xl p-8 hover:border-brand-500/50 hover:bg-stone-950 transition-all duration-500 cursor-pointer flex flex-col justify-between shadow-soft hover:shadow-medium"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleEnquire(service.id)}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-stone-950 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-caption font-medium text-stone-500 tracking-widest uppercase">
                    {service.category}
                  </span>
                  <h3 className="font-display text-2xl text-stone-100 font-medium mt-1 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-stone-400 text-body leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-stone-800/80 flex items-center justify-between text-brand-400 font-medium text-sm group-hover:text-stone-100 transition-colors">
                  <span>{service.actionText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
