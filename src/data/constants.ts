// data/constants.ts
import { 
  Search, Phone, MapPin, Star, CheckCircle, Users, Calendar, Award, Shield, Globe, 
  HeartHandshake, UserCheck, Stethoscope, Clock, DollarSign, Heart, Quote, ArrowRight, 
  Scissors, Smile, User, Bluetooth as Tooth, Sparkles, ChevronLeft, ChevronRight, 
  Play, Building2, 
  LucideIcon,
} from 'lucide-react';

export const countries = [
  'Turkey', 'Thailand', 'Mexico', 'India', 'Germany', 'South Korea',
  'Czech Republic', 'Poland', 'Hungary', 'Spain', 'Italy', 'Lithuania',
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Japan',
  'Singapore', 'Malaysia', 'Philippines', 'Brazil', 'Argentina'
];

export const treatments = [
  'Plastic Surgery', 'Dental Treatment', 'Oncology', 'Cardiology',
  'Orthopedics', 'Ophthalmology', 'Dermatology', 'Neurology',
  'Gastroenterology', 'Endocrinology', 'Psychiatry', 'Urology',
  'Gynecology', 'Pediatrics', 'Radiology', 'Anesthesiology'
];


export const specialties = [
  {
    name: 'Plastic Surgery',
    clinics: '896 clinics',
    bgColor: 'bg-green-50',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    smallIconPlaceholder: 'PS', // Small icon in top-left
    largeBackgroundIconUrl: 'plasticesurgury.png' // Replace with your actual image path
  },
  {
    name: 'Dental Treatment', 
    clinics: '788 clinics',
    bgColor: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    smallIconPlaceholder: 'DT', // Small icon in top-left
    largeBackgroundIconUrl: 'dental.png' // Replace with your actual image path
  },
  {
    name: 'Oncology',
    clinics: '585 clinics', 
    bgColor: 'bg-red-50',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    smallIconPlaceholder: 'ON', // Small icon in top-left
    largeBackgroundIconUrl: 'oncology-new.png' // Replace with your actual image path
  },
  {
    name: 'Aesthetic Medicine and Cosmetology',
    clinics: '884 clinics',
    bgColor: 'bg-yellow-50', 
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    smallIconPlaceholder: 'AM', // Small icon in top-left
    largeBackgroundIconUrl: 'Cosmetology.png' // Replace with your actual image path
  }
];

export interface Procedure {
  name: string;
  price: string;
  note: string;
}

export interface TreatmentCategory {
  icon: LucideIcon;
  color: string;
  iconColor: string;
  borderColor: string;
  procedures: Procedure[];
}

export interface TreatmentCategories {
  [key: string]: TreatmentCategory;
}

export const treatmentCategories: TreatmentCategories = {
  'Cardiac Surgery': {
    icon: Heart,
    color: 'from-red-50 to-red-100',
    iconColor: 'text-red-500',
    borderColor: 'border-red-100',
    procedures: [
      { name: 'CABG (Heart Bypass Surgery)', price: '$5,000 – $7,000', note: 'Includes pre-op, surgery, 7-10 days stay' },
      { name: 'Angioplasty (1 Stent)', price: '$3,000 – $4,500', note: 'With stent and 3-5 day hospital stay' },
      { name: 'Valve Replacement', price: '$6,000 – $9,000', note: 'Mitral or aortic' }
    ]
  },
  'Orthopedic Procedures': {
    icon: Scissors,
    color: 'from-blue-50 to-blue-100',
    iconColor: 'text-blue-500',
    borderColor: 'border-blue-100',
    procedures: [
      { name: 'Total Knee Replacement (TKR)', price: '$4,000 – $6,000', note: 'Bilateral TKR: $7,000 – $9,000' },
      { name: 'Hip Replacement', price: '$5,000 – $7,500', note: 'Unilateral; includes implant' },
      { name: 'Spine Surgery', price: '$5,000 – $7,500', note: 'Laminectomy, Discectomy' }
    ]
  },
  'Oncology (Cancer Treatment)': {
    icon: Shield,
    color: 'from-purple-50 to-purple-100',
    iconColor: 'text-purple-500',
    borderColor: 'border-purple-100',
    procedures: [
      { name: 'Chemotherapy (per cycle)', price: '$500 – $800', note: '6–8 cycles average' },
      { name: 'Radiation Therapy (IMRT/IGRT)', price: '$3,500 – $5,500', note: '20–25 sessions' },
      { name: 'Cancer Surgery', price: '$3,000 – $6,000', note: 'Breast, GI, Head-Neck' }
    ]
  },
  'Organ Transplants': {
    icon: HeartHandshake,
    color: 'from-emerald-50 to-emerald-100',
    iconColor: 'text-emerald-500',
    borderColor: 'border-emerald-100',
    procedures: [
      { name: 'Liver Transplant', price: '$30,000 – $40,000', note: 'Includes donor workup and post-op' },
      { name: 'Kidney Transplant', price: '$13,000 – $18,000', note: 'Includes donor costs' }
    ]
  },
  'Cosmetic & Plastic Surgery': {
    icon: Sparkles,
    color: 'from-pink-50 to-pink-100',
    iconColor: 'text-pink-500',
    borderColor: 'border-pink-100',
    procedures: [
      { name: 'Rhinoplasty (Nose Job)', price: '$2,000 – $3,000', note: 'Cosmetic' },
      { name: 'Liposuction (3–4 areas)', price: '$2,500 – $4,000', note: 'General anesthesia' },
      { name: 'Breast Augmentation', price: '$3,000 – $4,500', note: 'Includes implant' },
      { name: 'Tummy Tuck (Abdominoplasty)', price: '$3,000 – $5,000', note: 'Cosmetic' }
    ]
  },
  'IVF & Fertility Treatments': {
    icon: Users,
    color: 'from-amber-50 to-amber-100',
    iconColor: 'text-amber-500',
    borderColor: 'border-amber-100',
    procedures: [
      { name: 'IVF (Basic Cycle)', price: '$2,500 – $4,000', note: 'May vary with meds' },
      { name: 'ICSI', price: '$3,000 – $4,500', note: 'Advanced IVF' },
      { name: 'Egg Freezing / Donation', price: '$3,500 – $5,000', note: 'With medications' }
    ]
  },
  'Bariatric Surgery': {
    icon: User,
    color: 'from-orange-50 to-orange-100',
    iconColor: 'text-orange-500',
    borderColor: 'border-orange-100',
    procedures: [
      { name: 'Gastric Sleeve', price: '$5,000 – $7,000', note: 'Weight loss surgery' },
      { name: 'Gastric Bypass', price: '$5,000 – $7,000', note: 'Weight loss surgery' }
    ]
  },
  'Dental Treatments': {
    icon: Smile,
    color: 'from-cyan-50 to-cyan-100',
    iconColor: 'text-cyan-500',
    borderColor: 'border-cyan-100',
    procedures: [
      { name: 'Dental Implants (per implant)', price: '$500 – $800', note: 'Nobel Biocare/Zimmer brands' },
      { name: 'Full Mouth Rehabilitation', price: '$6,000 – $9,000', note: '10–12 implants' },
      { name: 'Root Canal + Crown', price: '$150 – $300', note: 'Per tooth' }
    ]
  },
  'Ophthalmology': {
    icon: Stethoscope,
    color: 'from-indigo-50 to-indigo-100',
    iconColor: 'text-indigo-500',
    borderColor: 'border-indigo-100',
    procedures: [
      { name: 'LASIK (Both Eyes)', price: '$800 – $1,200', note: 'Blade-free available' },
      { name: 'Cataract Surgery (per eye)', price: '$600 – $1,000', note: 'Phaco/IOL' }
    ]
  },
  'Neurology & Neurosurgery': {
    icon: UserCheck,
    color: 'from-slate-50 to-slate-100',
    iconColor: 'text-slate-500',
    borderColor: 'border-slate-100',
    procedures: [
      { name: 'Brain Tumor Surgery', price: '$7,000 – $10,000', note: 'Craniotomy-based' },
      { name: 'Deep Brain Stimulation (DBS)', price: '$18,000 – $25,000', note: 'Parkinson\'s treatment' }
    ]
  },
  'Urology Treatments': {
    icon: Award,
    color: 'from-teal-50 to-teal-100',
    iconColor: 'text-teal-500',
    borderColor: 'border-teal-100',
    procedures: [
      { name: 'TURP (Prostate Surgery)', price: '$2,500 – $4,000', note: 'Minimally invasive' },
      { name: 'Kidney Stone Removal', price: '$2,000 – $3,500', note: 'PCNL/Laser depending on stone size' }
    ]
  },
  'Gastroenterology': {
    icon: Globe,
    color: 'from-green-50 to-green-100',
    iconColor: 'text-green-500',
    borderColor: 'border-green-100',
    procedures: [
      { name: 'Liver Biopsy', price: '$500 – $800', note: 'Daycare' },
      { name: 'Laparoscopic Gallbladder Surgery', price: '$2,000 – $3,000', note: 'Minimally invasive' }
    ]
  }
};

export const bestHospitalsIndia = [
    {
    name: 'Artemis Hospital',
    location: 'Gurgaon, India',
    rating: 4.5,
    specialty: 'Well-regarded for orthopaedics, cancer, and critical care',
    image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=600',
    accreditation: 'JCI Accredited'
  },
  {
    name: 'Medanta – The Medicity',
    location: 'Gurgaon, India',
    rating: 4.7,
    specialty: 'Multi-super specialty hospital known for comprehensive care',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
    accreditation: 'JCI Accredited'
  },
  {
    name: 'Indraprastha Apollo Hospital',
    location: 'New Delhi, India',
    rating: 4.9,
    specialty: 'Leading private hospital with wide range of specialties',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600',
    accreditation: 'NABH Accredited'
  },
  {
    name: 'Max Super Speciality Hospital',
    location: 'Saket, New Delhi',
    rating: 4.3,
    specialty: 'Part of Max Healthcare network with multiple facilities',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600',
    accreditation: 'JCI Accredited'
  },
  {
    name: 'Fortis Memorial Research Institute',
    location: 'Gurgaon, India',
    rating: 4.6,
    specialty: 'Major hospital network with advanced medical facilities',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600',
    accreditation: 'NABH Accredited'
  },

  {
    name: 'Sir Ganga Ram Hospital',
    location: 'New Delhi, India',
    rating: 4.4,
    specialty: 'Well-established multi-specialty hospital',
    image: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=600',
    accreditation: 'NABH Accredited'
  },
  {
    name: 'Manipal Hospital Dwarka',
    location: 'New Delhi, India',
    rating: 4.3,
    specialty: 'Part of Manipal Hospitals network',
    image: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=600',
    accreditation: 'NABH Accredited'
  },
  {
    name: 'BLK-Max Super Speciality Hospital',
    location: 'New Delhi, India',
    rating: 4.7,
    specialty: 'Known for liver transplant program and other specialties',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
    accreditation: 'JCI Accredited'
  },
  {
    name: 'Jaypee Hospital',
    location: 'Noida, India',
    rating: 4.2,
    specialty: 'Multi-specialty hospital with advanced facilities',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600',
    accreditation: 'NABH Accredited'
  },
  {
    name: 'All India Institute of Medical Sciences (AIIMS)',
    location: 'New Delhi, India',
    rating: 4.8,
    specialty: 'Premier government hospital and medical research institution',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
    accreditation: 'Government Institution'
  },
  {
    name: 'Sanar International Hospital',
    location: 'New Delhi, India',
    rating: 4.1,
    specialty: 'Modern hospital with comprehensive medical services',
    image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=600',
    accreditation: 'NABH Accredited'
  }
];





export const certifications = [
  { name: 'ESMO', color: 'text-green-600' },
  { name: 'ECI', color: 'text-blue-600' },
  { name: 'ISAPS', color: 'text-yellow-600' },
  { name: 'ISO', color: 'text-blue-500' },
  { name: 'JCI', color: 'text-yellow-500' },
  { name: 'EFQM', color: 'text-blue-700' },
  { name: 'ADA', color: 'text-green-700' },
  { name: 'DKG', color: 'text-green-800' }
];

export const medicalImages = [
  'Artimes-hospital.png',
  'Apollo-hospital.png',
  'Max-hospital.png',
  'Medanta hospital.png',
  
];