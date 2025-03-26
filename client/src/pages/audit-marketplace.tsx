import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/shared/section-heading';
import { SearchIcon, FilterIcon, UserCheck, ShieldCheck, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const AuditMarketplace: React.FC = () => {
  const auditors = [
    {
      name: "Alex Johnson",
      specialty: "Smart Contract Security",
      rating: 4.9,
      reviews: 43,
      experience: "5+ years",
      completedAudits: 87,
      availability: "Available"
    },
    {
      name: "Sarah Martinez",
      specialty: "DeFi Protocol Security",
      rating: 5.0,
      reviews: 38,
      experience: "7+ years",
      completedAudits: 112,
      availability: "Booked until June"
    },
    {
      name: "Raj Patel",
      specialty: "ZK Rollups & L2 Solutions",
      rating: 4.8,
      reviews: 29,
      experience: "4+ years",
      completedAudits: 54,
      availability: "Limited Availability"
    },
    {
      name: "Emma Watson",
      specialty: "NFT & Marketplace Security",
      rating: 4.7,
      reviews: 31,
      experience: "3+ years",
      completedAudits: 42,
      availability: "Available"
    },
    {
      name: "Michael Chen",
      specialty: "Cross-chain Protocols",
      rating: 4.9,
      reviews: 27,
      experience: "6+ years",
      completedAudits: 79,
      availability: "Available"
    },
    {
      name: "Julia Kim",
      specialty: "Solidity & EVM Security",
      rating: 4.8,
      reviews: 35,
      experience: "5+ years",
      completedAudits: 68,
      availability: "Booked until May"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Audit Marketplace
          </h1>
          <p className="text-white/90 text-lg mb-10 max-w-3xl mx-auto">
            Connect with verified security experts specializing in blockchain and smart contract audits. Our transparent marketplace ensures quality, trust, and expertise.
          </p>
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <Input 
                  type="text" 
                  placeholder="Search for auditors by expertise, name, or technologies..." 
                  className="w-full h-12 px-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60"
                />
              </div>
              <Button className="bg-white text-primary-600 hover:bg-white/90 h-12 gap-2">
                <SearchIcon size={18} />
                Find Auditors
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-light-500 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <span className="font-medium text-gray-700">Filter by:</span>
              <Button variant="outline" size="sm" className="gap-2">
                <FilterIcon size={14} />
                Specialty
              </Button>
              <Button variant="outline" size="sm">Experience</Button>
              <Button variant="outline" size="sm">Availability</Button>
              <Button variant="outline" size="sm">Rating</Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="border border-gray-300 rounded-md text-sm p-1">
                <option>Most Relevant</option>
                <option>Highest Rating</option>
                <option>Most Experience</option>
                <option>Availability</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Auditors List */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-dark-700">Top Verified Auditors</h2>
            <p className="text-gray-600">Showing {auditors.length} of 120+ auditors</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditors.map((auditor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-3 bg-gradient-to-r from-primary-500 to-primary-600"></div>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-600">
                      {auditor.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-700">{auditor.name}</h3>
                      <p className="text-primary-600 font-medium">{auditor.specialty}</p>
                      <div className="flex items-center mt-1">
                        <div className="flex text-yellow-400 mr-1">
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                        <span className="text-sm font-medium">{auditor.rating} ({auditor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
                    <div className="flex items-center gap-1">
                      <UserCheck className="w-4 h-4 text-gray-500" />
                      <span>{auditor.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-gray-500" />
                      <span>{auditor.completedAudits} audits</span>
                    </div>
                    <div className="col-span-2 mt-1">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                        auditor.availability.includes("Available") 
                          ? "bg-green-100 text-green-800" 
                          : "bg-amber-100 text-amber-800"
                      }`}>
                        {auditor.availability}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-gray-50 flex justify-between">
                  <Button variant="link" className="text-primary-600 p-0">
                    View Profile
                  </Button>
                  <Button size="sm">
                    Contact
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" className="mx-auto">
              Load More Auditors
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-light-500">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="Process"
            title="How the Audit Marketplace Works"
            description="Our streamlined process connects you with the right security experts for your project needs."
          />

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Find the Right Expert",
                description: "Browse profiles, reviews, and specialties to find the perfect auditor for your specific project needs."
              },
              {
                number: "02",
                title: "Secure Engagement",
                description: "Use our platform to set clear scope, timeline, and deliverables with transparent pricing and secure payments."
              },
              {
                number: "03",
                title: "Verified Results",
                description: "Receive detailed audit reports with blockchain verification for immutable proof of security validation."
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-primary-600 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3 text-dark-700">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Connect with top security experts and get your blockchain project thoroughly audited.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary-600 hover:bg-white/90" size="lg">
              Post Your Project
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
              Browse All Auditors
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuditMarketplace;
