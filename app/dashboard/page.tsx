'use client';

import React from 'react';

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

// Reusable components from the design system
const HouseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

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

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="pt-24 bg-[--bg-page] min-h-screen">
        {/* Search Bar Section */}
        <section className="w-full p-6 bg-[--bg-card] border-b border-[--border-main]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-[--text-main] font-serif">Find Your Perfect Property</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <select className="w-full px-4 py-3 text-[--text-main] bg-[--bg-page] border border-[--border-main] rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary-brand] focus:border-[--color-primary-brand] transition-colors">
                <option value="">Select District</option>
                {districts.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              <input 
                type="text" 
                placeholder="City or Area" 
                className="w-full px-4 py-3 text-[--text-main] bg-[--bg-page] border border-[--border-main] rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary-brand] focus:border-[--color-primary-brand] transition-colors" 
              />
              <select className="w-full px-4 py-3 text-[--text-main] bg-[--bg-page] border border-[--border-main] rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary-brand] focus:border-[--color-primary-brand] transition-colors">
                <option value="">Select Type</option>
                {propertyTypes.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
              <input 
                type="text" 
                placeholder="Price Range (e.g., 20k-50k)" 
                className="w-full px-4 py-3 text-[--text-main] bg-[--bg-page] border border-[--border-main] rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary-brand] focus:border-[--color-primary-brand] transition-colors" 
              />
              <Button type="submit" className="w-full">
                Search
              </Button>
            </div>
          </div>
        </section>

        {/* Listings Section */}
        <section className="w-full p-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-[--text-main] font-serif">Featured Listings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map(listing => (
                <div key={listing.id} className="bg-[--bg-card] rounded-2xl shadow-lg overflow-hidden border border-[--border-main] hover:shadow-xl transition-shadow duration-300">
                  <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                     <img src="/logo.png" alt="GharBari logo" className="w-12 h-12 object-contain" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[--text-main] mb-2">{listing.title}</h3>
                    <p className="text-sm text-[--color-text-secondary] mb-3">{listing.location}</p>
                    <p className="text-lg font-semibold text-[--color-primary-brand] mb-4">{listing.price}</p>
                    <div className="flex justify-between items-center">
                      <span className="inline-block bg-[--color-primary-brand]/10 text-[--color-primary-brand] rounded-full px-3 py-1 text-sm font-semibold">{listing.type}</span>
                      <Button className="text-sm py-2 px-4">View Details</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 