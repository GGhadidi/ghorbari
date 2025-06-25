'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Mock data for listings - in a real app, this would come from a database
const listings = [
  { id: 1, title: 'Spacious Apartment in Dhaka', location: 'Dhaka', price: '45,000 BDT/month', type: 'Apartment', image: '/placeholder.svg' },
  { id: 2, title: 'Modern Office Space in Chittagong', location: 'Chittagong', price: '80,000 BDT/month', type: 'Office', image: '/placeholder.svg' },
  { id: 3, title: 'Cozy House in Sylhet', location: 'Sylhet', price: '30,000 BDT/month', type: 'House', image: '/placeholder.svg' },
  { id: 4, title: 'Retail Shop in Barisal', location: 'Barisal', price: '25,000 BDT/month', type: 'Shop', image: '/placeholder.svg' },
  { id: 5, title: 'Luxury Apartment in Gulshan, Dhaka', location: 'Dhaka', price: '120,000 BDT/month', type: 'Apartment', image: '/placeholder.svg' },
  { id: 6, title: 'Quiet House in Rajshahi', location: 'Rajshahi', price: '28,000 BDT/month', type: 'House', image: '/placeholder.svg' },
];

// Mock data for locations - in a real app, this would come from a database
const districts = [
  "Dhaka", "Chittagong", "Khulna", "Rajshahi", "Barisal", "Sylhet", "Rangpur", "Mymensingh"
];

const propertyTypes = ["House", "Apartment", "Shop", "Office"];

// --- Reusable Icon Components ---
const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const HouseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
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

// --- Reusable Button Component ---
const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => (
    <button
        className={`btn btn-primary ${className}`}
        {...props}
    >
        {children}
    </button>
);

// --- Page Sections ---
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
                                <Link href="/" onClick={closeMobileMenu} className="block text-white hover:text-[--color-secondary-accent] transition-colors text-lg py-3 border-b border-white/10">Home</Link>
                                <Link href="/explore" onClick={closeMobileMenu} className="block text-white hover:text-[--color-secondary-accent] transition-colors text-lg py-3 border-b border-white/10">Explore</Link>
                                <Link href="/list-property" onClick={closeMobileMenu} className="block text-white hover:text-[--color-secondary-accent] transition-colors text-lg py-3 border-b border-white/10">List Property</Link>
                                <Link href="/about" onClick={closeMobileMenu} className="block text-white hover:text-[--color-secondary-accent] transition-colors text-lg py-3 border-b border-white/10">About</Link>
                                <Link href="/contact" onClick={closeMobileMenu} className="block text-white hover:text-[--color-secondary-accent] transition-colors text-lg py-3 border-b border-white/10">Contact</Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

const HeroSection = () => {
    const [searchValue, setSearchValue] = useState("");
  return (
        <section className="relative pt-24 sm:pt-32 lg:pt-48 pb-16 sm:pb-20 lg:pb-32 bg-gradient-to-b from-[#F4FDF8] to-[#FFFFFF] overflow-hidden">
            <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-6">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 !leading-tight text-black">
                        Find your dream space, effortlessly.
                    </h1>
                    <p className="text-base sm:text-lg text-black opacity-80 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                        The most trusted platform to rent, buy, and sell properties in Bangladesh. Verified listings at your fingertips.
                    </p>
                    <div className="p-2 sm:p-3 bg-white rounded-full shadow-lg flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto lg:mx-0">
                        <input 
                            type="text" 
                            placeholder="Search by location, property, or keyword..." 
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                            className={`hero-search-input flex-grow bg-transparent p-3 sm:p-4 focus:outline-none placeholder:text-gray-500 text-sm sm:text-base w-full sm:w-auto rounded-full shadow-none border-0 ${searchValue ? 'has-underline' : ''}`}
                        />
                        <Button className="w-full sm:w-auto mt-2 sm:mt-0">Search</Button>
                    </div>
                </div>
                
                {/* Desktop Hero Images */}
                <div className="hidden lg:block relative h-80 lg:h-96">
                    <div className="will-change-[transform,box-shadow] absolute top-0 left-10 w-56 lg:w-64 h-72 lg:h-80 bg-white rounded-2xl shadow-xl overflow-hidden transform-gpu -rotate-6 transition-[transform,box-shadow] duration-[3000ms] ease-in-out hover:-translate-y-4 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]">
                        <Image
                            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=100&w=4000&auto=format&fit=crop&ar=4:5" 
                            alt="Property 1" 
                            fill 
                            style={{ objectFit: 'cover' }}
                            quality={95}
                            priority
                        />
                    </div>
                    <div className="will-change-[transform,box-shadow] absolute bottom-0 right-10 w-56 lg:w-64 h-72 lg:h-80 bg-white rounded-2xl shadow-xl overflow-hidden transform-gpu rotate-6 transition-[transform,box-shadow] duration-[3000ms] ease-in-out hover:-translate-y-4 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]">
        <Image
                            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=100&w=4000&auto=format&fit=crop&ar=4:5" 
                            alt="Property 2" 
                            fill 
                            style={{ objectFit: 'cover' }}
                            quality={95}
          priority
        />
                    </div>
                </div>
                
                {/* Mobile Hero Image */}
                <div className="lg:hidden relative h-64 sm:h-80 mx-auto max-w-sm">
                    <div className="w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden">
            <Image
                            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=100&w=4000&auto=format&fit=crop&ar=4:3" 
                            alt="Property showcase" 
                            fill 
                            style={{ objectFit: 'cover' }}
                            quality={95}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
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
)

// --- The Main Page Component ---
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {/* Placeholder for other sections: Property Highlights, Trusted By, etc. */}
      </main>
      <Footer />
    </>
  );
}
