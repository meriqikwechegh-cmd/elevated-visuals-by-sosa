'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WorkGrid from '@/components/WorkGrid';
import About from '@/components/About';
import BookingForm from '@/components/BookingForm';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedOccasion, setSelectedOccasion] = useState<'wedding' | 'celebration' | 'brand'>('wedding');

  return (
    <div className="min-h-screen flex flex-col bg-stone-950 text-stone-100">
      <Navigation />
      <main id="main-content" role="main" className="flex-grow">
        <Hero />
        <Services onSelectOccasion={(occ) => setSelectedOccasion(occ)} />
        <WorkGrid />
        <About />
        <BookingForm
          selectedOccasion={selectedOccasion}
          onOccasionChange={(occ) => setSelectedOccasion(occ)}
        />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
