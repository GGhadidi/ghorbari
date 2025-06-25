'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Reusable components from the design system
const HouseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => (
    <button
        className={`rounded-full bg-[--color-primary-brand] text-white font-bold py-3 px-6 hover:bg-[--color-primary-brand-hover] transition-transform duration-300 hover:scale-105 ${className}`}
        {...props}
    >
        {children}
    </button>
);

// --- Header copied from Explore page for consistency ---
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
    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const closeMobileMenu = () => setMobileMenuOpen(false);
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

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-16">
        <div className="container mx-auto max-w-4xl px-4 bg-white">
          <div className="text-center mb-16 bg-white">
            <img src="/logo-landingpage.png" alt="GharBari About Logo" className="w-24 h-24 mx-auto mb-6 object-contain" />
            <h1 className="text-5xl font-bold text-[--text-main] font-serif mb-6">About GharBari</h1>
            <p className="text-xl text-[--color-text-secondary] max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in finding the perfect property across Bangladesh. We connect renters with verified property owners, making the rental process seamless and secure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16 bg-white">
            <div>
              <h2 className="text-3xl font-bold text-[--text-main] font-serif mb-6">Our Mission</h2>
              <p className="text-lg text-[--color-text-secondary] leading-relaxed">
                To revolutionize the property rental market in Bangladesh by providing a transparent, efficient, and user-friendly platform that connects property seekers with verified property owners.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[--text-main] font-serif mb-6">Our Vision</h2>
              <p className="text-lg text-[--color-text-secondary] leading-relaxed">
                To become the leading property rental platform in Bangladesh, known for trust, reliability, and exceptional user experience.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-[--text-main] font-serif mb-8 text-center">Why Choose GharBari?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img src="/logo-verification.png" alt="Verification Logo" className="w-12 h-12 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-[--text-main] mb-3">Verified Listings</h3>
                <p className="text-[--color-text-secondary]">All properties are verified by our team to ensure quality and authenticity.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[--color-primary-brand]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/logo-landingpage.png" alt="GharBari logo" className="w-8 h-8 text-[--color-primary-brand]" />
                </div>
                <img src="/logo-transparency.png" alt="Transparency Logo" className="w-12 h-12 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-[--text-main] mb-3">Transparent Process</h3>
                <p className="text-[--color-text-secondary]">Clear pricing, detailed property information, and honest reviews from real tenants.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[--color-primary-brand]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/logo-landingpage.png" alt="GharBari logo" className="w-8 h-8 text-[--color-primary-brand]" />
                </div>
                <h3 className="text-xl font-bold text-[--text-main] mb-3">24/7 Support</h3>
                <p className="text-[--color-text-secondary]">Our dedicated support team is always ready to help you with any questions or concerns.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/" className="inline-block rounded-full bg-[--color-primary-brand] text-white font-bold py-3 px-6 hover:bg-[--color-primary-brand-hover] transition-transform duration-300 hover:scale-105">
              Back to Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 