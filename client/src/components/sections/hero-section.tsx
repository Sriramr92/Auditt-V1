import React from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, ShieldCheck, Fingerprint, ExternalLink, FileEdit } from "lucide-react";
import PartnerLogo1 from "../../assets/partner-logo1.svg";
import PartnerLogo2 from "../../assets/partner-logo2.svg";
import PartnerLogo3 from "../../assets/partner-logo3.svg";
import PartnerLogo4 from "../../assets/partner-logo4.svg";
import PartnerLogo5 from "../../assets/partner-logo5.svg";

const HeroSection: React.FC = () => {
  const [location, setLocation] = useLocation();
  return (
    <section className="relative overflow-hidden bg-gray-100">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gray-200 to-gray-300 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="relative z-10 h-[600px] flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-black/10 text-black text-sm font-medium mb-6">
            <Shield className="h-4 w-4 mr-2" /> Welcome to Auditt
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900">
            Trust in Every Transaction,
            <br />
            Transparency in Every Audit
          </h1>

          <p className="text-lg mb-10 text-gray-700 max-w-2xl mx-auto">
            Auditt is a pioneering web3 platform that allows auditors to upload
            their audits to a blockchain, creating an on-chain, transparent, and
            verifiable database.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <Button
              size="lg"
              className="bg-black hover:bg-black/90 text-white text-base rounded-lg transition-all px-6 py-2"
              onClick={() => setLocation("/bug-bounty")}
            >
              <Shield className="h-5 w-5 mr-2" /> Explore Bug Bounties
            </Button>
            <Button
              size="lg"
              className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white text-base rounded-lg transition-all px-6 py-2"
              onClick={() => setLocation("/post-project")}
            >
              <FileEdit className="h-5 w-5 mr-2" /> Post Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/70 text-black hover:bg-white border border-black rounded-lg text-base py-2"
              onClick={() => setLocation("/verified-auditors")}
            >
              <ShieldCheck className="h-5 w-5 mr-2" /> Verified Auditor Network
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-3 text-gray-500 mb-6">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 text-xs font-medium">
                S1
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-800 text-xs font-medium">
                A2
              </div>
              <div className="w-8 h-8 rounded-full bg-[#ff6b35]/20 flex items-center justify-center text-[#ff6b35] text-xs font-medium">
                B3
              </div>
            </div>
            <span className="text-sm">500+ Verified Auditors</span>
          </div>
        </div>

        {/* Decorative elements that span the whole width */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
          {/* Square decoration */}
          <div className="absolute top-1/3 left-1/4 w-12 h-12 border-2 border-gray-300 rounded-lg transform rotate-12 animate-float"></div>

          {/* Circle decoration */}
          <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-[#ff6b35]/20 rounded-full animate-float-delay-1"></div>

          {/* Plus decoration */}
          <div className="absolute top-1/4 right-1/3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4V20M4 12H20"
                stroke="#333333"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Additional decorative elements */}
          <div className="absolute top-1/2 right-1/5 w-4 h-4 bg-gray-200 rounded-full animate-float-delay-2"></div>
          <div className="absolute bottom-1/4 left-1/3 w-6 h-6 border border-gray-300 rounded-full animate-float"></div>
        </div>
      </div>

      {/* Trusted by Section */}
      <div className="bg-gray-900 py-16 md:py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block mb-8 px-4 py-1 bg-gray-800 rounded-full text-sm font-medium text-gray-200">
              Trusted by Industry Leaders
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
              <img
                src={PartnerLogo1}
                alt="Partner logo"
                className="h-10 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src={PartnerLogo2}
                alt="Partner logo"
                className="h-10 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src={PartnerLogo3}
                alt="Partner logo"
                className="h-10 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src={PartnerLogo4}
                alt="Partner logo"
                className="h-10 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src={PartnerLogo5}
                alt="Partner logo"
                className="h-10 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
