import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hexToHslString = (hex: string, saturation: number = 100, lightness: number = 50): string => {
  // Remove the # symbol if present
  hex = hex.replace('#', '');
  
  // Parse the hex color to RGB
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  
  // Find the min and max values
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  
  // Calculate the luminance
  const luminance = (max + min) / 2;
  
  let hue = 0;
  
  // If max equals min, hue is undefined (achromatic)
  if (max !== min) {
    const d = max - min;
    
    // Calculate hue
    if (max === r) {
      hue = ((g - b) / d + (g < b ? 6 : 0)) * 60;
    } else if (max === g) {
      hue = ((b - r) / d + 2) * 60;
    } else if (max === b) {
      hue = ((r - g) / d + 4) * 60;
    }
  }
  
  // Return HSL string
  return `${Math.round(hue)}, ${saturation}%, ${lightness}%`;
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};
