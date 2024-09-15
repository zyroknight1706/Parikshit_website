"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "./../../public/Logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const FlyerLink = ({ children, href, FlyerContent, openFlyer, toggleFlyer }) => {
  const handleClick = (e) => {
    e.preventDefault();
    toggleFlyer();
  };

  return (
    <div className="relative group">
      <a
        href={href}
        className="block text-white text-base font-medium px-4 py-3 transition-all duration-500 ease-in-out hover:text-indigo-400"
        onClick={handleClick}
      >
        {children}
        <motion.span
          layout
          className={`absolute -bottom-2 left-0 right-0 h-1 origin-left rounded-full bg-gradient-to-r from-blue-500 via-purple-700 to-pink-500 transition-transform duration-300 ease-out ${
            openFlyer ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </a>
      <AnimatePresence>
        {openFlyer && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="absolute left-1/2 top-12 bg-gradient-to-r from-gray-900 to-black text-white rounded-lg shadow-lg w-[90vw] md:w-auto border border-indigo-600 overflow-hidden"
            style={{ translateX: "-50%", zIndex: 50 }}
          >
            <FlyerContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SubsystemsContent = () => {
  return (
    <div className="p-4 space-y-2 bg-gray-900 rounded-lg">
      {["ADCS", "COMMS", "EPS", "ODHS", "PAYLOAD", "STMS", "ADMIN"].map(
        (subsystem) => (
          <a
            key={subsystem}
            href={`/subsystems/${subsystem}`}
            className="block text-sm font-semibold text-white hover:bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-2 transition-all duration-300 ease-in-out"
          >
            {subsystem}
          </a>
        )
      )}
    </div>
  );
};

const TeamContent = () => {
  return (
    <div className="p-4 space-y-2 bg-gray-900 rounded-lg">
      <a
        href="/Team"
        className="block text-sm font-semibold text-white hover:bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-2 transition-all duration-300 ease-in-out"
      >
        Current Team
      </a>
      <a
        href="/Alumni"
        className="block text-sm font-semibold text-white hover:bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-2 transition-all duration-300 ease-in-out"
      >
        Alumni
      </a>
    </div>
  );
};

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleNavbar = () => {
    setIsClick(!isClick);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black p-3 shadow-lg backdrop-blur-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-white">
                <Image
                  className="block lg:w-[7vw] md:w-[6vw] w-20 transform transition-transform hover:scale-110 hover:rotate-3"
                  src={Logo}
                  alt="logo"
                />
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-end w-full space-x-6">
            <FlyerLink
              href="#"
              FlyerContent={SubsystemsContent}
              openFlyer={openDropdown === "Subsystems"}
              toggleFlyer={() => toggleDropdown("Subsystems")}
            >
              Subsystems
            </FlyerLink>
            <FlyerLink
              href="#"
              FlyerContent={TeamContent}
              openFlyer={openDropdown === "Team"}
              toggleFlyer={() => toggleDropdown("Team")}
            >
              Team
            </FlyerLink>
            {["Gallery", "Sponsors", "Research", "FAQs", "Contact Us"].map(
              (link) => (
                <a
                  key={link}
                  href={
                    link === "Research"
                      ? "/Papers"
                      : link === "Contact Us"
                      ? "/#Contact"
                      : `/${link.replace(/\s+/g, "")}`
                  }
                  className="block text-base font-medium text-white px-4 py-3 hover:bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg transition-all duration-500 ease-in-out"
                >
                  {link}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-end w-full">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300 ease-in-out"
              onClick={toggleNavbar}
            >
              {isClick ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isClick && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-gradient-to-r from-gray-900 via-black to-gray-900"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <FlyerLink
                href="#"
                FlyerContent={SubsystemsContent}
                openFlyer={openDropdown === "Subsystems"}
                toggleFlyer={() => toggleDropdown("Subsystems")}
              >
                Subsystems
              </FlyerLink>
              <FlyerLink
                href="#"
                FlyerContent={TeamContent}
                openFlyer={openDropdown === "Team"}
                toggleFlyer={() => toggleDropdown("Team")}
              >
                Team
              </FlyerLink>
              {["Gallery", "Sponsors", "Research", "FAQs", "Contact Us"].map(
                (link) => (
                  <a
                    key={link}
                    href={
                      link === "Research"
                        ? "/Papers"
                        : link === "Contact Us"
                        ? "/#Contact"
                        : `/${link.replace(/\s+/g, "")}`
                    }
                    className="block text-base font-medium text-white px-4 py-3 hover:bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg transition-all duration-500 ease-in-out"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
