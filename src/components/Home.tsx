// components/Home.tsx
import React, { useState } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import TopSpecialties from './TopSpecialties';
import PopularProcedures from './PopularProcedures';
import PopularDoctors from './PopularDoctors';
import WhyChooseUs from './WhyChooseUs';
import PatientReviews from './PatientReviews';
import TrustSection from './TrustSection';
import Footer from './Footer';
import HospitalCategories from './HospitalCategories';
import MedicalHeroSection from './MedicalHeroSection';

const Home: React.FC = () => {
  // State management for the home page
  const [activeDoctorTab, setActiveDoctorTab] = useState('Plastic Surgery');
  const [activeReviewFilter, setActiveReviewFilter] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [currentHospitalSlide, setCurrentHospitalSlide] = useState(0);
  const [activeTreatmentTab, setActiveTreatmentTab] = useState('Cardiac Surgery');
   const [currentCategorySlide, setCurrentCategorySlide] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <HeroSection 
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedTreatment={selectedTreatment}
        setSelectedTreatment={setSelectedTreatment}
      />
      
      <TopSpecialties />
      
       <PopularProcedures
        activeTreatmentTab={activeTreatmentTab}
        setActiveTreatmentTab={setActiveTreatmentTab}
      />
    

<MedicalHeroSection></MedicalHeroSection>
<HospitalCategories
  currentCategorySlide={currentCategorySlide}
  setCurrentCategorySlide={setCurrentCategorySlide}
/>


      
      <PopularDoctors
      />
      
      
   
      <PatientReviews
      />
      
      
      
      <Footer />
    </div>
  );
};

export default Home;