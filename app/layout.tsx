import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "GharBari - Find Your Dream Space",
  description: "The best place to find houses, apartments, offices, and shops for rent across Bangladesh.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#2C7865",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "GharBari",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
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
