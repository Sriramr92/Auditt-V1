import React from 'react';

interface AudittLogoProps {
  className?: string;
}

const AudittLogo: React.FC<AudittLogoProps> = ({ className }) => {
  return (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="8" fill="url(#logoGradient)" />
      <path
        d="M20 10c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill="white"
      />
      <circle cx="20" cy="20" r="4" fill="white" />
      <path
        d="M20 8V6M32 20h2M20 34v2M8 20H6M29.3 10.7l1.4-1.4M10.7 29.3l-1.4 1.4M29.3 29.3l1.4 1.4M10.7 10.7l-1.4-1.4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default AudittLogo;