import React from 'react';
import SectionHeading from '@/components/shared/section-heading';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "VerityChain's transparent audit registry gave our investors the confidence they needed. The on-chain verification of our security audits has become a key part of our trust-building process.",
    name: "Sarah Martinez",
    role: "CTO, DeFi Protocol",
    stars: 5
  },
  {
    quote: "The bug bounty program helped us identify and fix critical vulnerabilities before launch. The quality of researchers in the VerityChain ecosystem is exceptional.",
    name: "Alex Johnson",
    role: "Lead Developer, NFT Marketplace",
    stars: 5
  },
  {
    quote: "As an auditor, VerityChain has connected me with cutting-edge projects and helped establish my reputation in the Web3 security space. The platform's verification process adds credibility to my work.",
    name: "Raj Patel",
    role: "Independent Security Auditor",
    stars: 5
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-light-500 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          tagline="Testimonials"
          title="Trusted by Leading Projects"
          description="See what our clients say about our security solutions and transparent audit process."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 mr-4 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-dark-600">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
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
