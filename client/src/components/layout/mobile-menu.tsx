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
      <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-b">
        <Link href="/auditors" onClick={handleLinkClick} className="block py-2 px-3 text-slate-600 hover:bg-primary-50 hover:text-primary-600 rounded-md">
          For Auditors
        </Link>
        <Link href="/business" onClick={handleLinkClick} className="block py-2 px-3 text-slate-600 hover:bg-primary-50 hover:text-primary-600 rounded-md">
          For Business
        </Link>
        <Link href="/audit-marketplace" onClick={handleLinkClick} className="block py-2 px-3 text-slate-600 hover:bg-primary-50 hover:text-primary-600 rounded-md">
          Audit Marketplace
        </Link>
        <Link href="/bug-bounty" onClick={handleLinkClick} className="block py-2 px-3 text-slate-600 hover:bg-primary-50 hover:text-primary-600 rounded-md">
          Bug Bounty
        </Link>
        <Link href="/verified-auditors" onClick={handleLinkClick} className="block py-2 px-3 text-slate-600 hover:bg-primary-50 hover:text-primary-600 rounded-md">
          Verified Auditor Network
        </Link>
        <Link href="/compliance" onClick={handleLinkClick} className="block py-2 px-3 text-slate-600 hover:bg-primary-50 hover:text-primary-600 rounded-md">
          Regulatory Compliance
        </Link>
        <Link href="/community" onClick={handleLinkClick} className="block py-2 px-3 text-slate-600 hover:bg-primary-50 hover:text-primary-600 rounded-md">
          Community
        </Link>
        <div className="pt-2 flex space-x-3">
          <a href="#" className="flex-1 text-center px-3 py-2 rounded-md text-primary-600 font-medium border border-primary-600">
            Sign In
          </a>
          <a href="#" className="flex-1 text-center px-3 py-2 rounded-md bg-primary-600 text-white font-medium">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
