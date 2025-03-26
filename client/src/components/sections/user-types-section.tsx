import React from 'react';
import SectionHeading from '@/components/shared/section-heading';
import { Link } from 'wouter';
import { Building, Shield, Users, ChevronRight } from 'lucide-react';
import CardBackground from '../../assets/card-background.svg';

interface UserType {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  linkPath: string;
  bgClass: string;
  textColorClass: string;
}

const userTypes: UserType[] = [
  {
    icon: <Building className="h-16 w-16 text-white" />,
    title: "For Businesses",
    description: "Secure your blockchain projects with comprehensive audit solutions and bug bounty programs.",
    features: [
      "Transparent audit reports",
      "Access to expert auditors",
      "Bug bounty management"
    ],
    linkPath: "/business",
    bgClass: "bg-gradient-to-r from-primary-600 to-primary-700",
    textColorClass: "text-primary-600"
  },
  {
    icon: <Shield className="h-16 w-16 text-white" />,
    title: "For Auditors",
    description: "Join our network of verified security experts and access high-value audit opportunities.",
    features: [
      "Verified auditor status",
      "Premium project matching",
      "Reputation building"
    ],
    linkPath: "/auditors",
    bgClass: "bg-gradient-to-r from-secondary-500 to-secondary-600",
    textColorClass: "text-secondary-500"
  },
  {
    icon: <Users className="h-16 w-16 text-white" />,
    title: "For Contributors",
    description: "Participate in our community as a researcher, developer, or knowledge contributor.",
    features: [
      "Bug bounty hunting",
      "Knowledge sharing",
      "Community events"
    ],
    linkPath: "/contributors",
    bgClass: "bg-gradient-to-r from-accent-500 to-accent-600",
    textColorClass: "text-accent-500"
  }
];

const UserTypesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          tagline="Solutions For Everyone"
          title="Tailored Security Solutions"
          description="Auditt provides specialized services for different participants in the Web3 ecosystem."
        />
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {userTypes.map((userType, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className={`h-40 ${userType.bgClass} flex items-center justify-center p-4`}>
                {userType.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-dark-700">{userType.title}</h3>
                <p className="text-gray-600 mb-4">{userType.description}</p>
                <ul className="space-y-2 mb-6">
                  {userType.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${userType.textColorClass} mt-0.5 mr-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={userType.linkPath} className={`${userType.textColorClass} hover:opacity-80 font-medium inline-flex items-center`}>
                  Learn More
                  <ChevronRight className="h-5 w-5 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;
