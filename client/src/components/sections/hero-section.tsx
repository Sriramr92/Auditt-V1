import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, ShieldCheck, Fingerprint, ExternalLink } from "lucide-react";
import PartnerLogo1 from "../../assets/partner-logo1.svg";
import PartnerLogo2 from "../../assets/partner-logo2.svg";
import PartnerLogo3 from "../../assets/partner-logo3.svg";
import PartnerLogo4 from "../../assets/partner-logo4.svg";
import PartnerLogo5 from "../../assets/partner-logo5.svg";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#032757]/5 to-[#032757]/10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-100/50 to-purple-100/50 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#032757]/10 text-[#032757] text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" /> Welcome to Auditt
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-800">
              Trust in Every Transaction,
              <br />
              <span className="text-[#032757] relative">
                Transparency in Every Audit
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 600 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C142 -1.5 458 -1.5 599 5.5"
                    stroke="#032757"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-slate-600 max-w-2xl mx-auto">
              Auditt is a pioneering web3 platform that allows auditors to
              upload their audits to a blockchain, creating an on-chain,
              transparent, and verifiable database.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
              <Button
                size="lg"
                className="bg-[#032757] hover:bg-[#032757]/90 text-white text-base rounded-lg shadow-md hover:shadow-lg transition-all px-6"
              >
                <Shield className="h-5 w-5 mr-2" /> Explore Bug Bounties
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#032757] text-[#032757] hover:bg-[#032757]/5 rounded-lg text-base"
              >
                <ShieldCheck className="h-5 w-5 mr-2" /> Verified Auditor Network
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-3 text-slate-500 mb-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#032757] text-xs font-medium">
                  S1
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 text-xs font-medium">
                  A2
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-medium">
                  B3
                </div>
              </div>
              <span className="text-sm">500+ Verified Auditors</span>
            </div>
          </div>

          {/* Illustration or decorative elements */}
          <div className="relative hidden md:flex justify-center items-center mt-8">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-50 rounded-full animate-pulse opacity-70"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-50 rounded-full animate-float-delay-1 opacity-80"></div>
              <div className="absolute top-1/2 -right-4 w-16 h-16 border-4 border-[#032757]/20 rounded-xl transform rotate-12 z-0"></div>
              <div className="absolute top-0 left-10 w-8 h-8 bg-yellow-300/20 rounded-lg transform -rotate-12 z-0"></div>
            </div>
          </div>
        </div>

        {/* Trusted by Section */}
        <div className="mt-16 md:mt-24 text-center">
          <div className="inline-block mb-8 px-4 py-1 bg-gray-100 rounded-full text-sm font-medium text-slate-600">
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
    </section>
  );
};

export default HeroSection;
