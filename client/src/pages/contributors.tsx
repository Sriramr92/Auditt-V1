import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/shared/section-heading';
import { Users, Code, Award, BookOpen, ArrowRight, Globe, Bug, Medal } from 'lucide-react';
import { Link } from 'wouter';

const Contributors: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent-500 to-accent-600 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Contributor Community
              </h1>
              <p className="text-white/90 text-lg mb-8 md:pr-8">
                Contribute to the VerityChain ecosystem as a researcher, developer, or knowledge contributor. Help build a more secure Web3 together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-accent-600 hover:bg-white/90" size="lg">
                  Become a Contributor
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                  Explore Opportunities
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-96 h-80 bg-white/10 rounded-lg flex items-center justify-center">
                <Users className="w-40 h-40 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Contribute Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="Get Involved"
            title="Ways to Contribute"
            description="There are multiple ways to become a part of the VerityChain ecosystem and help secure the Web3 space."
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Bug className="w-14 h-14 text-accent-500" />,
                title: "Bug Bounty Hunter",
                description: "Find and report security vulnerabilities in Web3 projects to earn rewards and build your reputation.",
                link: "/bug-bounty"
              },
              {
                icon: <Code className="w-14 h-14 text-accent-500" />,
                title: "Open Source Developer",
                description: "Contribute to our open-source security tools, libraries, and frameworks to improve Web3 security.",
                link: "#"
              },
              {
                icon: <Globe className="w-14 h-14 text-accent-500" />,
                title: "Community Educator",
                description: "Create educational content, host workshops, or mentor others in Web3 security best practices.",
                link: "/community"
              }
            ].map((role, index) => (
              <div key={index} className="bg-light-500 rounded-xl p-8 border border-gray-100 hover:shadow-md transition-all flex flex-col h-full">
                <div className="mb-6">
                  {role.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-dark-600">{role.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{role.description}</p>
                <Link href={role.link}>
                  <Button variant="outline" className="border-accent-500 text-accent-500 hover:bg-accent-50 mt-auto gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-light-500">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-4">
                Why Contribute
              </span>
              <h2 className="text-3xl font-bold mb-6 text-dark-700">Benefits of Contributing</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Build Your Reputation",
                    description: "Establish yourself as an expert in Web3 security with verified contributions on our platform."
                  },
                  {
                    title: "Earn Rewards",
                    description: "Receive competitive rewards for bug bounties and significant contributions to the ecosystem."
                  },
                  {
                    title: "Access Exclusive Opportunities",
                    description: "Get early access to security challenges, research grants, and career opportunities."
                  },
                  {
                    title: "Network with Experts",
                    description: "Connect with leading security professionals, auditors, and Web3 developers."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-full bg-accent-500 text-white flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
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
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-dark-700">Contributor Recognition</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Medal className="w-10 h-10 text-accent-500" />,
                    title: "Contribution Badges",
                    description: "Earn verifiable badges for your security contributions, displayed on your profile."
                  },
                  {
                    icon: <Award className="w-10 h-10 text-accent-500" />,
                    title: "Leaderboards",
                    description: "Get recognized on our community leaderboards for consistent high-quality contributions."
                  },
                  {
                    icon: <BookOpen className="w-10 h-10 text-accent-500" />,
                    title: "Featured Case Studies",
                    description: "Have your significant contributions highlighted in our case studies and blog posts."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-dark-600 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dark-700">How to Get Started</h2>
            <p className="text-lg text-gray-600">Follow these steps to begin your journey as a VerityChain contributor</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-16 top-0 bottom-0 w-1 bg-accent-100 z-0"></div>
              
              {[
                {
                  title: "Create Your Profile",
                  description: "Sign up and create your contributor profile, highlighting your skills and expertise."
                },
                {
                  title: "Choose Your Path",
                  description: "Select how you want to contribute: bug hunting, development, education, or research."
                },
                {
                  title: "Complete Onboarding",
                  description: "Go through our brief onboarding process to understand our standards and processes."
                },
                {
                  title: "Start Contributing",
                  description: "Begin with your first contribution, whether it's a bug report, code submission, or article."
                }
              ].map((step, index) => (
                <div key={index} className="flex mb-12 relative z-10">
                  <div className="mr-8 flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
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

      {/* Featured Contributors */}
      <section className="py-16 bg-light-500">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dark-700">Meet Our Top Contributors</h2>
            <p className="text-lg text-gray-600">These members of our community have made exceptional contributions to Web3 security</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "David Chen",
                role: "Security Researcher",
                achievement: "Discovered 20+ critical vulnerabilities across DeFi protocols",
                initial: "D"
              },
              {
                name: "Elena Rodriguez",
                role: "Smart Contract Developer",
                achievement: "Created open-source security tools used by 50+ projects",
                initial: "E"
              },
              {
                name: "James Wilson",
                role: "Community Educator",
                achievement: "Authored comprehensive guides on Web3 security best practices",
                initial: "J"
              }
            ].map((contributor, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-32 bg-gradient-to-r from-accent-400 to-accent-500 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-accent-500">
                    {contributor.initial}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-dark-600">{contributor.name}</h3>
                  <p className="text-accent-600 font-medium mb-3">{contributor.role}</p>
                  <div className="bg-light-500 rounded-lg p-4 border border-gray-200 mb-4">
                    <p className="text-gray-600">"{contributor.achievement}"</p>
                  </div>
                  <Button variant="outline" className="w-full border-accent-500 text-accent-500 hover:bg-accent-50">
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent-500 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join our community of security experts, developers, and educators to help build a more secure Web3 ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-accent-600 hover:bg-white/90" size="lg">
              Apply to Join
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contributors;
