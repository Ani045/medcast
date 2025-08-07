// components/HeroSection.tsx
import React from 'react';
import { Stethoscope, MapPin } from 'lucide-react';
import { countries, treatments, medicalImages } from '../data/constants';

interface HeroSectionProps {
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  selectedTreatment: string;
  setSelectedTreatment: (treatment: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  selectedCountry,
  setSelectedCountry,
  selectedTreatment,
  setSelectedTreatment
}) => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Find top clinics & doctors across 
              <span className="text-green-600"> 50+ countries</span>
            </h1>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative flex-1">
                  <Stethoscope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select
                    value={selectedTreatment}
                    onChange={(e) => setSelectedTreatment(e.target.value)}
                    className="w-full pl-12 pr-8 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white text-base"
                  >
                    <option value="">Select treatment or specialty</option>
                    {treatments.map((treatment) => (
                      <option key={treatment} value={treatment}>{treatment}</option>
                    ))}
                  </select>
                </div>
                
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="pl-12 pr-8 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white text-base min-w-[160px]"
                  >
                    <option value="">Add country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                
                <button className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-colors font-semibold text-base shadow-md hover:shadow-lg">
                  Search
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {medicalImages.map((image, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={image} 
                  alt={`Medical facility ${i + 1}`}
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;