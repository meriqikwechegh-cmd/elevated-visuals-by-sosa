import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text' | 'image';
}

export default function Skeleton({ className = '', variant = 'rectangular' }: SkeletonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'circular':
        return 'rounded-full';
      case 'text':
        return 'h-4 rounded-md';
      case 'image':
        return 'aspect-[4/5] rounded-2xl md:rounded-3xl';
      default:
        return 'rounded-xl';
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-stone-900/80 border border-stone-800/60 ${getVariantStyles()} ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-stone-800/40 to-transparent" />
    </div>
  );
}
