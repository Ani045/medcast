// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <img 
              src="logo.png"
              alt="Medcasts Logo" 
              className="h-12 mb-6"
            />
            <p className="text-gray-400 leading-relaxed">Connecting patients with world-class medical care across the globe. Your health, our priority.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">For Patients</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Find Clinics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Popular Procedures</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Patient Reviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Treatment Costs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">For Clinics</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Join Network</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certification</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marketing Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner Benefits</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emergency Support</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Medcasts. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;