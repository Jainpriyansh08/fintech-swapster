
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled 
          ? "bg-white bg-opacity-80 backdrop-blur-md shadow-subtle border-b border-gray-100" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-wise-blue-800 to-wise-teal-500 bg-clip-text text-transparent mr-2">Swapster</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-wise-blue-800 hover:text-wise-teal-500 transition-colors font-medium">
              Features
            </a>
            <a href="#pricing" className="text-wise-blue-800 hover:text-wise-teal-500 transition-colors font-medium">
              Pricing
            </a>
            <a href="#help" className="text-wise-blue-800 hover:text-wise-teal-500 transition-colors font-medium">
              Help
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-wise-blue-800 hover:text-wise-blue-600 hover:bg-wise-blue-50">
              Log in
            </Button>
            <Button className="bg-wise-teal-500 hover:bg-wise-teal-600 text-white rounded-full">
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-wise-blue-800 focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-x-0 transition-all duration-300 ease-in-out transform glass-effect",
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0 top-16" 
            : "opacity-0 -translate-y-4 -top-96"
        )}
      >
        <div className="py-4 px-4 space-y-4 bg-white shadow-md rounded-b-xl border-t border-gray-200">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-wise-blue-800 hover:text-wise-teal-500 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-wise-blue-800 hover:text-wise-teal-500 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#help" 
              className="text-wise-blue-800 hover:text-wise-teal-500 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Help
            </a>
          </nav>

          <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
            <Button 
              variant="ghost" 
              className="w-full justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log in
            </Button>
            <Button 
              className="w-full justify-center bg-wise-teal-500 hover:bg-wise-teal-600 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
