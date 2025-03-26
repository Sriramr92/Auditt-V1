import React from 'react';
import { Link } from 'wouter';
import { Twitter, Linkedin, Facebook, Code2 } from 'lucide-react';
import AudittLogo from '../../assets/auditt-logo';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-slate-800 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <AudittLogo className="h-8 w-8" />
              <span className="text-xl font-bold text-slate-800">Auditt</span>
            </div>
            <p className="text-slate-600 mb-6 max-w-md">
              Auditt provides blockchain-based security solutions for Web3 projects, offering transparent audit registries and bug bounty programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-primary-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-primary-600 transition-colors">
                <Code2 className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-primary-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-primary-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-800">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/bug-bounty" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Bug Bounty
                </Link>
              </li>
              <li>
                <Link href="/audit-marketplace" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Audit Marketplace
                </Link>
              </li>
              <li>
                <Link href="/verified-auditors" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Verified Auditors
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Regulatory Compliance
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Emergency Response
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-800">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-600 hover:text-primary-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-800">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Knowledge Base
                </a>
              </li>
              <li>
                <Link href="/community" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Community Forum
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Security Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary-600 transition-colors">
                  API Reference
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-200 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Auditt. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-primary-600 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-primary-600 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-500 hover:text-primary-600 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
