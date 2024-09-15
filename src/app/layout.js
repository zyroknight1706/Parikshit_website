"use client";

import { Roboto_Mono } from "next/font/google";
import { usePathname } from "next/navigation"; // Import usePathname to check the current path
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const roboto_mono = Roboto_Mono({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700'] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setTimeout(() => {
        setLoading(false);
      }, 3000); // Adjust the duration as needed
    } else {
      setLoading(false);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        {loading && pathname === "/" && <LoadingScreen />} {/* Show loading screen only on home page */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
