'use client';

import React, { useState } from 'react';

// --- Reusable Icon Components ---
const HouseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const UploadIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
);


// --- Reusable Button Component ---
const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => (
    <button
        className={`rounded-full bg-teal-600 text-white font-bold py-3 px-6 hover:bg-teal-700 transition-transform duration-300 hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
        {...props}
    >
        {children}
    </button>
);

// --- Header & Footer ---
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

// --- Form Input Components ---
const FormInput = (props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => (
    <div>
        <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-2">{props.label}</label>
        <input {...props} className={`w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${props.className}`} />
    </div>
);

const FormTextarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) => (
    <div>
        <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-2">{props.label}</label>
        <textarea {...props} rows={4} className={`w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${props.className}`} />
    </div>
);

const FormSelect = (props: React.SelectHTMLAttributes<HTMLSelectElement> & { label: string, children: React.ReactNode }) => (
    <div>
        <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-2">{props.label}</label>
        <select {...props} className={`w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${props.className}`}>
            {props.children}
        </select>
    </div>
);

// --- The Main Page Component ---
export default function ListPropertyPage() {
    const [step, setStep] = useState(1);
    const totalSteps = 4;

    const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
    const prevStep = () => setStep(s => Math.max(1, s - 1));

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header />
            <main className="pt-32 pb-16 flex-1">
                <div className="container mx-auto max-w-4xl px-4 flex-1 flex flex-col">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold font-serif">List Your Property</h1>
                        <p className="text-lg text-gray-600 mt-2">Reach thousands of potential tenants in just a few clicks.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                        {/* Progress Bar */}
                        <div className="mb-8">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium text-gray-600">Step {step} of {totalSteps}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: `${(step / totalSteps) * 100}%` }}></div>
                            </div>
                        </div>

                        {/* Form Steps */}
                        <form>
                            {step === 1 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold font-serif">Basic Information</h2>
                                    <FormInput label="Property Title" id="title" placeholder="e.g., Cozy 2-Bedroom Apartment in Banani" />
                                    <FormTextarea label="Description" id="description" placeholder="Describe your property in detail..." />
                                    <FormSelect label="Property Type" id="type">
                                        <option>Select Type</option>
                                        <option>Apartment</option>
                                        <option>House</option>
                                        <option>Office</option>
                                        <option>Shop</option>
                                    </FormSelect>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold font-serif">Details & Amenities</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <FormInput label="Price (BDT per month)" id="price" type="number" placeholder="50000" />
                                        <FormInput label="Area (sqft)" id="area" type="number" placeholder="1200" />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <FormInput label="Bedrooms" id="bedrooms" type="number" placeholder="3" />
                                        <FormInput label="Bathrooms" id="bathrooms" type="number" placeholder="2" />
                                    </div>
                                     <div className="flex items-center">
                                        <input id="furnished" type="checkbox" className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500" />
                                        <label htmlFor="furnished" className="ml-2 block text-sm text-gray-900">Is this property furnished?</label>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6">
                                     <h2 className="text-2xl font-bold font-serif">Location</h2>
                                    <FormInput label="Full Address" id="address" placeholder="House No, Road No, Area" />
                                    <div className="grid md:grid-cols-2 gap-6">
                                       <FormInput label="City" id="city" placeholder="e.g., Dhaka" />
                                       <FormInput label="Postal Code" id="postal-code" placeholder="e.g., 1212" />
                                    </div>
                                </div>
                            )}

                             {step === 4 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold font-serif">Upload Photos</h2>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                                            <div className="flex text-sm text-gray-600">
                                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-500">
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-10">
                                <Button type="button" onClick={prevStep} disabled={step === 1} className="!bg-gray-300 !text-gray-800 hover:!bg-gray-400">
                                    Previous
                                </Button>
                                {step < totalSteps ? (
                                    <Button type="button" onClick={nextStep}>
                                        Next
                                    </Button>
                                ) : (
                                     <Button type="submit">
                                        Submit Listing
                                    </Button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
} 