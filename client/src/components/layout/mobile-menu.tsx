import React from 'react';
import { Link } from 'wouter';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div 
      className={cn(
        "md:hidden overflow-hidden transition-all duration-300",
        isOpen ? "h-auto" : "h-0"
      )}
    >
      <div className="px-4 pt-2 pb-4 space-y-1 bg-card border-b border-border">
        <Link href="/auditors" onClick={handleLinkClick} className="block py-2 px-3 text-muted-foreground hover:bg-primary/10 hover:text-primary rounded-md">
          For Auditors
        </Link>
        <Link href="/business" onClick={handleLinkClick} className="block py-2 px-3 text-muted-foreground hover:bg-primary/10 hover:text-primary rounded-md">
          For Business
        </Link>
        <Link href="/audit-marketplace" onClick={handleLinkClick} className="block py-2 px-3 text-muted-foreground hover:bg-primary/10 hover:text-primary rounded-md">
          Audit Marketplace
        </Link>
        <Link href="/bug-bounty" onClick={handleLinkClick} className="block py-2 px-3 text-muted-foreground hover:bg-primary/10 hover:text-primary rounded-md">
          Bug Bounty
        </Link>
        <Link href="/verified-auditors" onClick={handleLinkClick} className="block py-2 px-3 text-muted-foreground hover:bg-primary/10 hover:text-primary rounded-md">
          Verified Auditor Network
        </Link>
        <Link href="/compliance" onClick={handleLinkClick} className="block py-2 px-3 text-muted-foreground hover:bg-primary/10 hover:text-primary rounded-md">
          Regulatory Compliance
        </Link>
        <Link href="/community" onClick={handleLinkClick} className="block py-2 px-3 text-muted-foreground hover:bg-primary/10 hover:text-primary rounded-md">
          Community
        </Link>
        <div className="pt-2 flex space-x-3">
          <a href="#" className="flex-1 text-center px-3 py-2 rounded-md text-primary font-medium border border-primary">
            Sign In
          </a>
          <a href="#" className="flex-1 text-center px-3 py-2 rounded-md bg-primary text-primary-foreground font-medium">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
