// components/Header.tsx
import React from 'react';
import { Phone } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <img 
                src="logo.png"
                alt="Medcasts Logo" 
                className="h-14"
              />
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-black transition-colors font-medium">Best Doctors</a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors font-medium">Best Hospitals</a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors font-medium">How it works?</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-gray-700">
              <Phone size={18} />
              <span className="font-medium">1-201-467-83-10</span>
            </div>
            <button className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-sm">
              Request a call
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;