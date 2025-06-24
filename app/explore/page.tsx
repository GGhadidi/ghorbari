'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';

// --- Reusable Icon Components ---
const HouseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const FilterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
    </svg>
);

// --- Reusable Button Component ---
const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => (
    <button
        className={`btn btn-primary ${className}`}
        {...props}
    >
        {children}
    </button>
);

// --- Header & Footer ---
const Header = () => {
    const [show, setShow] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY.current && window.scrollY > 10) {
                setShow(false);
            } else {
                setShow(true);
            }
            lastScrollY.current = window.scrollY;
        };

        window.addEventListener('scroll', controlNavbar);
        return () => {
           window.removeEventListener('scroll', controlNavbar);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl transition-transform duration-1000 ease-in-out ${show ? 'translate-y-0' : '-translate-y-32'}`}>
                <div className="container mx-auto px-4 sm:px-6 py-4 bg-black rounded-full shadow-2xl ring-1 ring-white/10">
                    <div className="flex justify-between items-center">
                        <a href="/" className="flex items-center space-x-2">
                            <img src="/logo.png" alt="GharBari logo" className="navbar-logo w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                            <span className="text-xl sm:text-2xl font-bold text-white font-serif">GharBari</span>
                        </a>
                        
                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
                            <a href="/" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">Home</a>
                            <a href="/explore" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">Explore</a>
                            <a href="/list-property" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">List Property</a>
                            <a href="/about" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">About</a>
                            <a href="#" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">Contact</a>
                        </nav>
                        
                        <div className="flex items-center space-x-3 sm:space-x-4">
                            <a href="/login" className="navbar-link hidden sm:block text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 font-medium text-sm lg:text-base">Login</a>
                            
                            {/* Mobile Menu Button */}
                            <button
                                onClick={toggleMobileMenu}
                                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                                aria-label="Toggle mobile menu"
                            >
                                <MenuIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Menu */}
            <div className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/95" onClick={closeMobileMenu}></div>
                <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-black shadow-2xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center p-6 border-b border-white/20">
                            <span className="text-xl font-bold text-white font-serif">Menu</span>
                            <button
                                onClick={closeMobileMenu}
                                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                                aria-label="Close mobile menu"
                            >
                                <CloseIcon className="w-6 h-6" />
                            </button>
                        </div>
                        
                        <nav className="flex-1 p-6">
                            <div className="space-y-6">
                                <a href="/" onClick={closeMobileMenu} className="block text-white hover:text-[--color-secondary-accent] transition-colors text-lg py-3 border-b border-white/10">Home</a>
                                <a href="/explore" onClick={closeMobileMenu} className="block text-white hover:text-[--color-secondary-accent] transition-colors text-lg py-3 border-b border-white/10">Explore</a>
                                <a href="/list-property" onClick={closeMobileMenu} className="block text-white hover:text-[--color-secondary-accent] transition-colors text-lg py-3 border-b border-white/10">List Property</a>
                                <a href="/about" onClick={closeMobileMenu} className="block text-white hover:text-[--color-secondary-accent] transition-colors text-lg py-3 border-b border-white/10">About</a>
                                <a href="#" onClick={closeMobileMenu} className="block text-white hover:text-[--color-secondary-accent] transition-colors text-lg py-3 border-b border-white/10">Contact</a>
                            </div>
                        </nav>
                        
                        <div className="p-6 border-t border-white/20">
                            <a href="/login" onClick={closeMobileMenu} className="btn btn-primary w-full justify-center">
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const Footer = () => (
     <footer className="w-full bg-black text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
                <h3 className="text-lg font-bold font-serif mb-4 text-white">GharBari</h3>
                <p className="text-sm text-gray-400">Your trusted partner in finding the perfect property.</p>
            </div>
            <div>
                <h3 className="text-lg font-bold font-serif mb-4 text-white">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                    <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                    <li><a href="/explore" className="hover:text-white transition-colors">Explore Properties</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-bold font-serif mb-4 text-white">Contact Info</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li>Dhaka, Bangladesh</li>
                    <li>contact@gharbari.com</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-bold font-serif mb-4 text-white">Newsletter</h3>
                <div className="flex flex-col sm:flex-row gap-2">
                    <input 
                        type="email" 
                        placeholder="Your email" 
                        className="p-3 rounded-lg sm:rounded-l-lg sm:rounded-r-none w-full bg-gray-800 border-gray-700 focus:ring-2 focus:ring-teal-500 text-sm"
                    />
                    <button className="p-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg bg-teal-600 text-white font-bold text-sm whitespace-nowrap">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
        <div className="mt-12 sm:mt-16 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; GharBari 2025. All rights reserved.</p>
        </div>
    </footer>
);


// --- Mock Data ---
const allListings = [
  { id: 1, title: 'Spacious Apartment in Gulshan', location: 'Dhaka', price: 45000, area: 1200, type: 'Apartment', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=100&w=4000&auto=format&fit=crop&ar=4:3', bedrooms: 3, bathrooms: 2, furnished: true, verified: true, division: 'Dhaka', district: 'Dhaka', upazila: 'Gulshan' },
  { id: 2, title: 'Modern Office in Chittagong', location: 'Chittagong', price: 80000, area: 2000, type: 'Office', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=100&w=4000&auto=format&fit=crop&ar=4:3', bedrooms: 0, bathrooms: 2, furnished: false, verified: true, division: 'Chittagong', district: 'Chittagong', upazila: 'Panchlaish' },
  { id: 3, title: 'Cozy House in Sylhet', location: 'Sylhet', price: 30000, area: 1500, type: 'House', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=100&w=4000&auto=format&fit=crop&ar=4:3', bedrooms: 4, bathrooms: 3, furnished: true, verified: false, division: 'Sylhet', district: 'Sylhet', upazila: 'Sylhet Sadar' },
  { id: 4, title: 'Retail Shop in Barisal', location: 'Barisal', price: 25000, area: 800, type: 'Shop', image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=100&w=4000&auto=format&fit=crop&ar=4:3', bedrooms: 0, bathrooms: 1, furnished: false, verified: true, division: 'Barisal', district: 'Barisal', upazila: 'Barisal Sadar' },
  { id: 5, title: 'Luxury Apartment in Dhanmondi', location: 'Dhaka', price: 120000, area: 2500, type: 'Apartment', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=100&w=4000&auto=format&fit=crop&ar=4:3', bedrooms: 5, bathrooms: 4, furnished: true, verified: true, division: 'Dhaka', district: 'Dhaka', upazila: 'Dhanmondi' },
  { id: 6, title: 'Quiet House in Rajshahi', location: 'Rajshahi', price: 28000, area: 1300, type: 'House', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=100&w=4000&auto=format&fit=crop&ar=4:3', bedrooms: 3, bathrooms: 2, furnished: false, verified: false, division: 'Rajshahi', district: 'Rajshahi', upazila: 'Rajshahi Sadar' },
  { id: 7, title: 'Commercial Space in Cumilla', location: 'Cumilla', price: 60000, area: 1800, type: 'Office', image: 'https://images.unsplash.com/photo-1596541248883-0476442fea6a?q=100&w=4000&auto=format&fit=crop&ar=4:3', bedrooms: 0, bathrooms: 1, furnished: true, verified: true, division: 'Chittagong', district: 'Cumilla', upazila: 'Cumilla Sadar' },
  { id: 8, title: 'Top Floor Apt in Mirpur', location: 'Dhaka', price: 55000, area: 1100, type: 'Apartment', image: 'https://images.unsplash.com/photo-1493809842344-ab5500e33820?q=100&w=4000&auto=format&fit=crop&ar=4:3', bedrooms: 2, bathrooms: 2, furnished: true, verified: true, division: 'Dhaka', district: 'Dhaka', upazila: 'Mirpur' },
];

const locations = {
  "Barisal": {
    "Barguna": ["Amtali", "Taltali", "Barguna Sadar", "Bamna", "Betagi", "Patharghata"],
    "Barisal": ["Muladi", "Babuganj", "Agailjhara", "Barisal Sadar", "Bakerganj", "Banaripara", "Gaurnadi", "Hizla", "Mehendiganj", "Wazirpur"],
    "Bhola": ["Bhola Sadar", "Burhanuddin", "Char Fasson", "Daulatkhan", "Lalmohan", "Manpura", "Tazumuddin"],
    "Jhalokati": ["Jhalokati Sadar", "Kathalia", "Nalchity", "Rajapur"],
    "Patuakhali": ["Bauphal", "Dashmina", "Galachipa", "Kalapara", "Mirzaganj", "Patuakhali Sadar", "Rangabali", "Dumki"],
    "Pirojpur": ["Bhandaria", "Kaukhali", "Mathbaria", "Nazirpur", "Pirojpur Sadar", "Nesarabad (Swarupkathi)", "Zianagar"]
  },
  "Chittagong": {
    "Bandarban": ["Bandarban Sadar", "Thanchi", "Lama", "Naikhongchhari", "Ali Kadam", "Rowangchhari", "Ruma"],
    "Brahmanbaria": ["Brahmanbaria Sadar", "Ashuganj", "Nasirnagar", "Nabinagar", "Sarail", "Shahbazpur Town", "Kasba", "Akhaura", "Bancharampur", "Bijoynagar"],
    "Chandpur": ["Chandpur Sadar", "Faridganj", "Haimchar", "Haziganj", "Kachua", "Matlab Dakshin", "Matlab Uttar", "Shahrasti"],
    "Chittagong": ["Anwara", "Banshkhali", "Boalkhali", "Chandanaish", "Fatikchhari", "Hathazari", "Lohagara", "Mirsharai", "Patiya", "Rangunia", "Raozan", "Sandwip", "Satkania", "Sitakunda"],
    "Comilla": ["Barura", "Brahmanpara", "Burichang", "Chandina", "Chauddagram", "Daudkandi", "Debidwar", "Homna", "Laksam", "Monohorgonj", "Meghna", "Muradnagar", "Nangalkot", "Comilla Sadar", "Titas"],
    "Cox's Bazar": ["Chakaria", "Cox's Bazar Sadar", "Kutubdia", "Maheshkhali", "Ramu", "Teknaf", "Ukhia", "Pekua"],
    "Feni": ["Feni Sadar", "Chhagalnaiya", "Daganbhuiyan", "Parshuram", "Fulgazi", "Sonagazi"],
    "Khagrachhari": ["Khagrachhari Sadar", "Dighinala", "Panchhari", "Mahalchhari", "Matiranga", "Ramgarh", "Manikchhari", "Lakshmichhari"],
    "Lakshmipur": ["Lakshmipur Sadar", "Raipur", "Ramganj", "Ramgati", "Kamalnagar"],
    "Noakhali": ["Noakhali Sadar", "Begumganj", "Chatkhil", "Companyganj", "Hatiya", "Senbagh", "Subarnachar", "Kabirhat"],
    "Rangamati": ["Rangamati Sadar", "Belaichhari", "Bagaichhari", "Barkal", "Juraichhari", "Rajasthali", "Kaptai", "Langadu", "Naniarchar", "Kaukhali"]
  },
  "Dhaka": {
    "Dhaka": ["Dhamrai", "Dohar", "Keraniganj", "Nawabganj", "Savar"],
    "Faridpur": ["Faridpur Sadar", "Boalmari", "Alfadanga", "Charbhadrasan", "Bhanga", "Madhukhali", "Nagarkanda", "Sadarpur", "Saltha"],
    "Gazipur": ["Gazipur Sadar", "Kaliakair", "Kapasia", "Sreepur", "Kaliganj"],
    "Gopalganj": ["Gopalganj Sadar", "Kashiani", "Kotalipara", "Muksudpur", "Tungipara"],
    "Jamalpur": ["Jamalpur Sadar", "Baksiganj", "Dewanganj", "Islampur", "Madarganj", "Melandaha", "Sarishabari"],
    "Kishoreganj": ["Astagram", "Bajitpur", "Bhairab", "Hossainpur", "Itna", "Karimganj", "Katiadi", "Kishoreganj Sadar", "Kuliarchar", "Mithamain", "Nikli", "Pakundia", "Tarail"],
    "Madaripur": ["Madaripur Sadar", "Kalkini", "Rajoir", "Shibchar"],
    "Manikganj": ["Manikganj Sadar", "Daulatpur", "Ghior", "Harirampur", "Saturia", "Shivalaya", "Singair"],
    "Munshiganj": ["Munshiganj Sadar", "Gazaria", "Lohajang", "Sirajdikhan", "Sreenagar", "Tongibari"],
    "Mymensingh": ["Bhaluka", "Dhobaura", "Fulbaria", "Gaffargaon", "Gauripur", "Haluaghat", "Ishwarganj", "Mymensingh Sadar", "Muktagachha", "Nandail", "Phulpur", "Trishal", "Tara Khanda"],
    "Narayanganj": ["Araihazar", "Bandar", "Narayanganj Sadar", "Rupganj", "Sonargaon"],
    "Narsingdi": ["Narsingdi Sadar", "Belabo", "Monohardi", "Palash", "Raipura", "Shibpur"],
    "Netrokona": ["Atpara", "Barhatta", "Durgapur", "Khaliajuri", "Kalmakanda", "Kendua", "Madan", "Mohanganj", "Netrokona Sadar", "Purbadhala"],
    "Rajbari": ["Rajbari Sadar", "Baliakandi", "Goalandaghat", "Pangsha", "Kalukhali"],
    "Shariatpur": ["Shariatpur Sadar", "Bhedarganj", "Damudya", "Gosairhat", "Naria", "Zajira"],
    "Sherpur": ["Jhenaigati", "Nakla", "Nalitabari", "Sherpur Sadar", "Sreebardi"],
    "Tangail": ["Gopalpur", "Basail", "Bhuapur", "Delduar", "Ghatail", "Kalihati", "Madhupur", "Mirzapur", "Nagarpur", "Sakhipur", "Tangail Sadar", "Dhanbari"]
  },
  "Khulna": {
    "Bagerhat": ["Bagerhat Sadar", "Chitalmari", "Fakirhat", "Kachua", "Mollahat", "Mongla", "Morrelganj", "Rampal", "Sarankhola"],
    "Chuadanga": ["Chuadanga Sadar", "Alamdanga", "Damurhuda", "Jibannagar"],
    "Jessore": ["Abhaynagar", "Bagherpara", "Chaugachha", "Jessore Sadar", "Jhikargachha", "Keshabpur", "Manirampur", "Sharsha"],
    "Jhenaidah": ["Jhenaidah Sadar", "Harinakunda", "Kaliganj", "Kotchandpur", "Maheshpur", "Shailkupa"],
    "Khulna": ["Batiaghata", "Dacope", "Dighalia", "Dumuria", "Koyra", "Paikgachha", "Phultala", "Rupsha", "Terokhada"],
    "Kushtia": ["Kushtia Sadar", "Bheramara", "Daulatpur", "Khoksa", "Kumarkhali", "Mirpur"],
    "Magura": ["Magura Sadar", "Mohammadpur", "Shalikha", "Sreepur"],
    "Meherpur": ["Meherpur Sadar", "Gangni", "Mujibnagar"],
    "Narail": ["Narail Sadar", "Kalia", "Lohagara"],
    "Satkhira": ["Satkhira Sadar", "Assasuni", "Debhata", "Kalaroa", "Kaliganj", "Shyamnagar", "Tala"]
  },
  "Mymensingh": {
    "Jamalpur": ["Dewanganj", "Baksiganj", "Islampur", "Jamalpur Sadar", "Madarganj", "Melandaha", "Sarishabari"],
    "Mymensingh": ["Fulbaria", "Trishal", "Bhaluka", "Muktagachha", "Mymensingh Sadar", "Dhobaura", "Phulpur", "Haluaghat", "Gouripur", "Gafargaon", "Iswarganj", "Nandail", "Tarakanda"],
    "Netrakona": ["Barhatta", "Durgapur", "Kendua", "Atpara", "Madan", "Khaliajuri", "Kalmakanda", "Mohanganj", "Purbadhala", "Netrakona Sadar"],
    "Sherpur": ["Sherpur Sadar", "Nalitabari", "Sreebardi", "Nakla", "Jhenaigati"]
  },
  "Rajshahi": {
    "Bogra": ["Adamdighi", "Bogra Sadar", "Dhunat", "Dhupchanchia", "Gabtali", "Kahaloo", "Nandigram", "Sariakandi", "Shajahanpur", "Sherpur", "Shibganj", "Sonatala"],
    "Joypurhat": ["Joypurhat Sadar", "Akkelpur", "Kalai", "Khetlal", "Panchbibi"],
    "Naogaon": ["Naogaon Sadar", "Atrai", "Badalgachhi", "Dhamoirhat", "Manda", "Mohadevpur", "Niamatpur", "Patnitala", "Porsha", "Raninagar", "Sapahar"],
    "Natore": ["Natore Sadar", "Bagatipara", "Baraigram", "Gurudaspur", "Lalpur", "Singra", "Naldanga"],
    "Nawabganj": ["Bholahat", "Gomastapur", "Nachole", "Nawabganj Sadar", "Shibganj"],
    "Pabna": ["Pabna Sadar", "Atgharia", "Bera", "Bhangura", "Chatmohar", "Faridpur", "Ishwardi", "Santhia", "Sujanagar"],
    "Rajshahi": ["Bagha", "Bagmara", "Charghat", "Durgapur", "Godagari", "Mohanpur", "Paba", "Puthia", "Tanore"],
    "Sirajganj": ["Sirajganj Sadar", "Belkuchi", "Chauhali", "Kamarkhanda", "Kazipur", "Raiganj", "Shahjadpur", "Tarash", "Ullahpara"]
  },
  "Rangpur": {
    "Dinajpur": ["Birampur", "Birganj", "Biral", "Bochaganj", "Chirirbandar", "Dinajpur Sadar", "Ghoraghat", "Hakimpur", "Kaharole", "Khansama", "Nawabganj", "Parbatipur", "Phulbari"],
    "Gaibandha": ["Fulchhari", "Gaibandha Sadar", "Gobindaganj", "Palashbari", "Sadullapur", "Sughatta", "Sundarganj"],
    "Kurigram": ["Kurigram Sadar", "Bhurungamari", "Char Rajibpur", "Chilmari", "Nageshwari", "Phulbari", "Rajarhat", "Raomari", "Ulipur"],
    "Lalmonirhat": ["Lalmonirhat Sadar", "Aditmari", "Hatibandha", "Kaliganj", "Patgram"],
    "Nilphamari": ["Nilphamari Sadar", "Dimla", "Domar", "Jaldhaka", "Kishoreganj", "Saidpur"],
    "Panchagarh": ["Panchagarh Sadar", "Atwari", "Boda", "Debiganj", "Tetulia"],
    "Rangpur": ["Badarganj", "Gangachhara", "Kaunia", "Rangpur Sadar", "Mithapukur", "Pirgachha", "Pirganj", "Taraganj"],
    "Thakurgaon": ["Thakurgaon Sadar", "Baliadangi", "Haripur", "Pirganj", "Ranisankail"]
  },
  "Sylhet": {
    "Habiganj": ["Ajmiriganj", "Bahubal", "Baniyachong", "Chunarughat", "Habiganj Sadar", "Lakhai", "Madhabpur", "Nabiganj", "Shaistaganj"],
    "Moulvibazar": ["Moulvibazar Sadar", "Barlekha", "Juri", "Kamalganj", "Kulaura", "Rajnagar", "Sreemangal"],
    "Sunamganj": ["Bishwamvarpur", "Chhatak", "Derai", "Dharampasha", "Dowarabazar", "Jagannathpur", "Jamalganj", "Sullah", "Sunamganj Sadar", "Tahirpur", "South Sunamganj"],
    "Sylhet": ["Sylhet Sadar", "Balaganj", "Beanibazar", "Bishwanath", "Companiganj", "Dakshin Surma", "Fenchuganj", "Golapganj", "Gowainghat", "Jaintiapur", "Kanaighat", "Osmani Nagar", "Zakiganj"]
  }
};

// --- Page Components ---

const FilterSidebar = ({ onFilterChange, filters, isMobileOpen, onMobileToggle, onPropertyTypeChange }: {
    onFilterChange: (newFilterValues: Partial<{ division: string; district: string; upazila: string; price: number; area: number; bedrooms: string; bathrooms: string; furnished: boolean; verified: boolean; propertyType: string[]; rooms?: string; }>) => void;
    filters: { division: string; district: string; upazila: string; price: number; area: number; bedrooms: string; bathrooms: string; furnished: boolean; verified: boolean; propertyType: string[]; rooms?: string; };
    isMobileOpen?: boolean;
    onMobileToggle?: () => void;
    onPropertyTypeChange: (type: string) => void;
}) => {
    const [districts, setDistricts] = useState<string[]>([]);
    const [upazilas, setUpazilas] = useState<string[]>([]);

    // Update districts when division changes
    useEffect(() => {
        if (filters.division) {
            const divisionData = locations[filters.division as keyof typeof locations];
            const newDistricts = Object.keys(divisionData);
            setDistricts(newDistricts);
        } else {
            setDistricts([]);
        }
    }, [filters.division]);

    // Update upazilas when district changes
    useEffect(() => {
        if (filters.division && filters.district) {
            const divisionData = locations[filters.division as keyof typeof locations];
            const newUpazilas = divisionData[filters.district as keyof typeof divisionData];
            setUpazilas(newUpazilas);
        } else {
            setUpazilas([]);
        }
    }, [filters.division, filters.district]);

    const handleDivisionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const division = e.target.value;
        console.log('Division changed to:', division);
        onFilterChange({
            division: division,
            district: '',
            upazila: ''
        });
    };

    const handlePropertyTypeChange = (type: string) => {
        onPropertyTypeChange(type);
    };

    const filterContent = (
        <div className="space-y-8">
            <h3 className="text-2xl font-bold font-serif text-gray-900 mb-2">Filters</h3>
            {/* Location Filter */}
            <div className="space-y-2">
                <label className="text-base font-semibold block text-gray-800">Location</label>
                <select 
                    onChange={handleDivisionChange} 
                    value={filters.division} 
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white cursor-pointer appearance-none text-base"
                >
                    <option value="">All Locations</option>
                    {Object.keys(locations).map(div => <option key={div} value={div}>{div}</option>)}
                </select>
            </div>
            {/* Price Range */}
            <div className="space-y-2">
                <label htmlFor="priceRange" className="text-base font-semibold text-gray-800">Price Range</label>
                <input 
                    id="priceRange"
                    type="range" 
                    min="20000" 
                    max="150000" 
                    step="1000"
                    value={filters.price}
                    onChange={(e) => onFilterChange({ price: parseInt(e.target.value, 10) })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600" 
                />
                <div className="flex justify-between text-xs text-gray-700">
                    <span>20k</span>
                    <span>150k+</span>
                </div>
            </div>
            {/* Area */}
            <div className="space-y-2">
                <label htmlFor="areaRange" className="text-base font-semibold text-gray-800">Area (sqft)</label>
                <input 
                    id="areaRange"
                    type="range" 
                    min="500" 
                    max="5000" 
                    step="50"
                    value={filters.area}
                    onChange={(e) => onFilterChange({ area: parseInt(e.target.value, 10) })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600" 
                />
                <div className="flex justify-between text-xs text-gray-700">
                    <span>500</span>
                    <span>5000+</span>
                </div>
            </div>
            {/* Beds & Baths */}
            <div className="flex gap-4">
                <div className="w-1/2">
                    <label className="text-base font-semibold block text-gray-800 mb-1">Beds</label>
                    <select 
                        value={filters.bedrooms}
                        onChange={(e) => onFilterChange({ bedrooms: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white cursor-pointer appearance-none text-base"
                    >
                        <option value="">Any</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3+">3+</option>
                    </select>
                </div>
                <div className="w-1/2">
                    <label className="text-base font-semibold block text-gray-800 mb-1">Baths</label>
                    <select 
                        value={filters.bathrooms}
                        onChange={(e) => onFilterChange({ bathrooms: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white cursor-pointer appearance-none text-base"
                    >
                        <option value="">Any</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3+">3+</option>
                    </select>
                </div>
            </div>
            {/* Rooms */}
            <div className="space-y-2">
                <label className="text-base font-semibold block text-gray-800">Rooms</label>
                <select
                    value={filters.rooms}
                    onChange={e => onFilterChange({ rooms: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white cursor-pointer appearance-none text-base"
                >
                    <option value="">Any</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                </select>
            </div>
            {/* Toggles */}
            <div className="space-y-4">
                <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-base font-semibold text-gray-800">Furnished</span>
                    <input 
                        type="checkbox" 
                        checked={filters.furnished}
                        onChange={(e) => onFilterChange({ furnished: e.target.checked })}
                        className="sr-only peer" 
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-base font-semibold text-gray-800">Verified Only</span>
                    <input 
                        type="checkbox" 
                        checked={filters.verified}
                        onChange={(e) => onFilterChange({ verified: e.target.checked })}
                        className="sr-only peer" 
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                </label>
            </div>
        </div>
    );

    // Mobile overlay version
    if (onMobileToggle) {
        return (
            <div className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/50" onClick={onMobileToggle}></div>
                <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
                    <div className="p-4 sm:p-6">
                        {filterContent}
                    </div>
                </div>
            </div>
        );
    }

    // Desktop sidebar version
    return (
        <div className="hidden lg:block w-80 p-6 bg-white rounded-2xl shadow-xl border border-gray-200 h-fit sticky top-28 z-30">
            <div className="space-y-8">
                {filterContent}
            </div>
        </div>
    );
};

const PropertyCard = ({ listing }: { listing: typeof allListings[0] }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transform-gpu will-change-[transform,box-shadow] hover:-translate-y-4 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] transition-[transform,box-shadow] duration-[3000ms] ease-in-out">
        <div className="relative h-48 sm:h-56">
            <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full cursor-pointer hover:bg-red-100 transition-colors duration-500">
                <HeartIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 hover:text-red-500 transition-colors duration-500" />
            </div>
             {listing.verified && <div className="absolute top-3 left-3 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full">VERIFIED</div>}
        </div>
        <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-gray-800 mb-2 line-clamp-2">{listing.title}</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{listing.location}</p>
            <div className="flex justify-between items-center mb-3 sm:mb-4 text-sm sm:text-base text-gray-700">
                <span>{listing.bedrooms} Beds</span>
                <span>{listing.bathrooms} Baths</span>
                <span>{listing.area} sqft</span>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-xl sm:text-2xl font-bold text-teal-600">৳{listing.price.toLocaleString()}</p>
                <a href="#" className="text-sm font-bold text-teal-600 hover:text-teal-700">View Details</a>
            </div>
        </div>
    </div>
);

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    return (
        <div className="flex justify-center items-center gap-1 sm:gap-2 mt-8 sm:mt-12">
            <Button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="py-2 px-3 sm:px-4 !rounded-lg bg-white !text-gray-700 border border-gray-300 hover:!bg-gray-100 text-sm">
                Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg transition-colors duration-500 text-sm sm:text-base ${currentPage === page ? 'bg-teal-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'}`}
                >
                    {page}
                </button>
            ))}
            <Button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="py-2 px-3 sm:px-4 !rounded-lg bg-white !text-gray-700 border border-gray-300 hover:!bg-gray-100 text-sm">
                Next
            </Button>
        </div>
    )
};


// --- The Main Page Component ---
export default function ExplorePage() {
  const [filters, setFilters] = useState({
      division: '',
      district: '',
      upazila: '',
      price: 150000,
      area: 5000,
      bedrooms: '',
      bathrooms: '',
      furnished: false,
      verified: false,
      propertyType: [] as string[],
      rooms: ''
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleFilterChange = (newFilterValues: Partial<typeof filters>) => {
      setFilters(prev => ({...prev, ...newFilterValues}));
  }

  const handlePropertyTypeChange = (type: string) => {
      setFilters(prev => ({
          ...prev,
          propertyType: prev.propertyType.includes(type)
              ? prev.propertyType.filter(t => t !== type)
              : [...prev.propertyType, type]
      }));
  }

  const filteredListings = useMemo(() => {
    return allListings.filter(listing => {
        const { division, district, upazila, price, area, bedrooms, bathrooms, furnished, verified, propertyType } = filters;
        
        // Location filters
        if (division && listing.division !== division) return false;
        if (district && listing.district !== district) return false;
        if (upazila && listing.upazila !== upazila) return false;
        
        // Price and area filters
        if (listing.price > price) return false;
        if (listing.area > area) return false;
        
        // Bedrooms filter
        if (bedrooms && bedrooms !== 'Any') {
            const bedFilter = parseInt(bedrooms);
            if (bedrooms === '3+' && listing.bedrooms < 3) return false;
            if (bedrooms !== '3+' && listing.bedrooms !== bedFilter) return false;
        }
        
        // Bathrooms filter
        if (bathrooms && bathrooms !== 'Any') {
            const bathFilter = parseInt(bathrooms);
            if (bathrooms === '3+' && listing.bathrooms < 3) return false;
            if (bathrooms !== '3+' && listing.bathrooms !== bathFilter) return false;
        }
        
        // Property type filter
        if (propertyType.length > 0 && !propertyType.includes(listing.type)) return false;
        
        // Furnished filter
        if (furnished && !listing.furnished) return false;
        
        // Verified filter
        if (verified && !listing.verified) return false;
        
        return true;
    });
  }, [filters]);

  return (
    <div className="bg-gray-50">
      <Header />
      <main className="pt-32 min-h-[60vh] flex flex-col bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-900">Explore Properties</h1>
                <p className="text-base sm:text-lg text-gray-700 mt-2">Find the perfect space that fits your needs.</p>
            </div>
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
                <button
                    onClick={() => setMobileFiltersOpen(true)}
                    className="w-full flex items-center justify-center gap-2 p-4 bg-white rounded-xl shadow-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                    <FilterIcon className="w-5 h-5" />
                    <span className="font-semibold">Filters</span>
                    <span className="text-sm text-gray-500">({Object.values(filters).filter(v => {
                        if (Array.isArray(v)) return v.length > 0;
                        if (typeof v === 'boolean') return v;
                        return v !== '' && v !== 150000 && v !== 5000;
                    }).length} active)</span>
                </button>
            </div>
            {/* Sidebar and Listings Row */}
            <div className="flex flex-row items-start gap-10 xl:gap-16 w-full">
                <FilterSidebar 
                    onFilterChange={handleFilterChange} 
                    filters={filters}
                    isMobileOpen={mobileFiltersOpen}
                    onMobileToggle={() => setMobileFiltersOpen(false)}
                    onPropertyTypeChange={handlePropertyTypeChange}
                />
                <div className="w-full lg:w-3/4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {filteredListings.map(listing => (
                            <PropertyCard key={listing.id} listing={listing} />
                        ))}
                    </div>
                    <Pagination />
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 