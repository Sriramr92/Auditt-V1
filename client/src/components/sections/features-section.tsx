import React from 'react';
import SectionHeading from '@/components/shared/section-heading';
import { LockKeyhole, Shield, Fingerprint, Users, FileText, Zap } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
  hoverColorClass: string;
  iconColorClass: string;
}

const features: Feature[] = [
  {
    icon: <LockKeyhole className="h-6 w-6" />,
    title: "Blockchain-based Audit Registry",
    description: "All audit results are recorded on-chain for transparency and immutable verification, ensuring trust through technology.",
    colorClass: "bg-primary-100",
    hoverColorClass: "group-hover:bg-primary-500",
    iconColorClass: "text-primary-600"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Vetted Auditor Network",
    description: "Our auditors undergo rigorous vetting to ensure only the most qualified security experts review your code.",
    colorClass: "bg-secondary-100",
    hoverColorClass: "group-hover:bg-secondary-500",
    iconColorClass: "text-secondary-500"
  },
  {
    icon: <Fingerprint className="h-6 w-6" />,
    title: "Bug Bounty Programs",
    description: "Leverage our community of ethical hackers to identify and fix vulnerabilities before they can be exploited.",
    colorClass: "bg-accent-100",
    hoverColorClass: "group-hover:bg-accent-500",
    iconColorClass: "text-accent-500"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community Collaboration",
    description: "Join a thriving ecosystem of security professionals, developers, and Web3 enthusiasts sharing knowledge.",
    colorClass: "bg-primary-100",
    hoverColorClass: "group-hover:bg-primary-500",
    iconColorClass: "text-primary-600"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Regulatory Compliance",
    description: "Stay compliant with evolving Web3 regulations through our standardized audit procedures and documentation.",
    colorClass: "bg-secondary-100",
    hoverColorClass: "group-hover:bg-secondary-500",
    iconColorClass: "text-secondary-500"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Rapid Response",
    description: "Get immediate attention for critical vulnerabilities with our emergency audit and mitigation services.",
    colorClass: "bg-accent-100",
    hoverColorClass: "group-hover:bg-accent-500",
    iconColorClass: "text-accent-500"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          tagline="Why VerityChain"
          title="Securing the Web3 Ecosystem"
          description="Our comprehensive suite of security services provides unparalleled protection and transparency for blockchain projects."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-light-500 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow group">
              <div className={`w-12 h-12 ${feature.colorClass} rounded-lg flex items-center justify-center mb-4 ${feature.hoverColorClass} transition-colors`}>
                <div className={`${feature.iconColorClass} group-hover:text-white transition-colors`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark-600">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Element */}
      <div className="absolute inset-0 blockchain-dots opacity-70 z-0"></div>
    </section>
  );
};

export default FeaturesSection;
