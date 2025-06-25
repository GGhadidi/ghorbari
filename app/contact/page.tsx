"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';

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
    const lastScrollY = React.useRef(0);

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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-32 pb-16 flex flex-col">
        <div className="container mx-auto max-w-3xl px-4 flex-1 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-center mb-8">Contact Us</h1>
          <p className="text-center text-lg text-gray-600 mb-10">
            We'd love to hear from you! Fill out the form below or reach us directly at <a href="mailto:ghorbari363@gmail.com" className="text-[#2C7865] font-semibold hover:underline">ghorbari363@gmail.com</a>.
          </p>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-10">
            {submitted ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-[#2C7865] mb-4">Thank you!</h2>
                <p className="text-lg text-gray-700">Your message has been sent. We'll get back to you soon.</p>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={e => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input id="name" name="name" type="text" required className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2C7865] transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input id="email" name="email" type="email" required className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2C7865] transition-colors" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input id="subject" name="subject" type="text" required className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2C7865] transition-colors" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2C7865] transition-colors" />
                </div>
                <button type="submit" className="rounded-full bg-[#2C7865] text-white font-bold py-3 px-8 hover:bg-[#225e50] transition-transform duration-300 hover:scale-105">
                  Send Message
                </button>
              </form>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-bold font-serif mb-2 text-[#2C7865]">Email</h3>
              <a href="mailto:ghorbari363@gmail.com" className="text-gray-700 hover:text-[#2C7865] transition-colors">ghorbari363@gmail.com</a>
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif mb-2 text-[#2C7865]">Address</h3>
              <span className="text-gray-400">(Not provided)</span>
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif mb-2 text-[#2C7865]">Phone</h3>
              <span className="text-gray-400">(Not provided)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 