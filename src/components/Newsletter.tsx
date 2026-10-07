'use client';

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const formspreeKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY || '';
  const [formspreeState, handleFormspreeSubmit] = useForm(formspreeKey || 'xnewsletter');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (formspreeKey) {
      handleFormspreeSubmit(e);
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get('email');

      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to subscribe.');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Newsletter submission error:', err);
      setErrorMessage(err.message || 'Subscription failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const isSuccess = formspreeState.succeeded || submitted;

  return (
    <section className="section bg-stone-900 border-t border-stone-800" aria-labelledby="newsletter-heading">
      <div className="section-inner">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-caption font-medium tracking-wider mb-6">
            Newsletter
          </span>
          <h2
            id="newsletter-heading"
            className="font-display text-display-md text-stone-100 font-medium tracking-tight mb-4"
          >
            Subscribe to our <span className="italic text-brand-400 font-normal">updates.</span>
          </h2>
          <p className="text-stone-400 text-body-lg leading-relaxed mb-10 max-w-xl mx-auto">
            One email a month. Zero noise. Unsubscribe anytime.
          </p>

          {isSuccess ? (
            <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800 inline-flex items-center gap-3 text-stone-200 font-medium">
              <CheckCircle2 className="w-5 h-5 text-brand-400" />
              <span>You&apos;re on the list! Thank you for subscribing.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="relative flex-1">
                <Mail className="w-5 h-5 text-stone-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="input-field pl-12 py-3.5"
                />
                <ValidationError prefix="Email" field="email" errors={formspreeState.errors} className="text-red-400 text-xs mt-1 text-left" />
                {errorMessage && <p className="text-red-400 text-xs mt-1 text-left">{errorMessage}</p>}
              </div>

              <button
                type="submit"
                disabled={formspreeState.submitting || loading}
                className="btn-primary py-3.5 px-7 text-sm whitespace-nowrap flex items-center justify-center gap-2"
              >
                {formspreeState.submitting || loading ? (
                  <span>Joining...</span>
                ) : (
                  <>
                    <span>Join</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
