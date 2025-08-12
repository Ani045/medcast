import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Updated doctors data with hospital information
const doctors = [
 { 
    name: 'Dr Aditya Gupta', 
    rating: 4.8, 
    reviews: 85, 
    specialty: 'Neurosurgery',
    hospital: 'Mount Sinai Hospital',
    image: 'dr-dr-aditya-gupta.jpg'
  },
  { 

    name: 'Dr. Rajiv Yadav', 
    rating: 5.0, 
    reviews: 109, 
    specialty: 'Urology',
    hospital: 'Artemis Hospital',
    image: 'dr-dr-rajiv-yadav.jpg'
  },
  { 
    name: 'Dr. Dheeraj Batheja', 
    rating: 4.9, 
    reviews: 129, 
    specialty: 'Spine Surgery',
    hospital: 'Artemis Hospital',
    image: 'dr-dheeraj.jpeg'
  },
  { 
    name: 'Dr. I.P.S. Oberoi', 
    rating: 5.0, 
    reviews: 6, 
    specialty: 'Orthopaedics',
    hospital: 'Artemis Hospital',
    image: 'dr-dr-i-p-s-oberoi.jpg'
  },
  { 
    name: 'Dr. Vandana Soni', 
    rating: 5.0, 
    reviews: 120, 
    specialty: 'General Surgery',
    hospital: 'Artemis Hospital',
    image: 'dr-vandana.jpeg'
  }
  
 
];

const PopularDoctors = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(4);
  
  // Responsive cards per slide
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 768) {
        setCardsPerSlide(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2); // Tablet: 2 cards
      } else {
        setCardsPerSlide(4); // Desktop: 4 cards
      }
      setCurrentSlide(0); // Reset to first slide when screen size changes
    };

    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(doctors.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getGridCols = () => {
    if (cardsPerSlide === 1) return 'grid-cols-1';
    if (cardsPerSlide === 2) return 'grid-cols-2';
    return 'grid-cols-4';
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12 md:flex-row md:justify-between md:items-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 md:mb-0">Popular doctors</h2>
          
          {/* Navigation Arrows in Corner */}
          {totalSlides > 1 && (
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentSlide === 0}
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              
              <button
                onClick={nextSlide}
                className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentSlide === totalSlides - 1}
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>
          )}
        </div>
        
        <div className="relative">

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className={`grid gap-6 ${getGridCols()}`}>
                    {doctors
                      .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                      .map((doctor) => (
                        <div key={doctor.name} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center border border-gray-100">
                          <div className="relative mb-4">
                            <img 
                              src={doctor.image} 
                              alt={doctor.name}
                              className="w-20 h-20 rounded-full mx-auto object-contain border-2 border-gray-100"
                            />
                          </div>
                          <h3 className="font-bold text-lg text-gray-900 mb-2">{doctor.name}</h3>
                          <p className="text-gray-600 text-sm mb-1">{doctor.specialty}</p>
                          <p className="text-gray-500 text-xs mb-3">{doctor.hospital}</p>
                          <div className="flex items-center justify-center space-x-1 mb-4">
                            <div className="flex">
                              {[...Array(Math.floor(doctor.rating))].map((_, i) => (
                                <Star key={i} size={16} className="text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <span className="text-sm font-semibold text-gray-900">{doctor.rating}</span>
                            <span className="text-sm text-gray-500">({doctor.reviews} reviews)</span>
                          </div>
                          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                            View Profile
                          </button>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default PopularDoctors;