import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import PartnerLogo1 from '../../assets/partner-logo1.svg';
import PartnerLogo2 from '../../assets/partner-logo2.svg';
import PartnerLogo3 from '../../assets/partner-logo3.svg';
import PartnerLogo4 from '../../assets/partner-logo4.svg';
import PartnerLogo5 from '../../assets/partner-logo5.svg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-gray-100">
      {/* Hex Grid Background */}
      <div className="absolute inset-0 opacity-15 z-0 hex-grid"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-800">
            Trust in Every Transaction, <br className="hidden md:inline" />
            <span className="text-primary-600">Transparency in Every Audit</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-slate-600 max-w-3xl mx-auto">
            Auditt is the leading Web3 security platform offering bug bounty programs and a verified auditor network backed by blockchain-based transparency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white">
              Explore Bug Bounty Programs
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent hover:bg-gray-100 border border-primary-600 text-primary-600">
              Connect with Auditors
            </Button>
          </div>
          
          {/* Trusted by Section */}
          <div className="mt-12 pt-4">
            <p className="text-slate-500 text-sm uppercase tracking-wider mb-4">Trusted by industry leaders</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
              <img src={PartnerLogo1} alt="Partner logo" className="h-8" />
              <img src={PartnerLogo2} alt="Partner logo" className="h-8" />
              <img src={PartnerLogo3} alt="Partner logo" className="h-8" />
              <img src={PartnerLogo4} alt="Partner logo" className="h-8" />
              <img src={PartnerLogo5} alt="Partner logo" className="h-8" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Graphics */}
      <div className="absolute top-20 right-0 w-40 h-40 bg-primary-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-60 h-60 bg-accent-500/20 rounded-full blur-3xl"></div>
      
      {/* Abstract Blockchain Elements */}
      <div className="hidden md:block absolute top-1/4 left-10 w-16 h-16 border-2 border-primary-400/30 rounded-lg rotate-12 animate-float">
        <div className="w-full h-full bg-primary-500/10 rounded-lg"></div>
      </div>
      <div className="hidden md:block absolute top-1/3 right-20 w-20 h-20 border-2 border-secondary-500/30 rounded-full animate-float-delay-2">
        <div className="w-full h-full bg-secondary-500/10 rounded-full"></div>
      </div>
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-14 h-14 border-2 border-accent-500/30 rounded-lg -rotate-12 animate-float-delay-1">
        <div className="w-full h-full bg-accent-500/10 rounded-lg"></div>
      </div>
    </section>
  );
};

export default HeroSection;
