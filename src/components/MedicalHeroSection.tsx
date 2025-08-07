// components/MedicalHeroSection.tsx
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const MedicalHeroSection: React.FC = () => {
  return (
    <section className="hidden lg:block py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-6 items-stretch">
          
          {/* Main Doctor/Hospital Image with Text Overlay */}
          <div className="col-span-2 relative rounded-3xl overflow-hidden h-[500px]">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("Artimes-Hospital- image.png")'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
            
            {/* Text Overlay on Hospital Image */}
            <div className="relative h-full flex flex-col justify-center px-8 text-white">
              <h1 className="text-4xl font-bold leading-tight mb-4">
                Connect with leading 
                <br />
                specialists worldwide
              </h1>
              
              <p className="text-lg mb-6 opacity-90">
                Choose from thousands of trusted doctors at affordable 
                rates. Book your online consultation today.
              </p>
              
              <div className="flex items-center space-x-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300">
                  <span>View all Doctors</span>
                  <ArrowRight size={20} />
                </button>
                
                <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 font-semibold">
                  <CheckCircle size={18} />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side Cards Column */}
          <div className="col-span-2 space-y-6 h-[500px] flex flex-col">
            
            {/* Emergency Care Card */}
            <div className="relative rounded-3xl overflow-hidden flex-1 cursor-pointer group">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=600")'
                }}
              ></div>
              <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
              <div className="relative h-full flex items-center justify-between px-6">
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=150" 
                      alt="Emergency Care"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl">Before & After pictures</h3>
                </div>
                <ArrowRight size={24} className="text-gray-600 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
            
            {/* Surgical Care Card */}
            <div className="relative rounded-3xl overflow-hidden flex-1 cursor-pointer group">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600")'
                }}
              ></div>
              <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
              <div className="relative h-full flex items-center justify-between px-6">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {[
                      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
                      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
                      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100",
                      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100",
                      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100"
                    ].map((src, index) => (
                      <div key={index} className="w-10 h-10 rounded-full border-3 border-white overflow-hidden">
                        <img src={src} alt={`Patient ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl">Bookimed patient stories</h3>
                </div>
                <ArrowRight size={24} className="text-gray-600 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
            
            {/* Medical Technology Card */}
            <div className="relative rounded-3xl overflow-hidden flex-1 cursor-pointer group">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600")'
                }}
              ></div>
              <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
              <div className="relative h-full flex items-center justify-between px-6">
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 rounded-xl overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=150" 
                      alt="Medical Blog"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl">Medical Blog</h3>
                </div>
                <ArrowRight size={24} className="text-gray-600 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalHeroSection;