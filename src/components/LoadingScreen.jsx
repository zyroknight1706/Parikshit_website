import React from "react";
import Image from "next/image";
import Logo from "./../../public/Logo.png";
import "./LoadingScreen.css"; // Import your custom CSS file for loading screen

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="logo-container">
        <div className="pulse-effect"></div>
        <Image src={Logo} alt="Logo" className="loading-logo" />
      </div>
    </div>
  );
};

export default LoadingScreen;
