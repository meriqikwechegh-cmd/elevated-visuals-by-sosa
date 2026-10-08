'use client';

import React, { useEffect } from 'react';
import { X, MapPin } from 'lucide-react';
import { WorkItem } from '@/data/work';

interface VideoModalProps {
  item: WorkItem | null;
  onClose: () => void;
}

export default function VideoModal({ item, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-stone-950/90 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-strong"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-stone-800 bg-stone-950/60">
          <div>
            <span className="text-caption font-semibold text-brand-400 tracking-wider">
              {item.categoryLabel}
            </span>
            <h3 className="font-display text-xl md:text-2xl text-stone-100 font-medium mt-0.5">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Container */}
        <div className="relative aspect-[9/16] md:aspect-[16/9] max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          {item.type === 'video' ? (
            <video
              key={item.id}
              src={item.src}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-stone-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-stone-800">
          {item.location && (
            <p className="text-stone-400 text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-400" />
              <span>{item.location}</span>
            </p>
          )}
          <a
            href="#book"
            onClick={onClose}
            className="btn-primary text-xs px-5 py-2.5 uppercase font-medium tracking-wider"
          >
            Enquire for your date
          </a>
        </div>
      </div>
    </div>
  );
}
