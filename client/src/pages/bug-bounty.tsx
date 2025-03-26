import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/shared/section-heading';
import { Fingerprint, Target, Trophy, ShieldCheck, Zap, Users } from 'lucide-react';

const BugBounty: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent-500 to-accent-600 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Bug Bounty Programs
              </h1>
              <p className="text-white/90 text-lg mb-8 md:pr-8">
                Leverage our community of ethical hackers to identify and fix vulnerabilities in your Web3 applications before they can be exploited.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-accent-600 hover:bg-white/90" size="lg">
                  Launch a Bug Bounty
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                  Join as a Hunter
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-96 h-80 bg-white/10 rounded-lg flex items-center justify-center">
                <Fingerprint className="w-40 h-40 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="Bug Bounty Process"
            title="How Our Bug Bounty Programs Work"
            description="Our streamlined process ensures clear scope, fair rewards, and efficient vulnerability management."
          />

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-16 top-0 bottom-0 w-1 bg-accent-100 z-0"></div>
              
              {[
                {
                  icon: <Target className="w-8 h-8 text-accent-500" />,
                  title: "Define Scope & Rewards",
                  description: "Clearly define what systems are in scope and establish reward tiers based on vulnerability severity."
                },
                {
                  icon: <Users className="w-8 h-8 text-accent-500" />,
                  title: "Engage Security Researchers",
                  description: "Your program is shared with our community of verified security researchers who begin hunting for vulnerabilities."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-accent-500" />,
                  title: "Submission & Verification",
                  description: "Researchers submit detailed vulnerability reports which are verified by our expert team."
                },
                {
                  icon: <Zap className="w-8 h-8 text-accent-500" />,
                  title: "Fix & Remediation",
                  description: "Collaborate with researchers to understand and fix identified vulnerabilities."
                },
                {
                  icon: <Trophy className="w-8 h-8 text-accent-500" />,
                  title: "Reward Distribution",
                  description: "Once verified and fixed, rewards are distributed to the researchers who discovered the vulnerabilities."
                }
              ].map((step, index) => (
                <div key={index} className="flex mb-12 relative z-10">
                  <div className="mr-8 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent-100 text-accent-500 flex items-center justify-center shadow-sm">
                      {step.icon}
                    </div>
                  </div>
                  <div className="bg-light-500 rounded-xl p-6 shadow-sm border border-gray-100 flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-dark-600">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-light-500">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-4">
                For Projects
              </span>
              <h2 className="text-3xl font-bold mb-6 text-dark-700">Why Launch a Bug Bounty?</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Proactive Security",
                    description: "Identify vulnerabilities before malicious actors can exploit them."
                  },
                  {
                    title: "Cost-Effective",
                    description: "Pay only for verified vulnerabilities, much more cost-effective than security breaches."
                  },
                  {
                    title: "Community Trust",
                    description: "Demonstrate your commitment to security, building user and investor confidence."
                  },
                  {
                    title: "Diverse Expertise",
                    description: "Benefit from diverse perspectives and specialized expertise across our researcher community."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-accent-500 text-white flex items-center justify-center">
                        <Check className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-600 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-4">
                For Hunters
              </span>
              <h2 className="text-3xl font-bold mb-6 text-dark-700">Why Become a Bug Hunter?</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Competitive Rewards",
                    description: "Earn bounties for discovering and reporting security vulnerabilities."
                  },
                  {
                    title: "Build Reputation",
                    description: "Establish yourself in the Web3 security community with verified findings."
                  },
                  {
                    title: "Learn & Grow",
                    description: "Sharpen your skills by working on cutting-edge blockchain technologies."
                  },
                  {
                    title: "Ethical Impact",
                    description: "Make a positive impact by helping secure the future of Web3."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-accent-500 text-white flex items-center justify-center">
                        <Check className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-600 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dark-700">Featured Bug Bounty Programs</h2>
            <p className="text-lg text-gray-600">Explore active bug bounty programs currently running on our platform</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "DeFi Protocol Alpha",
                rewards: "Up to $50,000",
                focus: "Smart Contract Vulnerabilities",
                status: "Active"
              },
              {
                name: "NFT Marketplace Beta",
                rewards: "Up to $25,000",
                focus: "Frontend & Smart Contract Security",
                status: "Active"
              },
              {
                name: "CrossChain Bridge",
                rewards: "Up to $100,000",
                focus: "Cross-chain Vulnerabilities",
                status: "Active"
              }
            ].map((program, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-24 bg-gradient-to-r from-accent-400 to-accent-500 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">{program.name}</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-dark-600">{program.rewards}</span>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {program.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">Focus: {program.focus}</p>
                  <Button className="w-full bg-accent-500 hover:bg-accent-600 text-white">
                    View Program
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" className="border-accent-500 text-accent-500 hover:bg-accent-50">
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent-500 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Project?</h2>
          <p className="text-xl text-white/90 mb-8">
            Launch a bug bounty program today and harness the power of our security researcher community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-accent-600 hover:bg-white/90" size="lg">
              Start a Bug Bounty
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// This component is used inside the function but not defined
const Check = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default BugBounty;
