'use client';

import React from 'react';

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

const Header = () => (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl">
        <div className="container mx-auto px-4 sm:px-6 py-4 bg-black rounded-full shadow-2xl ring-1 ring-white/10">
            <div className="flex justify-between items-center">
                <a href="/" className="flex items-center space-x-2">
                    <img src="/logo.png" alt="GharBari logo" className="navbar-logo w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                    <span className="text-xl sm:text-2xl font-bold text-white font-serif">GharBari</span>
                </a>
                <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
                    <a href="/" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">Home</a>
                    <a href="/explore" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">Explore</a>
                    <a href="/list-property" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">List Property</a>
                    <a href="/about" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">About</a>
                    <a href="#" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">Contact</a>
                </nav>
                <div className="flex items-center space-x-3 sm:space-x-4">
                    <a href="/login" className="navbar-link hidden sm:block text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 font-medium text-sm lg:text-base">Login</a>
                </div>
            </div>
        </div>
    </header>
);

const Footer = () => (
     <footer className="w-full bg-[--footer-bg] text-[--footer-text] py-16 px-4">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <h3 className="text-lg font-bold font-serif mb-4 text-white">GharBari</h3>
                <p className="text-sm">Your trusted partner in finding the perfect property.</p>
            </div>
            <div>
                <h3 className="text-lg font-bold font-serif mb-4 text-white">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="/about" className="hover:text-white">About Us</a></li>
                    <li><a href="/contact" className="hover:text-white">Contact</a></li>
                    <li><a href="/explore" className="hover:text-white">Explore Properties</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-bold font-serif mb-4 text-white">Contact Info</h3>
                <ul className="space-y-2 text-sm">
                    <li>Dhaka, Bangladesh</li>
                    <li>contact@gharbari.com</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-bold font-serif mb-4 text-white">Newsletter</h3>
                <div className="flex">
                    <input type="email" placeholder="Your email" className="p-2 rounded-l-md w-full bg-white/20 border-0 focus:ring-2 focus:ring-[--color-secondary-accent]"/>
                    <button className="p-2 rounded-r-md bg-[--color-secondary-accent] text-[--color-text-neutral] font-bold">Sign Up</button>
                </div>
            </div>
        </div>
        <div className="mt-16 border-t border-white/20 pt-8 text-center text-sm">
            <p>&copy; GharBari 2025. All rights reserved.</p>
        </div>
    </footer>
);

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex flex-col justify-center items-center bg-[--bg-page]">
        <div className="container mx-auto max-w-4xl px-4 py-8 flex flex-col justify-center items-center">
          <div className="text-center mb-16">
            <img src="/logo.png" alt="GharBari logo" className="w-16 h-16 mx-auto mb-6 object-contain" />
            <h1 className="text-5xl font-bold text-[--text-main] font-serif mb-6">About GharBari</h1>
            <p className="text-xl text-[--color-text-secondary] max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in finding the perfect property across Bangladesh. We connect renters with verified property owners, making the rental process seamless and secure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
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

          <div className="bg-[--bg-card] rounded-2xl p-8 shadow-lg border border-[--border-main] mb-16">
            <h2 className="text-3xl font-bold text-[--text-main] font-serif mb-8 text-center">Why Choose GharBari?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[--color-primary-brand]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/logo.png" alt="GharBari logo" className="w-8 h-8 text-[--color-primary-brand]" />
                </div>
                <h3 className="text-xl font-bold text-[--text-main] mb-3">Verified Listings</h3>
                <p className="text-[--color-text-secondary]">All properties are verified by our team to ensure quality and authenticity.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[--color-primary-brand]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/logo.png" alt="GharBari logo" className="w-8 h-8 text-[--color-primary-brand]" />
                </div>
                <h3 className="text-xl font-bold text-[--text-main] mb-3">Transparent Process</h3>
                <p className="text-[--color-text-secondary]">Clear pricing, detailed property information, and honest reviews from real tenants.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[--color-primary-brand]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/logo.png" alt="GharBari logo" className="w-8 h-8 text-[--color-primary-brand]" />
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