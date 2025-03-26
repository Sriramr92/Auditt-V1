import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/shared/section-heading';
import { BadgeCheck, Shield, Award, Users, BookOpen, CheckCircle } from 'lucide-react';

const VerifiedAuditors: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-600 to-secondary-700 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Verified Auditor Network
              </h1>
              <p className="text-white/90 text-lg mb-8 md:pr-8">
                Our network of rigorously vetted security experts ensures the highest quality audits for Web3 projects. Each verified auditor has proven expertise and maintains our strict standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-secondary-600 hover:bg-white/90" size="lg">
                  Find an Auditor
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                  Join as an Auditor
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-96 h-80 bg-white/10 rounded-lg flex items-center justify-center">
                <BadgeCheck className="w-40 h-40 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="Rigorous Vetting"
            title="Our Auditor Verification Process"
            description="We maintain the highest standards for our auditor network through a comprehensive verification process."
          />

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Shield className="w-10 h-10 text-secondary-500" />,
                title: "Technical Assessments",
                description: "Auditors complete comprehensive technical assessments to demonstrate their expertise in blockchain security, smart contract auditing, and vulnerability detection."
              },
              {
                icon: <BookOpen className="w-10 h-10 text-secondary-500" />,
                title: "Experience Verification",
                description: "We verify past work experience, completed audits, and security contributions to ensure a proven track record in Web3 security."
              },
              {
                icon: <Award className="w-10 h-10 text-secondary-500" />,
                title: "Credential Evaluation",
                description: "Relevant certifications, academic credentials, and specialized training in blockchain security are thoroughly evaluated."
              },
              {
                icon: <Users className="w-10 h-10 text-secondary-500" />,
                title: "Peer Review",
                description: "Candidates undergo peer review from existing network members to ensure they meet our community standards."
              }
            ].map((step, index) => (
              <div key={index} className="bg-light-500 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all">
                <div className="flex gap-4 items-start">
                  <div className="w-14 h-14 flex-shrink-0 bg-secondary-100 rounded-lg flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-dark-600">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-5xl mx-auto bg-secondary-50 rounded-xl p-8 border border-secondary-100">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-40 h-40 rounded-full bg-secondary-100 flex items-center justify-center">
                  <BadgeCheck className="w-20 h-20 text-secondary-500" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-dark-700">Ongoing Quality Assurance</h3>
                <p className="text-gray-600 mb-4">
                  Our verification isn't just a one-time process. Verified auditors undergo regular performance reviews, maintain continuous education requirements, and receive feedback from projects they audit.
                </p>
                <div className="space-y-2">
                  {[
                    "Regular performance evaluations",
                    "Client satisfaction monitoring",
                    "Continuing education requirements",
                    "Community contribution expectations"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-light-500">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-4">
                For Projects
              </span>
              <h2 className="text-3xl font-bold mb-6 text-dark-700">Why Choose Verified Auditors?</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Proven Expertise",
                    description: "Access auditors with demonstrated experience and specialized knowledge relevant to your project."
                  },
                  {
                    title: "Quality Assurance",
                    description: "Expect consistent, high-quality audit reports with actionable security recommendations."
                  },
                  {
                    title: "Verified Credentials",
                    description: "All auditor qualifications and experience are thoroughly verified by our team."
                  },
                  {
                    title: "Specialized Matching",
                    description: "We match your project with auditors who have expertise in your specific technologies."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-secondary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-600 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-dark-700">Auditor Specializations</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Smart Contract Security",
                  "DeFi Protocol Audits",
                  "ZK Rollups & L2 Solutions",
                  "NFT & Marketplace Security",
                  "Cross-chain Protocols",
                  "DAO Governance",
                  "Solidity & EVM Security",
                  "Frontend Security",
                  "Tokenomics Audits",
                  "Gas Optimization"
                ].map((specialization, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary-500"></div>
                    <span className="text-gray-700">{specialization}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Button className="w-full bg-secondary-500 hover:bg-secondary-600 text-white">
                  Find Specialists
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Auditors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dark-700">Meet Some of Our Verified Auditors</h2>
            <p className="text-lg text-gray-600">These security experts represent the quality and expertise you can expect from our verified network</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Alex Johnson",
                specialty: "Smart Contract Security",
                achievements: "Identified critical vulnerabilities in 5 major DeFi protocols",
                image: "A"
              },
              {
                name: "Sarah Martinez",
                specialty: "DeFi Protocol Security",
                achievements: "Former security lead at a top 10 cryptocurrency project",
                image: "S"
              },
              {
                name: "Raj Patel",
                specialty: "ZK Rollups & L2 Solutions",
                achievements: "Contributed to securing over $2B in TVL across various protocols",
                image: "R"
              }
            ].map((auditor, index) => (
              <div key={index} className="bg-light-500 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-32 bg-gradient-to-r from-secondary-400 to-secondary-500 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-secondary-500">
                    {auditor.image}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-dark-600">{auditor.name}</h3>
                  <p className="text-secondary-600 font-medium mb-3">{auditor.specialty}</p>
                  <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                    <p className="text-gray-600 italic">"{auditor.achievements}"</p>
                  </div>
                  <Button variant="outline" className="w-full border-secondary-500 text-secondary-500 hover:bg-secondary-50">
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button className="bg-secondary-500 hover:bg-secondary-600 text-white">
              View All Verified Auditors
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Web3 Project?</h2>
          <p className="text-xl text-white/90 mb-8">
            Connect with our verified auditors today and ensure your project meets the highest security standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-secondary-600 hover:bg-white/90" size="lg">
              Find an Auditor
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
              Apply as an Auditor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerifiedAuditors;
