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
  textAlignment = 'center',
  children
}) => {
  const alignmentClasses = {
    left: 'text-left mx-0',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <div className={cn(
      `max-w-3xl mb-16 ${alignmentClasses[textAlignment]}`,
      className
    )}>
      <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
        {tagline}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-700">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600">
          {description}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionHeading;
