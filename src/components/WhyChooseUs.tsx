// components/WhyChooseUs.tsx
import React from 'react';
import { Play, Star } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-12 bg-grey-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                World-Class Care, One Click Away
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Medcast, exceptional medical experiences are always within reach. Explore 
                internationally accredited hospitals, connect directly with specialist doctors, 
                and book with complete peace of mind—wherever you are, whatever your medical needs.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center text-lg">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">500+ accredited hospitals across 25+ countries</span>
                </li>
                <li className="flex items-center text-lg">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">100% secure payments backed by International Medical Insurance</span>
                  <span className="ml-3 text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-500">ⓘ</span>
                </li>
                <li className="flex items-center text-lg">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Comprehensive care coordination at no extra cost</span>
                  <span className="ml-3 text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-500">ⓘ</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Video/Intro Section */}
          <div className="relative">
            <div className="bg-green-600 rounded-2xl p-8 text-white text-center shadow-md">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <h4 className="text-2xl font-bold mb-3">Introducing</h4>
              <h5 className="text-4xl font-bold mb-4">Medcast</h5>
              <p className="text-lg">Your trusted medical tourism partner</p>
            </div>
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Expert Medical Care */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100">
            <div className="mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-600 text-xl">🏥</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Expert Medical Care</h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              World-class, internationally certified hospitals and specialist doctors. 
              <span className="font-semibold text-gray-700"> 4.9/5 stars</span> from 15,000+ patients.
            </p>
          </div>

          {/* Transparent Pricing */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100">
            <div className="mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-600 text-xl">💰</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Transparent Pricing</h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Up to 70% savings with Price Match Guarantee. 
              <a href="#" className="text-green-600 hover:underline font-medium ml-1">Learn more</a>
            </p>
          </div>

          {/* Accredited Facilities */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100">
            <div className="mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-600 text-xl">🏆</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Accredited Facilities</h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              JCI accredited hospitals with comprehensive insurance coverage. 
              <a href="#" className="text-green-600 hover:underline font-medium ml-1">View certifications</a>
            </p>
          </div>

          {/* Patient Satisfaction */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100">
            <div className="mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-600 text-xl">⭐</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Patients Love Us</h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              <span className="font-semibold text-gray-700">4.8/5 stars</span> from 2,500+ reviews across trusted platforms.
            </p>
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-gray-600 text-sm">4.7 (1,253)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;