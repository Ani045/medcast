import React, { useState, useEffect } from 'react';

// Medical empanelment organizations with logos
const medicalEmpanelments = [
  {
    id: 1,
    name: 'Joint Commission International',
    logo: 'dental.png',
    description: 'Global healthcare accreditation'
  },
  {
    id: 2,
    name: 'ISO 9001 Certified',
    logo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80',
    description: 'Quality management systems'
  },
  {
    id: 3,
    name: 'CAP Accredited',
    logo: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80',
    description: 'Laboratory excellence'
  },
  {
    id: 4,
    name: 'NABH Accredited',
    logo: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=400&q=80',
    description: 'National healthcare standards'
  },
  {
    id: 5,
    name: 'AAAHC Certified',
    logo: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&q=80',
    description: 'Ambulatory healthcare'
  },
  {
    id: 6,
    name: 'HIMSS Certified',
    logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80',
    description: 'Healthcare information systems'
  },
  {
    id: 7,
    name: 'WHO Collaborating',
    logo: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=400&q=80',
    description: 'World Health Organization'
  },
  {
    id: 8,
    name: 'ACHC Accredited',
    logo: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=400&q=80',
    description: 'Healthcare quality assurance'
  },
  {
    id: 9,
    name: 'DNV Healthcare',
    logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&q=80',
    description: 'International healthcare standards'
  },
  {
    id: 10,
    name: 'AAPL Certified',
    logo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80',
    description: 'Laboratory professionals'
  }
];

const MedicalEmpanelmentsCarousel = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(6);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2); // Mobile: 2 items
      } else if (window.innerWidth < 768) {
        setItemsPerView(3); // Small tablet: 3 items
      } else if (window.innerWidth < 1024) {
        setItemsPerView(4); // Tablet: 4 items
      } else {
        setItemsPerView(6); // Desktop: 6 items
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-moving carousel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentPosition(prev => {
          const maxPosition = medicalEmpanelments.length - itemsPerView;
          return prev >= maxPosition ? 0 : prev + 1;
        });
      }, 3000); // Move every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, itemsPerView]);

  // Duplicate items for seamless loop
  const extendedItems = [
    ...medicalEmpanelments,
    ...medicalEmpanelments.slice(0, itemsPerView)
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
      

        {/* Moving Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-linear"
            style={{ 
              transform: `translateX(-${currentPosition * (100 / itemsPerView)}%)`,
              width: `${(extendedItems.length / itemsPerView) * 100}%`
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {extendedItems.map((empanelment, index) => (
              <div 
                key={`${empanelment.id}-${index}`} 
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / extendedItems.length}%` }}
              >
                <div className="bg-white  p-8  transition-all duration-300  group cursor-pointer h-40 flex flex-col items-center justify-center">
                  {/* Logo */}
                  <div className="w-16 h-16 mb-4 overflow-hidden rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={empanelment.logo} 
                      alt={empanelment.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

   
      </div>
    </section>
  );
};

export default MedicalEmpanelmentsCarousel;