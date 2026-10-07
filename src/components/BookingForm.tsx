'use client';

import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Heart, Sparkles, Camera, CheckCircle2, Send, Calendar, MapPin, User, Mail, Phone, DollarSign, MessageSquare, AlertCircle } from 'lucide-react';

interface BookingFormProps {
  selectedOccasion?: 'wedding' | 'celebration' | 'brand';
  onOccasionChange?: (occasion: 'wedding' | 'celebration' | 'brand') => void;
}

export default function BookingForm({
  selectedOccasion = 'wedding',
  onOccasionChange,
}: BookingFormProps) {
  const [occasion, setOccasion] = useState<'wedding' | 'celebration' | 'brand'>(selectedOccasion);
  const formspreeKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY || '';

  // Formspree client React hook
  const [formspreeState, handleFormspreeSubmit] = useForm(formspreeKey || 'xanycode');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessCustom, setIsSuccessCustom] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setOccasion(selectedOccasion);
  }, [selectedOccasion]);

  const handleOccasionSelect = (type: 'wedding' | 'celebration' | 'brand') => {
    setOccasion(type);
    if (onOccasionChange) onOccasionChange(type);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    // If Formspree key is provided on client, we can submit directly via Formspree or via our internal backend endpoint
    if (formspreeKey) {
      handleFormspreeSubmit(e);
      return;
    }

    // Call our robust backend API route (/api/enquire)
    setIsSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      const payload = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        date: formData.get('date'),
        guestCount: formData.get('guestCount'),
        venue: formData.get('venue'),
        budget: formData.get('budget'),
        message: formData.get('message'),
        occasion,
      };

      const res = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit enquiry.');
      }

      setIsSuccessCustom(true);
    } catch (err: any) {
      console.error('Enquiry submission error:', err);
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSuccess = formspreeState.succeeded || isSuccessCustom;

  const occasions = [
    {
      id: 'wedding' as const,
      title: 'Wedding',
      subtitle: 'For the day you want to be fully present for.',
      icon: Heart,
    },
    {
      id: 'celebration' as const,
      title: 'Celebration',
      subtitle: 'For milestones, movement and all the energy in between.',
      icon: Sparkles,
    },
    {
      id: 'brand' as const,
      title: 'Brand',
      subtitle: 'For visual stories that give your idea a point of view.',
      icon: Camera,
    },
  ];

  return (
    <section id="book" className="section bg-stone-950 border-t border-stone-800" aria-labelledby="booking-heading">
      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Occasion Selection */}
          <div className="lg:pr-8">
            <span className="inline-block px-3.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-caption font-medium tracking-wider mb-6">
              Booking Enquiry
            </span>
            <h2
              id="booking-heading"
              className="font-display text-display-md text-stone-100 font-medium tracking-tight mb-6"
            >
              Book your <span className="italic text-brand-400 font-normal">date.</span>
            </h2>
            <p className="text-stone-400 text-body-lg leading-relaxed mb-10 max-w-xl">
              Share your date and the story you&apos;re planning. I&apos;ll come back to you with availability and the next step.
            </p>

            {/* Radio options for occasion */}
            <div className="space-y-4" role="radiogroup" aria-label="Select occasion type">
              {occasions.map((item) => {
                const Icon = item.icon;
                const isSelected = occasion === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleOccasionSelect(item.id)}
                    className={`w-full p-5 rounded-2xl text-left transition-all duration-300 border-2 flex items-center gap-4 ${
                      isSelected
                        ? 'border-brand-500 bg-stone-900/90 shadow-soft'
                        : 'border-stone-800 bg-stone-900/40 hover:border-stone-700 hover:bg-stone-900/70'
                    }`}
                  >
                    <div
                      className={`p-3 rounded-xl flex-shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-brand-500 text-stone-950'
                          : 'bg-stone-800 text-stone-400'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-medium ${isSelected ? 'text-stone-100' : 'text-stone-300'}`}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-stone-400 mt-0.5">{item.subtitle}</p>
                    </div>
                    {isSelected && (
                      <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Formspree helper indicator */}
            {!formspreeKey && (
              <div className="mt-8 p-4 rounded-xl bg-stone-900/80 border border-stone-800 flex items-start gap-3 text-xs text-stone-400">
                <AlertCircle className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Formspree Ready:</strong> To route submissions through Formspree, add your Form ID to <code>NEXT_PUBLIC_FORMSPREE_KEY</code> in Netlify Environment Variables.
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Form */}
          <div className="bg-stone-900/80 backdrop-blur-md border border-stone-800 rounded-3xl p-8 md:p-10 shadow-strong">
            {isSuccess ? (
              <div className="py-12 text-center flex flex-col items-center justify-center animate-in fade-in duration-500">
                <div className="w-16 h-16 rounded-full bg-brand-500/20 text-brand-400 border border-brand-500/40 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl text-stone-100 font-medium mb-3">
                  Enquiry Received!
                </h3>
                <p className="text-stone-400 text-body max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you for sharing your date with Elevated Visuals by Sosa. I will review your details and respond shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSuccessCustom(false);
                  }}
                  className="btn-secondary text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Hidden input for occasion */}
                <input type="hidden" name="occasion" value={occasion} />

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-xs">
                    {errorMessage}
                  </div>
                )}

                {/* Event Date & Guest Count */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="event-date" className="label flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-brand-400" />
                      Event date
                    </label>
                    <input
                      id="event-date"
                      name="date"
                      type="date"
                      required
                      min="2026-01-01"
                      className="input-field"
                    />
                    <ValidationError prefix="Date" field="date" errors={formspreeState.errors} className="text-red-400 text-xs mt-1" />
                  </div>

                  <div>
                    <label htmlFor="guest-count" className="label">
                      Guest count
                    </label>
                    <select
                      id="guest-count"
                      name="guestCount"
                      required
                      defaultValue=""
                      className="input-field appearance-none"
                    >
                      <option value="" disabled>Select guest count</option>
                      <option value="under-50">Under 50</option>
                      <option value="50-100">50 - 100</option>
                      <option value="100-150">100 - 150</option>
                      <option value="150-200">150 - 200</option>
                      <option value="200+">200+</option>
                    </select>
                    <ValidationError prefix="Guest Count" field="guestCount" errors={formspreeState.errors} className="text-red-400 text-xs mt-1" />
                  </div>
                </div>

                {/* Venue / Location */}
                <div>
                  <label htmlFor="venue" className="label flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-brand-400" />
                    Venue / Location
                  </label>
                  <input
                    id="venue"
                    name="venue"
                    type="text"
                    required
                    placeholder="e.g. National Arboretum, Canberra"
                    className="input-field"
                  />
                  <ValidationError prefix="Venue" field="venue" errors={formspreeState.errors} className="text-red-400 text-xs mt-1" />
                </div>

                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="label flex items-center gap-1.5">
                      <User className="w-4 h-4 text-brand-400" />
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Full name"
                      className="input-field"
                    />
                    <ValidationError prefix="Name" field="name" errors={formspreeState.errors} className="text-red-400 text-xs mt-1" />
                  </div>

                  <div>
                    <label htmlFor="email" className="label flex items-center gap-1.5">
                      <Mail className="w-4 h-4 text-brand-400" />
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="input-field"
                    />
                    <ValidationError prefix="Email" field="email" errors={formspreeState.errors} className="text-red-400 text-xs mt-1" />
                  </div>
                </div>

                {/* Phone & Budget */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="label flex items-center gap-1.5">
                      <Phone className="w-4 h-4 text-brand-400" />
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+61 4XX XXX XXX"
                      className="input-field"
                    />
                    <ValidationError prefix="Phone" field="phone" errors={formspreeState.errors} className="text-red-400 text-xs mt-1" />
                  </div>

                  <div>
                    <label htmlFor="budget" className="label flex items-center gap-1.5">
                      <DollarSign className="w-4 h-4 text-brand-400" />
                      Budget range (optional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className="input-field appearance-none"
                    >
                      <option value="" disabled>Budget range (optional)</option>
                      <option value="under-3k">Under $3,000</option>
                      <option value="3k-5k">$3,000 - $5,000</option>
                      <option value="5k-8k">$5,000 - $8,000</option>
                      <option value="8k-12k">$8,000 - $12,000</option>
                      <option value="12k+">$12,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="label flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-brand-400" />
                    Tell me about your occasion
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="The vibe, the details, what matters most... the more I know, the better I can capture it."
                    className="input-field min-h-[120px] resize-y"
                  />
                  <ValidationError prefix="Message" field="message" errors={formspreeState.errors} className="text-red-400 text-xs mt-1" />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formspreeState.submitting || isSubmitting}
                  className="btn-primary w-full py-4 text-base font-semibold flex items-center justify-center gap-2 rounded-xl"
                >
                  {formspreeState.submitting || isSubmitting ? (
                    <span>Sending enquiry...</span>
                  ) : (
                    <>
                      <span>Send enquiry</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-stone-500 font-light pt-2">
                  No spam. No pressure. Just a conversation about your day.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
