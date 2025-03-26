import React from 'react';
import HeroSection from '@/components/sections/hero-section';
import FeaturesSection from '@/components/sections/features-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import UserTypesSection from '@/components/sections/user-types-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import CTASection from '@/components/sections/cta-section';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <UserTypesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Home;
