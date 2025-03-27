import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import MobileMenu from './mobile-menu';
import AudittLogo from '../../assets/auditt-logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActiveLink = (path: string) => {
    return location === path;
  };

  return (
    <header className="sticky top-0 bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <AudittLogo className="h-8 w-8" />
            <span className="text-xl font-bold text-white">Auditt</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/auditors" className={cn(
              "nav-item text-gray-300 hover:text-white font-medium", 
              isActiveLink("/auditors") && "text-white"
            )}>
              For Auditors
            </Link>
            <Link href="/business" className={cn(
              "nav-item text-gray-300 hover:text-white font-medium", 
              isActiveLink("/business") && "text-white"
            )}>
              For Business
            </Link>
            <Link href="/contributors" className={cn(
              "nav-item text-gray-300 hover:text-white font-medium", 
              isActiveLink("/contributors") && "text-white"
            )}>
              For Contributors
            </Link>
            <Link href="/compliance" className={cn(
              "nav-item text-gray-300 hover:text-white font-medium", 
              isActiveLink("/compliance") && "text-white"
            )}>
              Regulatory & Compliance
            </Link>
            <Link href="/audit-marketplace" className={cn(
              "nav-item text-gray-300 hover:text-white font-medium", 
              isActiveLink("/audit-marketplace") && "text-white"
            )}>
              Audit Marketplace
            </Link>
            <Link href="/community" className={cn(
              "nav-item text-gray-300 hover:text-white font-medium", 
              isActiveLink("/community") && "text-white"
            )}>
              Community
            </Link>
            <Link href="/agentic-audit" className={cn(
              "bg-gradient-to-r from-[#ff6b35] to-[#ff9d6d] text-white px-3 py-1 rounded-full font-medium transition-all hover:shadow-md", 
              isActiveLink("/agentic-audit") && "shadow-md"
            )}>
              Agentic Audit
            </Link>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/sign-in">
              <Button variant="link" className="text-gray-300 font-medium hover:text-white">
                Sign In
              </Button>
            </Link>
            <Link href="/get-started">
              <Button className="bg-[#ff6b35] text-white hover:bg-[#ff6b35]/90">
                Get Started
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-white focus:outline-none"
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </header>
  );
};

export default Navbar;
