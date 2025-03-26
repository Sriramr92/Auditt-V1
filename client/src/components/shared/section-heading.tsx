import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  tagline: string;
  title: string;
  description?: string;
  className?: string;
  textAlignment?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  tagline,
  title,
  description,
  className,
  textAlignment = 'left',
  children
}) => {
  return (
    <div className={cn(
      'max-w-3xl mb-10',
      textAlignment === 'center' && 'mx-auto text-center',
      textAlignment === 'right' && 'ml-auto text-right',
      className
    )}>
      <span className="inline-block text-sm font-medium text-primary-600 mb-2">{tagline}</span>
      <h2 className="text-3xl font-bold text-slate-800 mb-4 sm:text-4xl">{title}</h2>
      {description && (
        <p className="text-lg text-slate-600 mt-4">{description}</p>
      )}
      {children}
    </div>
  );
};

export default SectionHeading;