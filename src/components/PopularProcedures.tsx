// components/PopularProcedures.tsx
import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { treatmentCategories } from '../data/constants';

interface PopularProceduresProps {
  activeTreatmentTab: string;
  setActiveTreatmentTab: (tab: string) => void;
}

const PopularProcedures: React.FC<PopularProceduresProps> = ({
  activeTreatmentTab,
  setActiveTreatmentTab
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const popularCategories = Object.keys(treatmentCategories).slice(0, 6);
  const allCategories = Object.keys(treatmentCategories);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Medical Treatments & Procedures</h2>
          <p className="text-lg text-gray-600 mb-8">Comprehensive healthcare solutions with transparent pricing</p>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden lg:flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200/50">
            <div className="flex flex-wrap justify-center gap-1">
              {popularCategories.map((tab) => {
                const category = treatmentCategories[tab];
                const IconComponent = category.icon;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTreatmentTab(tab)}
                    className={`flex items-center space-x-3 px-5 py-3.5 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                      activeTreatmentTab === tab
                        ? 'bg-emerald-500 text-white shadow-md transform scale-105'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/70'
                    }`}
                  >
                    <IconComponent size={18} />
                    <span className="font-semibold">{tab}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className="lg:hidden mb-8">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center space-x-3">
                {React.createElement(treatmentCategories[activeTreatmentTab].icon, { 
                  size: 20, 
                  className: treatmentCategories[activeTreatmentTab].iconColor 
                })}
                <span className="font-semibold text-gray-900">{activeTreatmentTab}</span>
              </div>
              <ChevronDown 
                size={20} 
                className={`text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl z-10 max-h-64 overflow-y-auto">
                {allCategories.map((category) => {
                  const cat = treatmentCategories[category];
                  const IconComponent = cat.icon;
                  return (
                    <button
                      key={category}
                      onClick={() => {
                        setActiveTreatmentTab(category);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-6 py-4 text-left hover:bg-gray-50 transition-colors ${
                        activeTreatmentTab === category ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700'
                      }`}
                    >
                      <IconComponent size={18} className={cat.iconColor} />
                      <span className="font-medium">{category}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        
        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {treatmentCategories[activeTreatmentTab].procedures.map((procedure, index) => {
            const category = treatmentCategories[activeTreatmentTab];
            const IconComponent = category.icon;
            return (
              <div 
                key={index} 
                className={`group bg-white/70 backdrop-blur-sm rounded-3xl p-6 hover:shadow-xl transition-all duration-500 cursor-pointer border ${category.borderColor} hover:border-gray-200 hover:-translate-y-2 transform`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                    <IconComponent size={24} className={`${category.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">
                    Popular
                  </span>
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors duration-300">
                  {procedure.name}
                </h3>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Average Package Cost</p>
                  <p className="text-xl font-bold text-gray-900">{procedure.price}</p>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{procedure.note}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-emerald-600 font-semibold text-sm group-hover:text-emerald-700 transition-colors duration-300">
                    View Details
                  </span>
                  <ArrowRight 
                    size={16} 
                    className="text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-300" 
                  />
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Additional Categories - Desktop Only */}
        <div className="hidden lg:block">
          <div className="text-center mb-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {allCategories.slice(6).map((category, index) => {
                const cat = treatmentCategories[category];
                const IconComponent = cat.icon;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveTreatmentTab(category)}
                    className={`group p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      activeTreatmentTab === category
                        ? 'border-emerald-400 bg-emerald-50 shadow-lg'
                        : 'border-gray-200 bg-white/70 hover:border-gray-300 hover:shadow-md'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: 'fadeInUp 0.4s ease-out forwards'
                    }}
                  >
                    <IconComponent 
                      size={24} 
                      className={`mx-auto mb-2 transition-all duration-300 group-hover:scale-110 ${
                        activeTreatmentTab === category ? 'text-emerald-600' : 'text-gray-400 group-hover:text-gray-600'
                      }`} 
                    />
                    <span className={`text-xs font-medium block transition-colors duration-300 ${
                      activeTreatmentTab === category ? 'text-emerald-700' : 'text-gray-600 group-hover:text-gray-800'
                    }`}>
                      {category.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-200">
            View All Treatments
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default PopularProcedures;