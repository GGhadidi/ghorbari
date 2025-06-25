"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

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
                        <img src="/logo-main.png" alt="GharBari logo" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
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
                        <a href="/login" className="hidden sm:block text-sm font-medium text-white hover:text-gray-300 transition-colors">Login</a>
                        
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

export default function LoginPage() {
  const router = useRouter();
  useEffect(() => {
    // If already authenticated, redirect to home
    if (typeof window !== 'undefined' && localStorage.getItem('authenticated')) {
      router.replace('/');
    }
  }, [router]);
  const handleLogin = () => {
    localStorage.setItem('authenticated', 'true');
    localStorage.removeItem('guest');
    router.replace('/');
  };
  const handleSignup = () => {
    router.push('/signup');
  };
  const handleGuest = () => {
    localStorage.setItem('guest', 'true');
    localStorage.removeItem('authenticated');
    router.replace('/explore');
  };
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden" style={{backgroundColor: 'white'}}>
      {/* Black overlay over background image */}
      <img src="/background image(landing page).png" alt="Elegant house background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-40" style={{pointerEvents: 'none'}} />
      <div className="absolute inset-0 w-full h-full bg-black z-10 opacity-30 pointer-events-none" />
      {/* Top right logo */}
      <div className="absolute top-6 right-8 z-20">
        <img src="/logo-landingpage.png" alt="GharBari logo" className="w-20 h-20" />
      </div>
      {/* Top section with title and description */}
      <div className="w-full flex flex-col items-center pt-12 pb-8 z-30 relative mt-20">
        <h1 className="text-5xl font-extrabold text-black mb-2 font-serif">GharBari</h1>
        <p className="text-lg text-gray-700 mb-2 text-center max-w-xl">Your trusted partner in finding the perfect property. We provide tailored real estate solutions and personalized experiences to meet your unique needs and aspirations.</p>
      </div>
      {/* Centered card (blue box area) */}
      <div className="bg-black rounded-2xl shadow-lg p-10 flex flex-col items-center z-30 relative mt-32">
        <button onClick={handleLogin} className="w-64 py-3 mb-4 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-100 transition transform hover:scale-105 hover:shadow-2xl focus:scale-105 focus:shadow-2xl">Login</button>
        <button onClick={handleSignup} className="w-64 py-3 mb-4 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-100 transition transform hover:scale-105 hover:shadow-2xl focus:scale-105 focus:shadow-2xl">Sign Up</button>
        <button onClick={handleGuest} className="w-64 py-3 bg-gray-200 text-black font-semibold rounded-lg shadow hover:bg-gray-300 transition transform hover:scale-105 hover:shadow-2xl focus:scale-105 focus:shadow-2xl">Continue as Guest</button>
      </div>
      {/* Add spacer to push footer down */}
      <div style={{ minHeight: '40vh' }} />
      <Footer />
    </div>
  );
} 