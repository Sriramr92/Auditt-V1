import React from 'react';

export const AudittLogo = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 200"
      className={className}
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#2a76d2", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#5294e2", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <g transform="translate(40, 40)">
        {/* Hexagon outer shape */}
        <path d="M60,0 L120,35 L120,105 L60,140 L0,105 L0,35 Z" fill="url(#logoGrad)" />
        {/* Inner white hexagon */}
        <path d="M60,20 L100,45 L100,95 L60,120 L20,95 L20,45 Z" fill="white" />
        {/* Center symbol */}
        <text x="60" y="80" fontFamily="serif" fontSize="40" fontStyle="italic" textAnchor="middle" fill="#2a76d2">α</text>
      </g>
      {/* Text "auditt" */}
      <text x="100" y="170" fontFamily="serif" fontSize="30" fontWeight="bold" textAnchor="middle" fill="white" className="logo-text">auditt</text>
    </svg>
  );
};

export default AudittLogo;