import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Shield, ShieldCheck, Fingerprint, ExternalLink } from 'lucide-react';
import PartnerLogo1 from '../../assets/partner-logo1.svg';
import PartnerLogo2 from '../../assets/partner-logo2.svg';
import PartnerLogo3 from '../../assets/partner-logo3.svg';
import PartnerLogo4 from '../../assets/partner-logo4.svg';
import PartnerLogo5 from '../../assets/partner-logo5.svg';

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
          <div className="max-w-xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#032757]/10 text-[#032757] text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" /> Web3 Security Platform
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-800">
              Trust in Every <span className="text-[#032757] relative">
                Transaction
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C71 -1.5 229 -1.5 299 5.5" stroke="#032757" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span> <br/>
              Transparency in Every Audit
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-slate-600">
              Auditt is the leading Web3 security platform offering bug bounty programs and a verified auditor network backed by blockchain-based transparency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-[#032757] hover:bg-[#032757]/90 text-white text-base rounded-lg shadow-md hover:shadow-lg transition-all px-6">
                <Shield className="h-5 w-5 mr-2" /> Explore Bug Bounties
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-[#032757] text-[#032757] hover:bg-[#032757]/5 rounded-lg text-base">
                <ShieldCheck className="h-5 w-5 mr-2" /> Connect with Auditors
              </Button>
            </div>
            
            <div className="flex items-center space-x-2 text-slate-500 mb-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#032757] text-xs font-medium">S1</div>
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 text-xs font-medium">A2</div>
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-medium">B3</div>
              </div>
              <span className="text-sm">500+ Verified Auditors</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-[#032757] text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Fingerprint className="h-5 w-5" />
                  <span className="font-medium">Smart Contract Audit Dashboard</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="space-y-1">
                    <h3 className="font-medium text-slate-800">Project: DeFi Protocol</h3>
                    <p className="text-sm text-slate-500">Status: In Progress</p>
                  </div>
                  <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                    75% Complete
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">Contract Verification</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Completed</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-full"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">Vulnerability Testing</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">In Progress</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#032757] w-3/4"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">Final Review</span>
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">Pending</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-400 w-1/3"></div>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-2 border border-[#032757] text-[#032757] rounded-lg hover:bg-[#032757]/5 flex items-center justify-center">
                  <ExternalLink className="h-4 w-4 mr-2" /> View Full Audit Report
                </button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 -right-4 w-16 h-16 border-4 border-[#032757]/20 rounded-xl transform rotate-12 z-0"></div>
            <div className="absolute -bottom-4 left-1/4 w-20 h-20 border-4 border-purple-300/30 rounded-full z-0"></div>
            <div className="absolute top-0 left-10 w-8 h-8 bg-yellow-300/20 rounded-lg transform -rotate-12 z-0"></div>
          </div>
        </div>
        
        {/* Trusted by Section */}
        <div className="mt-16 md:mt-24 text-center">
          <div className="inline-block mb-8 px-4 py-1 bg-gray-100 rounded-full text-sm font-medium text-slate-600">
            Trusted by Industry Leaders
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            <img src={PartnerLogo1} alt="Partner logo" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
            <img src={PartnerLogo2} alt="Partner logo" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
            <img src={PartnerLogo3} alt="Partner logo" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
            <img src={PartnerLogo4} alt="Partner logo" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
            <img src={PartnerLogo5} alt="Partner logo" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
