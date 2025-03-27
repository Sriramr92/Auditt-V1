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
      <div className="px-4 pt-2 pb-4 space-y-1 bg-gray-800 border-b border-gray-700">
        <Link href="/auditors" onClick={handleLinkClick} className="block py-2 px-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
          For Auditors
        </Link>
        <Link href="/business" onClick={handleLinkClick} className="block py-2 px-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
          For Business
        </Link>
        <Link href="/contributors" onClick={handleLinkClick} className="block py-2 px-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
          For Contributors
        </Link>
        <Link href="/compliance" onClick={handleLinkClick} className="block py-2 px-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
          Regulatory & Compliance
        </Link>
        <Link href="/audit-marketplace" onClick={handleLinkClick} className="block py-2 px-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
          Audit Marketplace
        </Link>
        <Link href="/community" onClick={handleLinkClick} className="block py-2 px-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
          Community
        </Link>
        <Link href="/agentic-audit" onClick={handleLinkClick} className="block py-2 px-3 mt-2 bg-gradient-to-r from-[#ff6b35] to-[#ff9d6d] text-white font-medium rounded-md">
          Agentic Audit
        </Link>
        <div className="pt-2 flex space-x-3">
          <Link href="/sign-in" className="flex-1 text-center px-3 py-2 rounded-md text-gray-300 font-medium border border-gray-600 hover:text-white hover:border-gray-500">
            Sign In
          </Link>
          <Link href="/get-started" className="flex-1 text-center px-3 py-2 rounded-md bg-[#ff6b35] text-white font-medium hover:bg-[#ff6b35]/90">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
