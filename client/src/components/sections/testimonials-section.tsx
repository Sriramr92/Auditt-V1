import React from 'react';
import SectionHeading from '@/components/shared/section-heading';
import { Star, Quote } from 'lucide-react';
import CardBackground from '../../assets/card-background.svg';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Auditt's transparent audit registry gave our investors the confidence they needed. The on-chain verification of our security audits has become a key part of our trust-building process.",
    name: "Sarah Martinez",
    role: "CTO, DeFi Protocol",
    stars: 5
  },
  {
    quote: "The bug bounty program helped us identify and fix critical vulnerabilities before launch. The quality of researchers in the Auditt ecosystem is exceptional.",
    name: "Alex Johnson",
    role: "Lead Developer, NFT Marketplace",
    stars: 5
  },
  {
    quote: "As an auditor, Auditt has connected me with cutting-edge projects and helped establish my reputation in the Web3 security space. The platform's verification process adds credibility to my work.",
    name: "Raj Patel",
    role: "Independent Security Auditor",
    stars: 5
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          tagline="Testimonials"
          title="Trusted by Leading Projects"
          description="See what our clients say about our security solutions and transparent audit process."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all relative overflow-hidden text-white"
              style={{
                backgroundImage: `url(${CardBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <Quote className="h-10 w-10 text-primary-400/50 absolute top-4 right-4" />
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-200 mb-6 relative z-10">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-500/30 mr-4 flex items-center justify-center border border-primary-400/30">
                  <span className="text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
