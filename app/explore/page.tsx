'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';

// --- Reusable Icon Components ---
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
        className={`rounded-full bg-black text-white font-bold py-3 px-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
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
                <div className="container mx-auto px-4 sm:px-6 py-4 bg-black rounded-full">
                    <div className="flex justify-between items-center">
                        <a href="/" className="flex items-center space-x-2">
                            <img src="/logo-main.png" alt="GharBari logo" className="navbar-logo w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                            <span className="text-xl sm:text-2xl font-bold text-white font-serif">GharBari</span>
                        </a>
                        
                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
                            <Link href="/" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">Home</Link>
                            <Link href="/explore" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">Explore</Link>
                            <Link href="/list-property" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">List Property</Link>
                            <Link href="/about" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">About</Link>
                            <Link href="/contact" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">Contact</Link>
                        </nav>
                        
                        <div className="flex items-center space-x-3 sm:space-x-4">
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
                                <Link href="/" onClick={closeMobileMenu} className="block text-white hover:text-[#2C7865] transition-colors text-lg py-3 border-b border-white/10">Home</Link>
                                <Link href="/explore" onClick={closeMobileMenu} className="block text-white hover:text-[#2C7865] transition-colors text-lg py-3 border-b border-white/10">Explore</Link>
                                <Link href="/list-property" onClick={closeMobileMenu} className="block text-white hover:text-[#2C7865] transition-colors text-lg py-3 border-b border-white/10">List Property</Link>
                                <Link href="/about" onClick={closeMobileMenu} className="block text-white hover:text-[#2C7865] transition-colors text-lg py-3 border-b border-white/10">About</Link>
                                <Link href="/contact" onClick={closeMobileMenu} className="block text-white hover:text-[#2C7865] transition-colors text-lg py-3 border-b border-white/10">Contact</Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

const Footer = () => (
     <footer className="w-full bg-black text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <h3 className="text-lg font-bold font-serif mb-4 text-white">GharBari</h3>
                <p className="text-sm text-white">Your trusted partner in finding the perfect property.</p>
            </div>
            <div>
                <h3 className="text-lg font-bold font-serif mb-4 text-white">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="/about" className="text-white transition-all duration-500 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)]">About Us</a></li>
                    <li><a href="/contact" className="text-white transition-all duration-500 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)]">Contact</a></li>
                    <li><a href="/explore" className="text-white transition-all duration-500 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)]">Explore Properties</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-bold font-serif mb-4 text-white">Contact Info</h3>
                <ul className="space-y-2 text-sm text-white">
                    <li>Dhaka, Bangladesh</li>
                    <li>contact@gharbari.com</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-bold font-serif mb-4 text-white">Newsletter</h3>
                <div className="flex">
                    <input type="email" placeholder="Your email" className="p-2 rounded-l-md w-full bg-white/20 border-0 focus:ring-2 focus:ring-[--color-secondary-accent] text-white placeholder-white"/>
                    <button className="p-2 rounded-r-md bg-[--color-secondary-accent] text-white font-bold">Sign Up</button>
                </div>
            </div>
        </div>
        <div className="mt-16 border-t border-white/20 pt-8 text-center text-sm text-white">
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

const FilterSidebar = ({ onFilterChange, filters, onPropertyTypeChange }: {
    onFilterChange: (newFilterValues: Partial<{ division: string; district: string; upazila: string; price: number; area: number; bedrooms: string; bathrooms: string; furnished: boolean; verified: boolean; propertyType: string[]; rooms?: string; }>) => void;
    filters: { division: string; district: string; upazila: string; price: number; area: number; bedrooms: string; bathrooms: string; furnished: boolean; verified: boolean; propertyType: string[]; rooms?: string; };
    onPropertyTypeChange: (type: string) => void;
}) => {
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
        <div className="space-y-8 p-4 w-full max-w-xs">
            <h3 className="text-2xl font-bold font-serif text-gray-900 mb-2">Filters</h3>
            {/* Location Filter */}
            <div className="space-y-2">
                <label className="text-base font-semibold block text-gray-800">Location</label>
                {/* Division Select */}
                <select 
                    onChange={handleDivisionChange} 
                    value={filters.division} 
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-none focus:ring-0 focus:shadow-none bg-white cursor-pointer appearance-none text-base"
                >
                    <option value="">All Divisions</option>
                    {Object.keys(locations).map(div => <option key={div} value={div}>{div}</option>)}
                </select>
                {/* District Select */}
                {filters.division && (
                  <select
                    onChange={e => onFilterChange({ district: e.target.value, upazila: '' })}
                    value={filters.district}
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-none focus:ring-0 focus:shadow-none bg-white cursor-pointer appearance-none text-base mt-2"
                  >
                    <option value="">All Districts</option>
                    {Object.keys(locations[filters.division as keyof typeof locations] || {}).map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                )}
                {/* Upazila Select */}
                {filters.division && filters.district && (
                  <select
                    onChange={e => onFilterChange({ upazila: e.target.value })}
                    value={filters.upazila}
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-none focus:ring-0 focus:shadow-none bg-white cursor-pointer appearance-none text-base mt-2"
                  >
                    <option value="">All Upazilas</option>
                    {(((locations as any)[filters.division]?.[filters.district] || []) as string[]).map((upazila: string) => (
                      <option key={upazila} value={upazila}>{upazila}</option>
                    ))}
                  </select>
                )}
            </div>
            {/* Property Type */}
            <div className="space-y-2">
                <label className="text-base font-semibold block text-gray-800">Property Type</label>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {/* First row: House, Apartment */}
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={filters.propertyType.includes('House')}
                            onChange={() => handlePropertyTypeChange('House')}
                            className="w-2 h-2 rounded-md border-gray-300 text-[#2C7865] focus:outline-none focus:border-gray-300"
                        />
                        <span className="text-base text-gray-700">House</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={filters.propertyType.includes('Apartment')}
                            onChange={() => handlePropertyTypeChange('Apartment')}
                            className="w-2 h-2 rounded-md border-gray-300 text-[#2C7865] focus:outline-none focus:border-gray-300"
                        />
                        <span className="text-base text-gray-700">Apartment</span>
                    </label>
                    {/* Second row: Office, Shop */}
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={filters.propertyType.includes('Office')}
                            onChange={() => handlePropertyTypeChange('Office')}
                            className="w-2 h-2 rounded-md border-gray-300 text-[#2C7865] focus:outline-none focus:border-gray-300"
                        />
                        <span className="text-base text-gray-700">Office</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={filters.propertyType.includes('Shop')}
                            onChange={() => handlePropertyTypeChange('Shop')}
                            className="w-2 h-2 rounded-md border-gray-300 text-[#2C7865] focus:outline-none focus:border-gray-300"
                        />
                        <span className="text-base text-gray-700">Shop</span>
                    </label>
                    {/* Third row: Bachelor Mess, left-aligned */}
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={filters.propertyType.includes('Bachelor Mess')}
                            onChange={() => handlePropertyTypeChange('Bachelor Mess')}
                            className="w-2 h-2 rounded-md border-gray-300 text-[#2C7865] focus:outline-none focus:border-gray-300"
                        />
                        <span className="text-base text-gray-700">Bachelor Mess</span>
                    </label>
                </div>
            </div>
            {/* Price Range */}
            <div className="space-y-2">
                <label className="text-base font-semibold block text-gray-800">Price Range</label>
                <div className="relative w-full">
                    <input 
                        type="range" min="20000" max="150000" step="1000"
                        value={filters.price}
                        onChange={e => onFilterChange({ price: parseInt(e.target.value, 10) })}
                        className="w-full h-[3px] bg-gray-300 appearance-none cursor-pointer focus:outline-none border-none outline-none"
                        style={{
                          accentColor: '#2C7865',
                        }}
                    />
                    <style jsx>{`
                        input[type='range']::-webkit-slider-thumb {
                          -webkit-appearance: none;
                          height: 22px;
                          width: 22px;
                          border-radius: 50%;
                          background: #2C7865;
                          box-shadow: 0 1px 4px rgba(0,0,0,0.10);
                          border: none !important;
                          outline: none !important;
                          margin-top: -9.5px;
                        }
                        input[type='range']::-moz-range-thumb {
                          height: 22px;
                          width: 22px;
                          border-radius: 50%;
                          background: #2C7865;
                          box-shadow: 0 1px 4px rgba(0,0,0,0.10);
                          border: none !important;
                          outline: none !important;
                        }
                        input[type='range']::-ms-thumb {
                          height: 22px;
                          width: 22px;
                          border-radius: 50%;
                          background: #2C7865;
                          box-shadow: 0 1px 4px rgba(0,0,0,0.10);
                          border: none !important;
                          outline: none !important;
                        }
                        input[type='range']::-webkit-slider-runnable-track {
                          height: 3px;
                          border-radius: 2px;
                          background: #d1d5db;
                          border: none !important;
                        }
                        input[type='range']:focus {
                          outline: none !important;
                          border: none !important;
                        }
                        input[type='range']::-ms-fill-lower {
                          background: #d1d5db;
                          border: none !important;
                        }
                        input[type='range']::-ms-fill-upper {
                          background: #d1d5db;
                          border: none !important;
                        }
                        input[type='range'] {
                          background: transparent;
                          border: none !important;
                          outline: none !important;
                        }
                    `}</style>
                    <div className="flex justify-between text-xs text-gray-700 mt-1">
                        <span>৳{filters.price.toLocaleString()}</span>
                        <span>৳150,000+</span>
                    </div>
                </div>
            </div>
            {/* Area */}
            <div className="space-y-2">
                <label className="text-base font-semibold block text-gray-800">Area (sqft)</label>
                <div className="relative w-full">
                    <input 
                        type="range" min="500" max="5000" step="50"
                        value={filters.area}
                        onChange={e => onFilterChange({ area: parseInt(e.target.value, 10) })}
                        className="w-full h-[3px] bg-gray-300 appearance-none cursor-pointer focus:outline-none border-none outline-none"
                        style={{
                          accentColor: '#2C7865',
                        }}
                    />
                    <style jsx>{`
                        input[type='range']::-webkit-slider-thumb {
                          -webkit-appearance: none;
                          height: 22px;
                          width: 22px;
                          border-radius: 50%;
                          background: #2C7865;
                          box-shadow: 0 1px 4px rgba(0,0,0,0.10);
                          border: none !important;
                          outline: none !important;
                          margin-top: -9.5px;
                        }
                        input[type='range']::-moz-range-thumb {
                          height: 22px;
                          width: 22px;
                          border-radius: 50%;
                          background: #2C7865;
                          box-shadow: 0 1px 4px rgba(0,0,0,0.10);
                          border: none !important;
                          outline: none !important;
                        }
                        input[type='range']::-ms-thumb {
                          height: 22px;
                          width: 22px;
                          border-radius: 50%;
                          background: #2C7865;
                          box-shadow: 0 1px 4px rgba(0,0,0,0.10);
                          border: none !important;
                          outline: none !important;
                        }
                        input[type='range']::-webkit-slider-runnable-track {
                          height: 3px;
                          border-radius: 2px;
                          background: #d1d5db;
                          border: none !important;
                        }
                        input[type='range']:focus {
                          outline: none !important;
                          border: none !important;
                        }
                        input[type='range']::-ms-fill-lower {
                          background: #d1d5db;
                          border: none !important;
                        }
                        input[type='range']::-ms-fill-upper {
                          background: #d1d5db;
                          border: none !important;
                        }
                        input[type='range'] {
                          background: transparent;
                          border: none !important;
                          outline: none !important;
                        }
                    `}</style>
                    <div className="flex justify-between text-xs text-gray-700 mt-1">
                        <span>{filters.area} sqft</span>
                        <span>5,000 sqft+</span>
                    </div>
                </div>
            </div>
            {/* Beds & Baths */}
            <div className="flex gap-4">
                <div className="w-1/3">
                    <label className="text-base font-semibold block text-gray-800 mb-1">Beds</label>
                    <select 
                        value={filters.bedrooms}
                        onChange={e => onFilterChange({ bedrooms: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none bg-white cursor-pointer appearance-none text-base"
                    >
                        <option value="">Any</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                    </select>
                </div>
                <div className="w-1/3">
                    <label className="text-base font-semibold block text-gray-800 mb-1">Baths</label>
                    <select 
                        value={filters.bathrooms}
                        onChange={e => onFilterChange({ bathrooms: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none bg-white cursor-pointer appearance-none text-base"
                    >
                        <option value="">Any</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                    </select>
                </div>
                <div className="w-1/3">
                    <label className="text-base font-semibold block text-gray-800 mb-1">Rooms</label>
                    <select 
                        value={filters.rooms}
                        onChange={e => onFilterChange({ rooms: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none bg-white cursor-pointer appearance-none text-base"
                    >
                        <option value="">Any</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                    </select>
                </div>
            </div>
            {/* Toggles */}
            <div className="space-y-4">
                <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-base font-semibold text-gray-800">Furnished</span>
                    <input 
                        type="checkbox" 
                        checked={filters.furnished}
                        onChange={e => onFilterChange({ furnished: e.target.checked })}
                        className="sr-only peer" 
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2C7865]"></div>
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-base font-semibold text-gray-800">Verified Only</span>
                    <input 
                        type="checkbox" 
                        checked={filters.verified}
                        onChange={e => onFilterChange({ verified: e.target.checked })}
                        className="sr-only peer" 
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2C7865]"></div>
                </label>
            </div>
        </div>
    );
    return (
        <div className="w-full lg:w-80 p-0 bg-white rounded-2xl shadow-lg h-fit mb-6 lg:mb-0 mt-0">
            {filterContent}
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
             {listing.verified && <div className="absolute top-3 left-3 bg-[#2C7865] text-white text-xs font-bold px-2 py-1 rounded-full">VERIFIED</div>}
        </div>
        <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-white mb-2 line-clamp-2">{listing.title}</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{listing.location}</p>
            <div className="flex justify-between items-center mb-3 sm:mb-4 text-sm sm:text-base text-gray-700">
                <span>{listing.bedrooms} Beds</span>
                <span>{listing.bathrooms} Baths</span>
                <span>{listing.area} sqft</span>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-xl sm:text-2xl font-bold text-[#2C7865]">৳{listing.price.toLocaleString()}</p>
                <Link href="#" className="text-sm font-bold text-[#2C7865] hover:text-[#2C7865] flex items-center">View Details</Link>
            </div>
        </div>
    </div>
);

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    return (
        <div className="w-full flex justify-center items-center gap-1 sm:gap-2 mt-8 sm:mt-12">
            <Button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="rounded-full bg-teal-600 text-white font-bold py-3 px-6 hover:bg-teal-700 transition-transform duration-300 hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed">
                Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg transition-colors duration-500 text-sm sm:text-base ${currentPage === page ? 'bg-[#2C7865] text-black' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'}`}
                >
                    {page}
                </button>
            ))}
            <Button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="rounded-full bg-teal-600 text-white font-bold py-3 px-6 hover:bg-teal-700 transition-transform duration-300 hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed">
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
            if (bedrooms === '4+' && listing.bedrooms < 4) return false;
            if (bedrooms !== '4+' && listing.bedrooms !== bedFilter) return false;
        }
        
        // Bathrooms filter
        if (bathrooms && bathrooms !== 'Any') {
            const bathFilter = parseInt(bathrooms);
            if (bathrooms === '4+' && listing.bathrooms < 4) return false;
            if (bathrooms !== '4+' && listing.bathrooms !== bathFilter) return false;
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
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="pt-32 min-h-[60vh] flex-1 flex flex-col">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 flex-1 flex flex-col">
            <div className="text-center mb-12 sm:mb-16">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-900">Explore Properties</h1>
                <p className="text-base sm:text-lg text-gray-700 mt-2">Find the perfect space that fits your needs.</p>
            </div>
            {/* Sidebar and Listings Row */}
            <div className="flex flex-row items-start gap-10 xl:gap-16 w-full">
                <FilterSidebar 
                    onFilterChange={handleFilterChange} 
                    filters={filters}
                    onPropertyTypeChange={handlePropertyTypeChange}
                />
                <div className="w-full lg:w-3/4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {filteredListings.map(listing => (
                            <PropertyCard key={listing.id} listing={listing} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center mt-8 sm:mt-12">
                <Pagination />
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 