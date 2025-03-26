import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, LockKeyhole, FileCheck, Zap, Clock, Check } from 'lucide-react';
import SectionHeading from '@/components/shared/section-heading';
import CTASection from '@/components/sections/cta-section';

const Business: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Secure Your Web3 Project with Confidence
              </h1>
              <p className="text-white/90 text-lg mb-8 md:pr-8">
                VerityChain provides comprehensive security solutions for blockchain projects through transparent audit processes, verified security experts, and managed bug bounty programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-primary-600 hover:bg-white/90" size="lg">
                  Get Started
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                  Schedule a Demo
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-96 h-80 bg-white/10 rounded-lg flex items-center justify-center">
                <LockKeyhole className="w-40 h-40 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="For Businesses"
            title="Comprehensive Security Solutions"
            description="Protect your blockchain projects with our full suite of security services designed for Web3."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-10 h-10 text-primary-500" />,
                title: "Comprehensive Security Audits",
                description: "In-depth reviews of your smart contracts and blockchain infrastructure by our network of verified security experts."
              },
              {
                icon: <LockKeyhole className="w-10 h-10 text-primary-500" />,
                title: "Bug Bounty Management",
                description: "Set up and manage bug bounty programs to incentivize security researchers to find and report vulnerabilities."
              },
              {
                icon: <FileCheck className="w-10 h-10 text-primary-500" />,
                title: "Blockchain-Verified Reports",
                description: "All audit results are recorded on-chain, providing immutable proof of security verification for your stakeholders."
              },
              {
                icon: <Zap className="w-10 h-10 text-primary-500" />,
                title: "Emergency Response",
                description: "Rapid response service for critical vulnerabilities with immediate expert intervention and mitigation strategies."
              },
              {
                icon: <Clock className="w-10 h-10 text-primary-500" />,
                title: "Continuous Monitoring",
                description: "Ongoing security monitoring services to ensure your project remains secure as it evolves."
              },
              {
                icon: <Check className="w-10 h-10 text-primary-500" />,
                title: "Regulatory Compliance",
                description: "Guidance and documentation to help your project comply with evolving Web3 security regulations."
              }
            ].map((service, index) => (
              <div key={index} className="bg-light-500 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-dark-600">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-light-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dark-700">Why Choose VerityChain</h2>
            <p className="text-lg text-gray-600">Our platform offers unique advantages for Web3 business security needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Transparent Verification",
                description: "Our blockchain-based verification system provides immutable proof of security audits, building trust with your community and investors."
              },
              {
                title: "Elite Auditor Network",
                description: "Access to a network of rigorously vetted security experts specializing in blockchain and smart contract security."
              },
              {
                title: "Comprehensive Coverage",
                description: "From smart contracts to frontend interfaces, our security solutions cover all aspects of your Web3 project."
              },
              {
                title: "Customizable Solutions",
                description: "Flexible security packages tailored to your project's specific needs, size, and development stage."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-dark-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl font-bold mb-4 text-dark-700">How We've Helped Web3 Projects</h2>
            <p className="text-lg text-gray-600">See how VerityChain has helped secure leading blockchain platforms</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "DeFi Protocol",
                description: "Critical vulnerabilities discovered and fixed before launch, saving millions in potential losses.",
                metric: "14 Vulnerabilities Identified"
              },
              {
                title: "NFT Marketplace",
                description: "Comprehensive security audit and ongoing bug bounty program led to secure, successful launch.",
                metric: "99.8% Security Rating"
              },
              {
                title: "Layer 2 Solution",
                description: "Blockchain-verified audit reports helped build investor confidence and community trust.",
                metric: "$50M+ Protected"
              }
            ].map((study, index) => (
              <div key={index} className="bg-light-500 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-40 bg-primary-100 flex items-center justify-center">
                  <div className="text-xl font-bold text-primary-600">Case Study {index + 1}</div>
                </div>
                <div className="p-6">
                  <div className="inline-block bg-primary-600 text-white text-sm px-3 py-1 rounded-full mb-3">
                    {study.metric}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-dark-600">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <Button variant="link" className="text-primary-600 p-0">
                    Read Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Business;
