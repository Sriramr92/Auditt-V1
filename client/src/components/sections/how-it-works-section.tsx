import React from 'react';
import SectionHeading from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-light-500 relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          tagline="How It Works"
          title="Transparent Security Process"
          description="Our blockchain-powered platform ensures security and transparency at every step."
        />
        
        <div className="relative">
          {/* Process Steps */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4 border-4 border-light-500">
                <span className="text-xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark-600">Request an Audit</h3>
              <p className="text-gray-600">Submit your project for review through our platform and select from our verified auditor network.</p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4 border-4 border-light-500">
                <span className="text-xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark-600">Thorough Assessment</h3>
              <p className="text-gray-600">Expert auditors conduct a comprehensive security review of your smart contracts and infrastructure.</p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4 border-4 border-light-500">
                <span className="text-xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark-600">Blockchain Verification</h3>
              <p className="text-gray-600">Audit results are recorded on-chain, providing permanent, tamper-proof evidence of security verification.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-dark-700">Start Your Security Journey</h3>
              <p className="text-gray-600 mb-6">Ready to secure your Web3 project with industry-leading audit protocols and transparency?</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                  Schedule a Demo
                </Button>
                <Button variant="outline" className="bg-white border border-gray-300 hover:border-primary-600 text-dark-600 hover:text-primary-600">
                  Contact Sales
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden h-52 bg-gray-100 flex items-center justify-center">
              <svg className="w-32 h-32 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
