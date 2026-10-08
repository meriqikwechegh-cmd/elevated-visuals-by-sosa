'use client';

import React, { useEffect, useState } from 'react';
import { Play, MapPin, ArrowRight } from 'lucide-react';
import { WORK_ITEMS, WorkItem } from '@/data/work';
import VideoModal from './VideoModal';
import Skeleton from './Skeleton';

export default function WorkGrid() {
  const [activeTab, setActiveTab] = useState<'all' | 'wedding' | 'celebration' | 'brand'>('all');
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);
  const [loadedMedia, setLoadedMedia] = useState<Record<string, boolean>>({});
  const [workItems, setWorkItems] = useState(WORK_ITEMS);

  useEffect(() => {
    const shuffledItems = [...WORK_ITEMS];

    for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffledItems[index], shuffledItems[randomIndex]] = [shuffledItems[randomIndex], shuffledItems[index]];
    }

    setWorkItems(shuffledItems);
  }, []);

  useEffect(() => {
    const loadedImageIds = Array.from(
      document.querySelectorAll<HTMLImageElement>('[data-work-image-id]'),
    )
      .filter((image) => image.complete && image.naturalWidth > 0)
      .map((image) => image.dataset.workImageId)
      .filter((id): id is string => Boolean(id));

    if (loadedImageIds.length === 0) return;

    setLoadedMedia((previous) => {
      const next = { ...previous };
      let changed = false;

      for (const id of loadedImageIds) {
        if (!next[id]) {
          next[id] = true;
          changed = true;
        }
      }

      return changed ? next : previous;
    });
  }, [workItems]);

  const filteredItems = activeTab === 'all'
    ? workItems
    : workItems.filter((item) => item.category === activeTab);

  const handleMediaLoaded = (id: string) => {
    setLoadedMedia((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="work" className="section bg-stone-950" aria-labelledby="work-heading">
      <div className="section-inner">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="inline-block px-3.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-caption font-medium tracking-wider mb-4">
              Selected Work
            </span>
            <h2 id="work-heading" className="font-display text-display-md text-stone-100 font-medium tracking-tight mb-4">
              Selected <span className="italic text-brand-400 font-normal">Work.</span>
            </h2>
            <p className="text-stone-400 text-body-lg leading-relaxed">
              A mix of the energy, detail and in-between moments that make an occasion feel like yours.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-stone-900 border border-stone-800">
            {[
              { id: 'all', label: 'All' },
              { id: 'wedding', label: 'Weddings' },
              { id: 'celebration', label: 'Celebrations' },
              { id: 'brand', label: 'Brand' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-brand-500 text-stone-950 font-semibold shadow-soft'
                    : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isLoaded = loadedMedia[item.id];
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-brand-500/40 hover:shadow-strong"
                tabIndex={0}
                role="button"
                onKeyDown={(e) => e.key === 'Enter' && setSelectedItem(item)}
              >
                {/* Media Container with Skeleton Fallback */}
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-950">
                  {!isLoaded && (
                    <div className="absolute inset-0 z-0">
                      <Skeleton variant="image" className="w-full h-full rounded-none" />
                    </div>
                  )}

                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={item.poster}
                      onLoadedData={() => handleMediaLoaded(item.id)}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out-expo ${
                        isLoaded ? 'opacity-85 group-hover:opacity-100' : 'opacity-0'
                      }`}
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      data-work-image-id={item.id}
                      onLoad={() => handleMediaLoaded(item.id)}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out-expo ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  )}

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end pointer-events-none">
                    <span className="text-caption font-semibold text-brand-400 tracking-wider mb-1">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-display text-xl text-stone-100 font-medium leading-snug mb-3">
                      {item.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs text-stone-400 border-t border-stone-800/80 pt-3">
                      {item.location && (
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-stone-500" />
                          {item.location}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 text-brand-400 font-medium group-hover:translate-x-1 transition-transform">
                        Watch <Play className="w-3.5 h-3.5 fill-current" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Planning Callout */}
        <div className="text-center mt-16">
          <a href="#book" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base">
            Planning something worth remembering?
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      <VideoModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
