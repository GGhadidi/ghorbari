"use client";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  const [isGuest, setIsGuest] = useState(false);
  useEffect(() => {
    // Check guest mode from localStorage
    setIsGuest(localStorage.getItem('guest') === 'true');
    // If not on login or signup, and not authenticated, redirect
    if (
      pathname !== '/login' &&
      pathname !== '/signup' &&
      !localStorage.getItem('authenticated') &&
      !localStorage.getItem('guest')
    ) {
      router.replace('/login');
    }
    // If guest, block /list-property
    if (pathname === '/list-property' && localStorage.getItem('guest') === 'true') {
      router.replace('/explore');
    }
  }, [pathname, router]);
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#2C7865" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GharBari" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} bg-[--bg-page] text-[--text-main] antialiased`}>
        {children}
      </body>
    </html>
  );
}
