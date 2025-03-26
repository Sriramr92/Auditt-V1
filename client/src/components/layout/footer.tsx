import React from 'react';
import { Link } from 'wouter';
import { Twitter, Linkedin, Facebook, Code2 } from 'lucide-react';
import AudittLogo from '../../assets/auditt-logo';

const Footer = () => {
  return (
    <footer className="bg-card/95 text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <AudittLogo className="h-8 w-8" />
              <span className="text-xl font-bold">Auditt</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Auditt provides blockchain-based security solutions for Web3 projects, offering transparent audit registries and bug bounty programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Code2 className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/bug-bounty" className="text-muted-foreground hover:text-primary transition-colors">
                  Bug Bounty
                </Link>
              </li>
              <li>
                <Link href="/audit-marketplace" className="text-muted-foreground hover:text-primary transition-colors">
                  Audit Marketplace
                </Link>
              </li>
              <li>
                <Link href="/verified-auditors" className="text-muted-foreground hover:text-primary transition-colors">
                  Verified Auditors
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-muted-foreground hover:text-primary transition-colors">
                  Regulatory Compliance
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Emergency Response
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Knowledge Base
                </a>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-primary transition-colors">
                  Community Forum
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Security Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  API Reference
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-border my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Auditt. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
