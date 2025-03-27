import React from 'react';
import SectionHeading from '@/components/shared/section-heading';
import { Link } from 'wouter';
import { Building, Shield, Users, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';

interface UserType {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  linkPath: string;
  primaryColor: string;
  secondaryColor: string;
}

const userTypes: UserType[] = [
  {
    icon: <Building className="h-12 w-12" />,
    title: "For Businesses",
    description: "Secure your blockchain projects with comprehensive audit solutions and bug bounty programs.",
    features: [
      "Transparent audit reports",
      "Access to expert auditors",
      "Bug bounty management",
      "Compliance documentation"
    ],
    linkPath: "/business",
    primaryColor: "#032757",
    secondaryColor: "#0369a1"
  },
  {
    icon: <Shield className="h-12 w-12" />,
    title: "For Auditors",
    description: "Join our network of verified security experts and access high-value audit opportunities.",
    features: [
      "Verified auditor status",
      "Premium project matching",
      "Reputation building",
      "Professional development"
    ],
    linkPath: "/auditors",
    primaryColor: "#4f46e5", 
    secondaryColor: "#6366f1"
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "For Contributors",
    description: "Participate in our community as a researcher, developer, or knowledge contributor.",
    features: [
      "Bug bounty hunting",
      "Knowledge sharing",
      "Community events",
      "Skill development"
    ],
    linkPath: "/contributors",
    primaryColor: "#0891b2",
    secondaryColor: "#06b6d4"
  }
];

const UserTypesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          tagline="Solutions For Everyone"
          title="Tailored Security Solutions"
          description="Auditt provides specialized services for different participants in the Web3 ecosystem."
          textAlignment="center"
        />
        
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {userTypes.map((userType, index) => (
            <div 
              key={index} 
              className="relative group animate-fade-in"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* Card background with gradient border on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"
                   style={{backgroundImage: `linear-gradient(to right, ${userType.primaryColor}, ${userType.secondaryColor})`}}></div>
              
              <div className="relative flex flex-col h-full bg-white rounded-2xl shadow-md border border-gray-100 p-6 transition-all duration-300 group-hover:shadow-xl overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 -mt-10 -mr-10 rounded-full opacity-10"
                     style={{backgroundColor: userType.primaryColor}}></div>
                     
                {/* Icon */}
                <div className="mb-6 p-4 rounded-2xl w-16 h-16 flex items-center justify-center"
                     style={{
                       color: "white",
                       background: `linear-gradient(135deg, ${userType.primaryColor}, ${userType.secondaryColor})`
                     }}>
                  {userType.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-slate-800">{userType.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{userType.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <div className="border-t border-gray-100 pt-4 mb-4"></div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">Key Benefits</h4>
                  <ul className="space-y-3">
                    {userType.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle 
                          className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" 
                          style={{color: userType.primaryColor}} 
                        />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Button */}
                <Link href={userType.linkPath}
                     className="mt-auto inline-flex items-center justify-center py-3 px-5 rounded-lg text-white font-medium transition-all duration-200 w-full"
                     style={{
                       background: `linear-gradient(135deg, ${userType.primaryColor}, ${userType.secondaryColor})`,
                       boxShadow: `0 4px 14px -3px ${userType.primaryColor}40`
                     }}>
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Information */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-slate-600">
            Not sure which solution fits your needs? 
            <Link href="/contact" className="text-[#032757] font-medium hover:underline ml-1">
              Contact our team for a personalized consultation.
            </Link>
          </p>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-tl from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-50 -z-10"></div>
    </section>
  );
};

export default UserTypesSection;
