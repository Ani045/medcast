// components/HospitalCategories.tsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HospitalCategoriesProps {
  currentCategorySlide: number;
  setCurrentCategorySlide: (slide: number) => void;
}

// Demo data (as before)
const hospitalCategories = [
  {
    name: 'Medanta – The Medicity',
    count: 'Gurgaon, India',
    image: 'public/Medanta hospital.png',
    description: 'Comprehensive healthcare with multiple specialties under one roof',
  },
  {
    name: 'Indraprastha Apollo Hospital',
    count: 'Delhi',
    image: 'public/Apollo-hospital.png',
    description: 'Specialized oncology treatment and cancer care facilities',
  },
  {
    name: 'Max Super Speciality Hospital',
    count: 'Saket , New Delhi',
    image: 'public/Max-hospital.png',
    description: 'Advanced cardiac care and cardiovascular treatment centers',
  },
  {
    name: 'Artemis Hospital',
    count: 'Gurugram',
    image: 'public/Artimes-hospital.png',
    description: '24/7 emergency medical services and trauma care',
  },
  {
    name: 'Orthopedic Centers',
    count: '650+ centers',
    image: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Bone, joint, and musculoskeletal treatment specialists',
  },
  {
    name: 'Eye Care Hospitals',
    count: '420+ hospitals',
    image: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Comprehensive ophthalmology and vision care services',
  },
  {
    name: 'Mental Health Centers',
    count: '280+ centers',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Psychiatric care and mental wellness treatment facilities',
  },
  {
    name: 'Maternity Hospitals',
    count: '550+ hospitals',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Specialized care for mothers and newborns',
  },
];

const HospitalCategories: React.FC<HospitalCategoriesProps> = ({
  currentCategorySlide,
  setCurrentCategorySlide,
}) => {
  const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg'>('lg');

  // Detect responsive screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('sm');
      } else if (width < 1024) {
        setScreenSize('md');
      } else {
        setScreenSize('lg');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // How many categories to show per slide by screen size
  const getCategoriesPerSlide = () => {
    switch (screenSize) {
      case 'sm':
        return 1;
      case 'md':
        return 2;
      case 'lg':
      default:
        return 4;
    }
  };

  const categoriesPerSlide = getCategoriesPerSlide();
  const totalCategorySlides = Math.ceil(hospitalCategories.length / categoriesPerSlide);

  // Move forward/back (no wrap)
const nextCategorySlide = () => {
  const nextSlide = currentCategorySlide + 1 >= totalCategorySlides 
    ? currentCategorySlide 
    : currentCategorySlide + 1;
  setCurrentCategorySlide(nextSlide);
};

const prevCategorySlide = () => {
  const prevSlide = currentCategorySlide - 1 < 0 
    ? currentCategorySlide 
    : currentCategorySlide - 1;
  setCurrentCategorySlide(prevSlide);
};


  // Only reset slide if current slide gets out of bounds after resize
  useEffect(() => {
    if (currentCategorySlide > totalCategorySlides - 1) {
      setCurrentCategorySlide(0);
    }
  }, [screenSize, totalCategorySlides, currentCategorySlide, setCurrentCategorySlide]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Best Hospital in India</h2>
            <p className="text-lg text-gray-600">
              Discover popular hospital types - from multi-specialty to specialized care - find your preferred healthcare facility.
            </p>
          </div>

          {/* Desktop navigation */}
          {totalCategorySlides > 1 && (
            <div className="absolute top-16 right-0 flex space-x-2 z-10 md:block hidden">
              <button
                onClick={prevCategorySlide}
                className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
                aria-label="Previous slide"
                disabled={currentCategorySlide === 0}
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <button
                onClick={nextCategorySlide}
                className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
                aria-label="Next slide"
                disabled={currentCategorySlide === totalCategorySlides - 1}
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>
          )}

          {/* Mobile navigation */}
          {totalCategorySlides > 1 && (
            <div className="flex justify-between items-center mb-6 md:hidden">
              <button
                onClick={prevCategorySlide}
                className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
                aria-label="Previous slide"
                disabled={currentCategorySlide === 0}
              >
                <ChevronLeft size={18} className="text-gray-600" />
              </button>
              <span className="text-sm text-gray-500">
                {currentCategorySlide + 1} / {totalCategorySlides}
              </span>
              <button
                onClick={nextCategorySlide}
                className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
                aria-label="Next slide"
                disabled={currentCategorySlide === totalCategorySlides - 1}
              >
                <ChevronRight size={18} className="text-gray-600" />
              </button>
            </div>
          )}

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${totalCategorySlides * 100}%`,
                transform: `translateX(-${currentCategorySlide * (100 / totalCategorySlides)}%)`,
              }}
            >
              {Array.from({ length: totalCategorySlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="flex-shrink-0"
                  style={{ width: `${100 / totalCategorySlides}%` }}
                >
                  <div
                    className={`grid gap-6 ${
                      screenSize === 'sm'
                        ? 'grid-cols-1'
                        : screenSize === 'md'
                        ? 'grid-cols-2'
                        : 'grid-cols-4'
                    }`}
                  >
                    {hospitalCategories
                      .slice(
                        slideIndex * categoriesPerSlide,
                        (slideIndex + 1) * categoriesPerSlide
                      )
                      .map((category, index) => (
                        <div
                          key={index}
                          className="relative rounded-2xl overflow-hidden cursor-pointer group"
                        >
                          <div className="relative h-64 bg-gradient-to-t from-black/70 to-transparent">
                            <img
                              src={category.image}
                              alt={category.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                              <h3 className="text-xl font-bold mb-2 leading-tight">
                                {category.name}
                              </h3>
                              <p className="text-sm opacity-90">{category.count}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide indicators */}
          {totalCategorySlides > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalCategorySlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCategorySlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentCategorySlide === index
                      ? 'bg-green-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HospitalCategories;
