import React from 'react';
import { ArrowRight, CalendarDays, Check, CreditCard, FileText, MapPin } from 'lucide-react';

const packages = [
  {
    hours: '1 hour',
    price: '$150',
    details: ['1 hour content coverage', 'High-quality video clips', '1 edited reel', 'Social-media-ready delivery'],
  },
  {
    hours: '2 hours',
    price: '$250',
    details: ['2 hours content coverage', 'High-quality video clips', '2 edited reels', 'Social-media-ready delivery'],
  },
  {
    hours: '3+ hours',
    price: '$300+',
    priceNote: 'starting price',
    details: ['3+ hours content coverage', 'High-quality video clips', '2 edited reels', 'Social-media-ready delivery'],
  },
  {
    hours: '5+ hours',
    price: '$90',
    priceNote: 'per hour',
    details: ['5+ hours content coverage', 'High-quality video clips', '2 edited reels', 'Social-media-ready delivery'],
  },
];

const bookingNotes = [
  {
    title: 'Delivery time',
    description: '5–8 business days after your final selection and payment.',
    icon: CalendarDays,
  },
  {
    title: 'Secure your date',
    description: 'A 50% deposit is required to lock in your booking.',
    icon: CreditCard,
  },
  {
    title: 'Travel fees',
    description: 'Interstate travel fees may apply. Get in touch for a quote.',
    icon: MapPin,
  },
  {
    title: 'A few more details',
    description: 'Raw footage is available on request (an additional fee may apply). Large events may be priced differently. Terms and conditions apply.',
    icon: FileText,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section border-t border-stone-800 bg-stone-950" aria-labelledby="pricing-heading">
      <div className="section-inner">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-5 inline-block rounded-full border border-brand-500/20 bg-brand-500/10 px-3.5 py-1 text-caption font-medium tracking-wider text-brand-400">
            Content creation services · Prices in AUD
          </span>
          <h2 id="pricing-heading" className="mb-5 font-display text-display-md font-medium tracking-tight text-stone-100">
            Thoughtful coverage. <span className="font-normal italic text-brand-400">Clear pricing.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-body-lg leading-relaxed text-stone-400">
            A starting point for your event, brand or story. Tell me what you&apos;re planning and we can tailor the coverage to fit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((plan) => (
            <article key={plan.hours} className="flex flex-col rounded-3xl border border-stone-800 bg-stone-900/70 p-6 shadow-soft transition-colors hover:border-brand-500/40 md:p-7">
              <div className="-mx-6 -mt-6 mb-6 rounded-t-3xl border-b border-stone-800 bg-stone-900 px-6 py-4 text-center md:-mx-7 md:-mt-7 md:px-7">
                <h3 className="font-display text-xl font-medium text-stone-100">{plan.hours}</h3>
              </div>
              <div className="mb-7 min-h-20 text-center">
                <p className="font-display text-4xl font-medium tracking-tight text-brand-300">{plan.price}</p>
                {plan.priceNote && <p className="mt-1 text-xs uppercase tracking-wider text-stone-400">{plan.priceNote}</p>}
              </div>
              <ul className="flex-1 space-y-4 border-t border-stone-800 pt-6">
                {plan.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3 text-sm leading-relaxed text-stone-300">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-300">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <a href="#book" className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl border border-brand-500/30 bg-brand-500/10 px-4 py-3 text-sm font-medium text-brand-300 transition-colors hover:bg-brand-500 hover:text-stone-950">
                Enquire about this package <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {bookingNotes.map((note) => {
            const Icon = note.icon;
            return (
              <div key={note.title} className="flex gap-4 rounded-2xl border border-stone-800 bg-stone-900/50 p-5 md:p-6">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-100">{note.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-400">{note.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-5 text-sm text-stone-400">Need something a little different? Let&apos;s talk through it.</p>
          <a href="#book" className="btn-primary inline-flex items-center gap-2">
            Enquire about your date <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
