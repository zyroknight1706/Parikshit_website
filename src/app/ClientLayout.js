"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the initial load has already occurred
    const initialLoad = sessionStorage.getItem("initialLoad");
    if (!initialLoad) {
      // If it's the first load, show the loading screen
      setLoading(true);
      sessionStorage.setItem("initialLoad", "true");

      // Simulate loading time (adjust as needed)
      setTimeout(() => {
        setLoading(false);
      }, 3000); // 3 seconds loading time
    } else {
      // If it's not the first load, skip the loading screen
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden"; // Disable scrolling during loading
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling after loading
    }
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && children}
    </>
  );
}
