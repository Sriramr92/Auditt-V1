import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, Award, Network, Briefcase } from 'lucide-react';

const Auditors: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-600 to-secondary-700 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Verified Auditor Network
              </h1>
              <p className="text-white/90 text-lg mb-8 md:pr-8">
                Enhance your reputation, access premium projects, and become part of the leading Web3 security ecosystem. VerityChain helps auditors showcase their expertise and connect with cutting-edge blockchain projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-secondary-600 hover:bg-white/90" size="lg">
                  Apply to Join
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-96 h-80 bg-white/10 rounded-lg flex items-center justify-center">
                <Shield className="w-40 h-40 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-4">
              Auditor Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-700">
              Why Join VerityChain
            </h2>
            <p className="text-lg text-gray-600">
              Our platform provides unique advantages for security experts in the Web3 space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-10 h-10 text-secondary-500" />,
                title: "Verified Status",
                description: "Gain a trusted verification badge after our rigorous vetting process, enhancing your reputation in the Web3 security space."
              },
              {
                icon: <Briefcase className="w-10 h-10 text-secondary-500" />,
                title: "Premium Projects",
                description: "Get matched with high-value, innovative blockchain projects looking for expert security reviews."
              },
              {
                icon: <Award className="w-10 h-10 text-secondary-500" />,
                title: "Reputation Building",
                description: "Build your professional profile with blockchain-verified audit results and client testimonials."
              },
              {
                icon: <Network className="w-10 h-10 text-secondary-500" />,
                title: "Expert Network",
                description: "Connect with fellow security professionals and share knowledge in our private auditor community."
              },
              {
                icon: <Shield className="w-10 h-10 text-secondary-500" />,
                title: "Transparent Process",
                description: "Benefit from our fair, transparent matching system and dispute resolution protocols."
              },
              {
                icon: <CheckCircle className="w-10 h-10 text-secondary-500" />,
                title: "Continuous Learning",
                description: "Access exclusive training resources and stay current with the latest security practices."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-dark-600">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-16 bg-light-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dark-700">How to Become a Verified Auditor</h2>
            <p className="text-lg text-gray-600">Follow these steps to join our network of elite Web3 security professionals</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-16 top-0 bottom-0 w-1 bg-secondary-100 z-0"></div>
              
              {[
                {
                  title: "Submit Application",
                  description: "Fill out our comprehensive application form detailing your experience and expertise in Web3 security."
                },
                {
                  title: "Technical Assessment",
                  description: "Complete a technical assessment to demonstrate your skills in smart contract auditing and vulnerability detection."
                },
                {
                  title: "Background Verification",
                  description: "Our team verifies your past work, references, and contributions to the security community."
                },
                {
                  title: "Onboarding",
                  description: "Once approved, complete our onboarding process and gain access to the auditor portal and available projects."
                }
              ].map((step, index) => (
                <div key={index} className="flex mb-12 relative z-10">
                  <div className="mr-8 flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-dark-600">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Auditor Network?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Take the first step toward becoming a recognized Web3 security expert.
          </p>
          <Button className="bg-white text-secondary-600 hover:bg-white/90" size="lg">
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Auditors;
