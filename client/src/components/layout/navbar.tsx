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
    <header className="sticky top-0 bg-card/90 backdrop-blur-sm shadow-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <AudittLogo className="h-8 w-8" />
            <span className="text-xl font-bold text-foreground">Auditt</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/auditors" className={cn(
              "nav-item text-muted-foreground hover:text-primary font-medium", 
              isActiveLink("/auditors") && "text-primary"
            )}>
              For Auditors
            </Link>
            <Link href="/business" className={cn(
              "nav-item text-muted-foreground hover:text-primary font-medium", 
              isActiveLink("/business") && "text-primary"
            )}>
              For Business
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-muted-foreground hover:text-primary font-medium nav-item">
                Services
                <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/audit-marketplace" className="w-full">Audit Marketplace</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/bug-bounty" className="w-full">Bug Bounty</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/verified-auditors" className="w-full">Verified Auditor Network</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/compliance" className="w-full">Regulatory Compliance</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/community" className={cn(
              "nav-item text-muted-foreground hover:text-primary font-medium", 
              isActiveLink("/community") && "text-primary"
            )}>
              Community
            </Link>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="link" className="text-primary font-medium hover:text-primary/90">
              Sign In
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden rounded-md p-2 text-muted-foreground hover:bg-primary/10 hover:text-primary focus:outline-none"
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
