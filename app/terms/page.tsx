'use client';

import React from 'react';

// Reusable components from the design system
const HouseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const Header = () => (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl">
        <div className="container mx-auto px-4 sm:px-6 py-4 bg-black rounded-full shadow-2xl ring-1 ring-white/10">
            <div className="flex justify-between items-center">
                <a href="/" className="flex items-center space-x-2">
                    <img src="/logo-main.png" alt="GharBari logo" className="navbar-logo w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                    <span className="text-xl sm:text-2xl font-bold text-white font-serif">GharBari</span>
                </a>
                <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
                    <a href="/" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">Home</a>
                    <a href="/explore" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">Explore</a>
                    <a href="/list-property" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">List Property</a>
                    <a href="/about" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">About</a>
                    <a href="/contact" className="navbar-link text-gray-200 hover:text-white hover:[text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 text-sm xl:text-base">Contact</a>
                </nav>
            </div>
        </div>
    </header>
);

const Footer = () => (
     <footer className="w-full bg-[--footer-bg] text-white py-16 px-4">
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

export default function Terms() {
  return (
    <>
      <Header />
      <main className="pt-24 bg-[--bg-page] min-h-screen">
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <div className="bg-[--bg-card] rounded-2xl p-8 shadow-lg border border-[--border-main]">
            <h1 className="text-4xl font-bold mb-6 text-[--text-main] font-serif">Terms of Service</h1>
            <div className="space-y-6 text-[--color-text-secondary]">
                <p className="text-lg leading-relaxed">
                Welcome to GharBari! These terms and conditions outline the rules and regulations for the use of our website.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-[--text-main] font-serif">1. Introduction</h2>
                <p className="leading-relaxed">
                By accessing this website we assume you accept these terms and conditions. Do not continue to use GharBari if you do not agree to take all of the terms and conditions stated on this page.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-[--text-main] font-serif">2. License</h2>
                <p className="leading-relaxed">
                Unless otherwise stated, GharBari and/or its licensors own the intellectual property rights for all material on GharBari. All intellectual property rights are reserved.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-[--text-main] font-serif">3. User Responsibilities</h2>
                <p className="leading-relaxed">
                Users are responsible for providing accurate information and maintaining the security of their accounts. Any false or misleading information may result in account termination.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-[--text-main] font-serif">4. Privacy</h2>
                <p className="leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
                </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[--border-main]">
                <a href="/" className="inline-block rounded-full bg-[--color-primary-brand] text-white font-bold py-3 px-6 hover:bg-[--color-primary-brand-hover] transition-transform duration-300 hover:scale-105">
                    Back to Home
                </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 