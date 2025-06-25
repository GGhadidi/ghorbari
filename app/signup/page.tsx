"use client";

import { useState } from 'react';

// Reusable components from the design system
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

const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => (
    <button
        className={`btn btn-primary ${className}`}
        {...props}
    >
        {children}
    </button>
);

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-4 left-0 right-0 z-50 px-4">
                <div className="container mx-auto max-w-7xl flex justify-between items-center p-3 sm:p-4 bg-black/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
                    <a href="/" className="flex items-center gap-2">
                        <HouseIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        <span className="font-bold text-xl sm:text-2xl font-serif text-white">GharBari</span>
                    </a>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-white">
                        <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
                        <a href="/explore" className="hover:text-gray-300 transition-colors">Explore</a>
                        <a href="/list-property" className="hover:text-gray-300 transition-colors">List Property</a>
                        <a href="/about" className="hover:text-gray-300 transition-colors">About</a>
                        <a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a>
                    </nav>
                    
                    <div className="flex items-center gap-3 sm:gap-4">
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

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('renter');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup attempt with:', { email, password, userType });
    // In a real app, you'd redirect to /dashboard on success
    window.location.href = '/dashboard';
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-[--bg-page] pt-20 px-4 sm:px-6">
        <div className="w-full max-w-md p-6 sm:p-8 space-y-6 bg-[--bg-card] rounded-2xl shadow-lg border border-[--border-main]">
          <div className="text-center">
            <HouseIcon className="w-10 h-10 sm:w-12 sm:h-12 text-[--color-primary-brand] mx-auto mb-4" />
            <h1 className="text-2xl sm:text-3xl font-bold text-[--text-main] font-serif">Join GharBari</h1>
            <p className="text-sm sm:text-base text-[--color-text-secondary] mt-2">Create your account to get started</p>
          </div>
          
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[--text-main] mb-2">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 sm:px-4 py-3 sm:py-4 text-[--text-main] bg-[--bg-page] border border-[--border-main] rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary-brand] focus:border-[--color-primary-brand] transition-colors text-sm sm:text-base"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[--text-main] mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 sm:px-4 py-3 sm:py-4 text-[--text-main] bg-[--bg-page] border border-[--border-main] rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary-brand] focus:border-[--color-primary-brand] transition-colors text-sm sm:text-base"
                placeholder="Create a password"
              />
            </div>
            <fieldset>
              <legend className="block text-sm font-medium text-[--text-main] mb-3">I am a...</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <label className="flex items-center p-3 sm:p-4 border border-[--border-main] rounded-xl cursor-pointer hover:border-[--color-primary-brand] transition-colors">
                  <input 
                    type="radio" 
                    name="userType" 
                    value="renter" 
                    checked={userType === 'renter'} 
                    onChange={() => setUserType('renter')} 
                    className="h-4 w-4 text-[--color-primary-brand] focus:ring-[--color-primary-brand] border-[--border-main]" 
                  />
                  <span className="ml-3 text-sm font-medium text-[--text-main]">Renter</span>
                </label>
                <label className="flex items-center p-3 sm:p-4 border border-[--border-main] rounded-xl cursor-pointer hover:border-[--color-primary-brand] transition-colors">
                  <input 
                    type="radio" 
                    name="userType" 
                    value="owner" 
                    checked={userType === 'owner'} 
                    onChange={() => setUserType('owner')} 
                    className="h-4 w-4 text-[--color-primary-brand] focus:ring-[--color-primary-brand] border-[--border-main]" 
                  />
                  <span className="ml-3 text-sm font-medium text-[--text-main]">Property Owner</span>
                </label>
              </div>
            </fieldset>
            <div>
              <Button type="submit" className="w-full">
                Create account
              </Button>
            </div>
          </form>
          
          <div className="text-center">
            <p className="text-sm text-[--color-text-secondary]">
              Already have an account?{' '}
              <a href="/login" className="font-medium text-[--color-primary-brand] hover:text-[--color-primary-brand-hover] transition-colors">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 