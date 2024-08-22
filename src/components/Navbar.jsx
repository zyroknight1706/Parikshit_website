"use client";
import React, { useState } from "react"
import Image from "next/image"
import Logo from "./../../public/Logo.png"
import LogoText from './../../public/LogoText.png'
import { AnimatePresence, motion } from "framer-motion"

// FlyerLink component with dropdown functionality
const FlyerLink = ({ children, href, FlyerContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyer = FlyerContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyer ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-600 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyer && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%", zIndex: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-black text-white"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
            <FlyerContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Content for the Subsystems dropdown
const SubsystemsContent = () => {
  return (
    <div className="w-64 bg-black p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <a href="/subsystems/ADCS" className="block text-sm font-semibold text-white hover:bg-indigo-600 rounded-lg p-2 transition duration-300 ease-in-out">
          ADCS
        </a>
        <a href="/subsystems/COMMS" className="block text-sm font-semibold text-white hover:bg-indigo-600 rounded-lg p-2 transition duration-300 ease-in-out">
          COMMS
        </a>
        <a href="/subsystems/EPS" className="block text-sm font-semibold text-white hover:bg-indigo-600 rounded-lg p-2 transition duration-300 ease-in-out">
          EPS
        </a>
        <a href="/subsystems/ODHS" className="block text-sm font-semibold text-white hover:bg-indigo-600 rounded-lg p-2 transition duration-300 ease-in-out">
          ODHS
        </a>
        <a href="/subsystems/PAYLOAD" className="block text-sm font-semibold text-white hover:bg-indigo-600 rounded-lg p-2 transition duration-300 ease-in-out">
          PAYLOAD
        </a>
        <a href="/subsystems/STMS" className="block text-sm font-semibold text-white hover:bg-indigo-600 rounded-lg p-2 transition duration-300 ease-in-out">
          STMS
        </a>
        <a href="/subsystems/Admin" className="block text-sm font-semibold text-white hover:bg-indigo-600 rounded-lg p-2 transition duration-300 ease-in-out">
          ADMIN
        </a>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className="bg-black p-3">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-white">
                <Image className="lg:w-[7vw] md:w-[9vw] sm:w-[10vw]" src={Logo} alt="logo" />
              </a>
            </div>
            <span className="font-extrabold text-sm text-blue-500"></span>
            {/* <Image className="relative w-[10vw]" src={LogoText} alt="logo text" /> */}
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4 text-lg">
              <FlyerLink href="/" FlyerContent={SubsystemsContent}>
                Subsystems
              </FlyerLink>
              <a
                href="#Contact"
                className="text-white hover:bg-indigo-600 rounded-lg p-2 transition duration-300 ease-in-out"
              >
                Contact Us
              </a>
              {/*<a
                href="/"
                className="text-white hover:bg-indigo-600 rounded-lg p-2 transition duration-300 ease-in-out"
              >
                Join Us
              </a>
               <a
                href="/"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition duration-300 ease-in-out"
              >
                Projects
              </a> 
              <a
                href="/"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition duration-300 ease-in-out"
              >
                Team
              </a>
              */}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white
                hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
                transition duration-300 ease-in-out"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 transition duration-300 ease-in-out">
              Subsystems:<br /><br />
              <a href="/subsystems/ADCS" className="block text-sm font-semibold text-white hover:bg-indigo-600 rounded-lg p-2 transition duration-300 ease-in-out">
                ADCS
              </a>
              <a href="/subsystems/COMMS" className="block text-sm font-semibold text-white hover:bg-indigo-600 rounded-lg p-2 transition duration-300 ease-in-out">
                COMMS
              </a>
              <a href="/subsystems/EPS" className="block text-sm font-semibold text-white hover:bg-indigo-600 rounded-lg p-2 transition duration-300 ease-in-out">
                EPS
              </a>
              <a href="/subsystems/ODHS" className="block text-sm font-semibold text-white hover:bg-indigo-600 rounded-lg p-2 transition duration-300 ease-in-out">
                ODHS
              </a>
              <a href="/subsystems/PAYLOAD" className="block text-sm font-semibold text-white hover:bg-indigo-600 rounded-lg p-2 transition duration-300 ease-in-out">
                PAYLOAD
              </a>
              <a href="/subsystems/STMS" className="block text-sm font-semibold text-white hover:bg-indigo-600 rounded-lg p-2 transition duration-300 ease-in-out">
                STMS
              </a>
              <a href="/subsystems/Admin" className="block text-sm font-semibold text-white hover:bg-indigo-600 rounded-lg p-2 transition duration-300 ease-in-out">
                ADMIN
              </a>
            {/* <a
              href="/"
              className="text-white block hover:bg-white hover:text-black rounded-lg p-2 transition duration-300 ease-in-out"
            >
        
            </a>
            <a
              href="/"
              className="text-white block hover:bg-white hover:text-black rounded-lg p-2 transition duration-300 ease-in-out"
            >
              Join Us
            </a>
            <a
              href="/"
              className="text-white block hover:bg-white hover:text-black rounded-lg p-2 transition duration-300 ease-in-out"
            >
              Projects
            </a> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;  