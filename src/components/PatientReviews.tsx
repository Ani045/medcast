import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, X, MapPin, Calendar, Clock, DollarSign } from 'lucide-react';

// Patient stories data
const patientStories = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    age: 45,
    country: 'United States',
    treatment: 'Cardiac',
    procedure: 'Heart Valve Replacement',
    rating: 5,
    date: 'Dec 15, 2024',
    clinic: 'Istanbul Heart Center',
    location: 'Turkey',
    story: "Six months ago, I was told I needed urgent heart valve replacement. The costs in the US were overwhelming - over $150,000. Through Medcasts, I found Istanbul Heart Center. Dr. Mehmet and his team were incredible. The surgery was successful, and I'm now living a completely normal life. I can climb stairs without getting breathless, play with my grandchildren, and feel like I have my life back. The total cost was less than $25,000 including travel. Best decision I ever made.",
    beforeAfter: true,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    recoveryTime: '6 weeks',
    savings: '$125,000',
    activeTime: 'Active 2 hours ago'
  },
  {
    id: 2,
    name: 'Michael Chen',
    age: 38,
    country: 'Canada',
    treatment: 'Orthopedic',
    procedure: 'Knee Replacement Surgery',
    rating: 5,
    date: 'Nov 8, 2024',
    clinic: 'Bangkok Orthopedic Hospital',
    location: 'Thailand',
    story: "I'm a construction worker who suffered from severe knee pain for 3 years. Walking became torture, and I couldn't work properly. The waiting list in Canada was 18 months. I found Bangkok Orthopedic Hospital through Medcasts. Within 2 weeks, I was in Thailand getting my surgery. Today, 4 months later, I'm back to work, pain-free, and even started jogging again. The physiotherapy team was amazing, and the hospital felt like a 5-star hotel. I saved 2 years of pain and $40,000.",
    beforeAfter: false,
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    recoveryTime: '8 weeks',
    savings: '$40,000',
    activeTime: 'Active 5 hours ago'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    age: 52,
    country: 'Spain',
    treatment: 'Oncology',
    procedure: 'Breast Cancer Treatment',
    rating: 5,
    date: 'Oct 22, 2024',
    clinic: 'Memorial Cancer Center',
    location: 'Turkey',
    story: "When I was diagnosed with breast cancer, I was devastated. The treatment options in Spain had long waiting times. Through Medcasts, I connected with Memorial Cancer Center in Turkey. The oncology team was world-class - they used the latest immunotherapy treatments. Dr. Ayşe held my hand through every step. Today, I'm cancer-free for 6 months. The care wasn't just medical; it was emotional support that helped me heal completely. I'm grateful every single day.",
    beforeAfter: false,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    recoveryTime: '12 weeks',
    savings: '€35,000',
    activeTime: 'Active 1 day ago'
  },
  {
    id: 4,
    name: 'James Wilson',
    age: 29,
    country: 'United Kingdom',
    treatment: 'Plastic Surgery',
    procedure: 'Rhinoplasty',
    rating: 5,
    date: 'Sep 30, 2024',
    clinic: 'Istanbul Aesthetic Center',
    location: 'Turkey',
    story: "I was always self-conscious about my nose. It affected my confidence in dating, job interviews, everything. After researching for months, I chose Istanbul Aesthetic Center through Medcasts. Dr. Erkan is an artist - my nose looks completely natural, like I was born with it. The recovery was smooth, and the results exceeded my expectations. Six months later, I feel like a new person. My confidence has skyrocketed, and I finally love what I see in the mirror.",
    beforeAfter: true,
    image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400',
    recoveryTime: '2 weeks',
    savings: '£8,000',
    activeTime: 'Active 3 days ago'
  },
  {
    id: 5,
    name: 'Maria Santos',
    age: 67,
    country: 'Brazil',
    treatment: 'Orthopedic',
    procedure: 'Hip Replacement',
    rating: 5,
    date: 'Aug 18, 2024',
    clinic: 'Delhi Bone & Joint Hospital',
    location: 'India',
    story: "At 67, hip pain made every day a struggle. Simple tasks like cooking or gardening became impossible. My daughter found Medcasts and helped me connect with Delhi Bone & Joint Hospital. The doctors were so caring and explained everything in Portuguese through a translator. The surgery was minimally invasive, and I was walking the next day! Now I'm back to dancing salsa and taking care of my garden. Age is just a number when you have the right medical care.",
    beforeAfter: false,
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    recoveryTime: '6 weeks',
    savings: 'R$45,000',
    activeTime: 'Active 1 week ago'
  },
  {
    id: 6,
    name: 'Ahmed Hassan',
    age: 41,
    country: 'UAE',
    treatment: 'Dental',
    procedure: 'Full Mouth Reconstruction',
    rating: 5,
    date: 'Jul 25, 2024',
    clinic: 'Bangkok Dental Clinic',
    location: 'Thailand',
    story: "Years of neglecting my dental health left me with severe problems. I was embarrassed to smile or speak in public. The quote in Dubai was astronomical. Bangkok Dental Clinic through Medcasts changed my life. Over 3 visits spanning 6 months, they completely reconstructed my smile. The attention to detail was incredible - they matched my new teeth perfectly to my face. Now I smile confidently in every meeting and photo. My wife says I look 10 years younger!",
    beforeAfter: true,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    recoveryTime: '4 weeks',
    savings: 'AED 85,000',
    activeTime: 'Active 2 weeks ago'
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
        setCardsPerSlide(2);
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2);
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

  const totalSlides = Math.ceil(filteredPatients.length / cardsPerSlide);

  // Updated nextSlide and prevSlide to avoid TS error by calculating before calling setter
  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % totalSlides;
    setCurrentSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    setCurrentSlide(prevIndex);
  };

  const getGridCols = () => {
    if (cardsPerSlide === 2) return 'grid-cols-1 sm:grid-cols-2';
    return 'grid-cols-4';
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
              onClick={() => setActiveFilter(tag)}
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
                className="absolute right-16 top-0 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed z-10"
                disabled={currentSlide === 0}
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-0 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed z-10"
                disabled={currentSlide === totalSlides - 1}
                aria-label="Next slide"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </>
          )}

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${totalSlides * 100}%` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="flex-shrink-0" style={{ width: `${100 / totalSlides}%` }}>
                  <div className={`grid gap-6 ${getGridCols()}`}>
                    {filteredPatients
                      .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                      .map((patient) => (
                        <div
                          key={patient.id}
                          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                        >
                          {/* Patient Image */}
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={patient.image}
                              alt={patient.name}
                              className="w-full h-full object-cover"
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
                                onClick={() => openModal(patient)}
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
              ))}
            </div>
          </div>
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
