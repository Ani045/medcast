import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, X, MapPin, Calendar, Clock, DollarSign } from 'lucide-react';

// Patient stories data
const patientStories = [
  {
    id: 2,
    name: 'Tsegaye Bekele',
    age: 34,
    country: 'Ethiopia',
    treatment: 'Orthopedic',
    treatmentCategory: 'orthopedic',
    procedure: 'Spinal Surgery',
    rating: 5,
    date: 'Nov 22, 2024',
    clinic: 'Artemis Hospital',
    location: 'Gurgaon, India',
    story: "I suffered a severe spinal injury in a car accident in Addis Ababa. Local doctors said I might never walk again. My family found Medcasts online and they helped us connect with Artemis Hospital's Orthopedics department[1][3]. Dr. S.K. Rajan performed a complex spinal fusion surgery using advanced robotic assistance. The neurosurgery and orthopedic teams worked together for 8 hours to repair my spine. Today, 4 months later, I'm walking without assistance and even returned to my job as a teacher. The physiotherapy team helped me regain strength step by step. Medcasts didn't just find me a hospital; they found me hope when all seemed lost.",
    beforeAfter: true,
    image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
    recoveryTime: '12 weeks',
    savings: '$85,000',
    activeTime: 'Active 3 hours ago'
  },
  {
    id: 3,
    name: 'Sarah MacKenzie',
    age: 41,
    country: 'Canada',
    treatment: 'Oncology',
    treatmentCategory: 'oncology',
    procedure: 'Breast Cancer Treatment',
    rating: 5,
    date: 'Oct 15, 2024',
    clinic: 'Artemis Hospital',
    location: 'Gurgaon, India',
    story: "When I was diagnosed with aggressive breast cancer in Toronto, the waiting time for treatment was 8 weeks - too long for my condition. A friend suggested Medcasts for medical tourism to India. Artemis Hospital's Cancer Institute[1][3] under Dr. Vinod Raina was phenomenal. They started my chemotherapy within 48 hours of arrival using the latest targeted therapy protocols and immunotherapy. The nursing staff was compassionate, and they even arranged for a translator to help my husband. After 6 months of comprehensive cancer treatment, I'm now cancer-free. Medcasts made the entire process seamless, and the cost was 70% less than what I would have paid privately in Canada.",
    beforeAfter: false,
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
    recoveryTime: '16 weeks',
    savings: 'CAD 95,000',
    activeTime: 'Active 6 hours ago'
  },
  {
    id: 4,
    name: 'Grace Wanjiku',
    age: 28,
    country: 'Kenya',
    treatment: 'Plastic Surgery',
    treatmentCategory: 'plastic-surgery',
    procedure: 'Reconstructive Facial Surgery',
    rating: 5,
    date: 'Sep 20, 2024',
    clinic: 'Artemis Hospital',
    location: 'Gurgaon, India',
    story: "I was born with a facial deformity that affected my confidence and speech. Plastic surgery facilities in Kenya were limited and expensive. We chose Artemis Hospital's Plastic Surgery department through Medcasts after extensive research. Dr. Ajaya Kashyap performed multiple reconstructive surgeries over 4 months to completely transform my face. The results are miraculous - I look perfectly normal and can speak clearly now. The cosmetic surgery team was amazing, making the hospital stay comfortable. The speech therapy helped me develop confidence. Today, I'm working as a radio presenter, something I never thought possible. Medcasts helped me achieve results better than we ever imagined.",
    beforeAfter: true,
    image: 'https://images.pexels.com/photos/5327587/pexels-photo-5327587.jpeg?auto=compress&cs=tinysrgb&w=400',
    recoveryTime: '8 weeks',
    savings: 'KES 900,000',
    activeTime: 'Active 2 days ago'
  },
  {
    id: 6,
    name: 'Dawit Gebremedhin',
    age: 45,
    country: 'Ethiopia',
    treatment: 'Cardiac',
    treatmentCategory: 'cardiac',
    procedure: 'Bypass Surgery',
    rating: 5,
    date: 'Jul 30, 2024',
    clinic: 'Fortis Hospital',
    location: 'Delhi, India',
    story: "I had severe chest pain and was diagnosed with blocked arteries in Addis Ababa. The cardiologists said I needed immediate bypass surgery, which wasn't available locally. My family found Medcasts and they organized everything to bring me to India. At Fortis Escorts Heart Institute[7], Dr. Z.S. Meharwal performed a quadruple bypass surgery. The cardiac team was world-class, and they saved my life. During recovery, the nurses took special care to ensure I had Ethiopian coffee and injera. Six months later, my heart is stronger than ever. Medcasts didn't just connect me to great doctors; they gave me hope and a second chance at life.",
    beforeAfter: true,
    image: 'https://images.pexels.com/photos/5327924/pexels-photo-5327924.jpeg?auto=compress&cs=tinysrgb&w=400',
    recoveryTime: '10 weeks',
    savings: '$75,000',
    activeTime: 'Active 4 days ago'
  },
  {
    id: 7,
    name: 'Catherine Nyong',
    age: 38,
    country: 'Kenya',
    treatment: 'Neurology',
    treatmentCategory: 'neurology',
    procedure: 'Brain Tumor Removal',
    rating: 5,
    date: 'May 25, 2024',
    clinic: 'Artemis Hospital',
    location: 'Gurgaon, India',
    story: "When I started having severe headaches and vision problems in Nairobi, an MRI revealed a brain tumor. Neurosurgery facilities in Kenya couldn't handle such a complex case. My family was devastated until we learned about Artemis Hospital's Neurology department[1][3] through Medcasts. Dr. Aditya Gupta performed a 12-hour surgery to remove the tumor completely while preserving all my brain functions. The precision and skill were remarkable using advanced neuro-navigation technology. Today, 9 months later, I'm completely healthy and back to my job as a university lecturer. The tumor was benign, and I have no lasting effects. Medcasts gave me access to world-class neurological care and a second chance at life.",
    beforeAfter: true,
    image: 'https://images.pexels.com/photos/5327586/pexels-photo-5327586.jpeg?auto=compress&cs=tinysrgb&w=400',
    recoveryTime: '8 weeks',
    savings: 'KES 1,200,000',
    activeTime: 'Active 3 days ago'
  },
  {
    id: 11,
    name: 'Robert Thompson',
    age: 62,
    country: 'Canada',
    treatment: 'Dental',
    treatmentCategory: 'dental',
    procedure: 'Dental Implants',
    rating: 5,
    date: 'Jan 15, 2024',
    clinic: 'Medanta Hospital',
    location: 'Gurgaon, India',
    story: "I lost most of my teeth due to periodontal disease and was facing a lifetime of dentures. Dental implant costs in Canada were prohibitively expensive - over $80,000 for full mouth restoration. Through Medcasts, I discovered Medanta Hospital's advanced dental department. Dr. Ankita Gupta used cutting-edge technology including 3D imaging and computer-guided implant placement to give me a complete set of dental implants. The precision was remarkable, and the recovery was much faster than expected. Six months later, I can eat all my favorite foods again and smile with confidence. The total cost was only $12,000, and the quality rivals anything available in North America.",
    beforeAfter: true,
    image: 'https://images.pexels.com/photos/5327582/pexels-photo-5327582.jpeg?auto=compress&cs=tinysrgb&w=400',
    recoveryTime: '4 weeks',
    savings: 'CAD 68,000',
    activeTime: 'Active 3 weeks ago'
  }
 
];

const treatmentTags = ['All', 'Cardiac', 'Orthopedic', 'Oncology', 'Plastic Surgery', 'Dental', 'Neurology'];

const PatientStoriesSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [cardsPerSlide, setCardsPerSlide] = useState<number>(4);
  const [selectedPatient, setSelectedPatient] = useState<typeof patientStories[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<string>('All');

  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 768) {
        setCardsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2);
      } else if (window.innerWidth < 1280) {
        setCardsPerSlide(3);
      } else {
        setCardsPerSlide(4);
      }
      setCurrentSlide(0);
    };
    
    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  const filteredPatients = patientStories.filter(patient => {
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      patient.name.toLowerCase().includes(search) ||
      patient.country.toLowerCase().includes(search) ||
      patient.location.toLowerCase().includes(search);
    const matchesFilter = activeFilter === 'All' || patient.treatment === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const totalSlides = Math.max(1, Math.ceil(filteredPatients.length / cardsPerSlide));

  // Fixed navigation functions
  const nextSlide = () => {
    setCurrentSlide(prev => {
      const next = prev + 1;
      return next >= totalSlides ? 0 : next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide(prev => {
      const previous = prev - 1;
      return previous < 0 ? totalSlides - 1 : previous;
    });
  };

  const getGridCols = () => {
    switch (cardsPerSlide) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 sm:grid-cols-2';
      case 3: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
      default: return 'grid-cols-4';
    }
  };

  const openModal = (patient: typeof patientStories[0]) => {
    setSelectedPatient(patient);
  };

  const closeModal = () => {
    setSelectedPatient(null);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div className="mb-6 lg:mb-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Real Recovery Stories from Real Patients
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Connect with patients who have transformed their lives through quality medical care abroad. These are their authentic journeys of healing and hope.
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:flex-shrink-0">
              <div className="w-full sm:w-80">
                <input
                  type="text"
                  placeholder="Search by patient name, country, or treatment location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors font-semibold whitespace-nowrap">
                Search Stories
              </button>
            </div>
          </div>
        </div>

        {/* Treatment Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {treatmentTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setActiveFilter(tag);
                setCurrentSlide(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === tag
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Navigation and Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute right-16 -top-2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 -top-2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 z-10"
                aria-label="Next slide"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </>
          )}

          {/* Fixed Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
                width: `${totalSlides * 100}%`
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const startIndex = slideIndex * cardsPerSlide;
                const endIndex = Math.min(startIndex + cardsPerSlide, filteredPatients.length);
                const slidePatients = filteredPatients.slice(startIndex, endIndex);
                
                return (
                  <div 
                    key={slideIndex} 
                    className="flex-shrink-0"
                    style={{ width: `${100 / totalSlides}%` }}
                  >
                    <div className={`grid gap-6 ${getGridCols()} px-2`}>
                      {slidePatients.map((patient) => (
                        <div
                          key={patient.id}
                          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                          onClick={() => openModal(patient)}
                        >
                          {/* Patient Image */}
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={patient.image}
                              alt={patient.name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-3 left-3 bg-white bg-opacity-90 rounded-full px-3 py-1">
                              <span className="text-xs text-gray-600 flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                {patient.activeTime}
                              </span>
                            </div>
                          </div>

                          {/* Card Content */}
                          <div className="p-6">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">{patient.name}</h3>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                              {patient.story.substring(0, 120)}...
                            </p>

                            {/* Treatment and Location */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                                {patient.treatment}
                              </span>
                              <span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-full">
                                {patient.location}
                              </span>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-sm font-medium text-gray-900">{patient.country}</div>
                                <div className="text-xs text-gray-500">{patient.location}</div>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openModal(patient);
                                }}
                                className="text-green-600 text-sm font-medium hover:text-green-700 transition-colors"
                              >
                                Read more
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Slide Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-green-600 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Modal */}
        {selectedPatient && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedPatient.image}
                    alt={selectedPatient.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedPatient.name}</h3>
                    <p className="text-sm text-gray-600">
                      Age {selectedPatient.age} • {selectedPatient.country}
                    </p>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(selectedPatient.rating)].map((_, i) => (
                          <Star key={i} size={14} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-green-600 ml-2">✓ Verified Patient</span>
                    </div>
                  </div>
                </div>
                <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Close modal">
                  <X size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Treatment Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <MapPin size={16} className="text-gray-600 mr-2" />
                      <span className="text-sm font-medium text-gray-900">Treatment Location</span>
                    </div>
                    <p className="text-sm text-gray-600">{selectedPatient.clinic}</p>
                    <p className="text-xs text-gray-500">{selectedPatient.location}</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Calendar size={16} className="text-gray-600 mr-2" />
                      <span className="text-sm font-medium text-gray-900">Procedure</span>
                    </div>
                    <p className="text-sm text-gray-600">{selectedPatient.procedure}</p>
                    <p className="text-xs text-gray-500">{selectedPatient.date}</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Clock size={16} className="text-gray-600 mr-2" />
                      <span className="text-sm font-medium text-gray-900">Recovery Time</span>
                    </div>
                    <p className="text-sm text-green-600 font-medium">{selectedPatient.recoveryTime}</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <DollarSign size={16} className="text-gray-600 mr-2" />
                      <span className="text-sm font-medium text-gray-900">Savings</span>
                    </div>
                    <p className="text-sm text-green-600 font-medium">{selectedPatient.savings}</p>
                  </div>
                </div>

                {/* Full Story */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Recovery Story</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedPatient.story}</p>
                </div>

                {/* Treatment Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      selectedPatient.treatment === 'Cardiac'
                        ? 'bg-red-50 text-red-700'
                        : selectedPatient.treatment === 'Orthopedic'
                        ? 'bg-blue-50 text-blue-700'
                        : selectedPatient.treatment === 'Oncology'
                        ? 'bg-purple-50 text-purple-700'
                        : selectedPatient.treatment === 'Plastic Surgery'
                        ? 'bg-pink-50 text-pink-700'
                        : selectedPatient.treatment === 'Dental'
                        ? 'bg-cyan-50 text-cyan-700'
                        : 'bg-green-50 text-green-700'
                    }`}
                  >
                    {selectedPatient.treatment}
                  </span>

                  {selectedPatient.beforeAfter && (
                    <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                      Before/After Available
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PatientStoriesSection;
