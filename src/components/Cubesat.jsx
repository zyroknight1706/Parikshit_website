"use client";
import React, { useState, useEffect } from 'react';

const SatSummary = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Optionally set a timeout to simulate loading for the sake of UX
    const timer = setTimeout(() => setIsLoaded(true), 1000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-black">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              The Cubesat: <br />
            </h1>
            <ul className="mt-4 text-xl text-white font-bold">
              <li><span className='text-indigo-600'>Primary Payload: </span>Thermal Imaging Camera<br /><span className='text-indigo-600'>Secondary Payload: </span>Electrodynamic Tether<br /></li>
              <li><span className='text-indigo-600'>Dimensions:</span> 10x10x22.7 cm <br /></li>
              <li><span className='text-indigo-600'>Weight:</span> 2.3Kg<br /></li>
              <li><span className='text-indigo-600'>Altitude:</span> 500km (LEO) <br /></li>
              <li><span className='text-indigo-600'>Battery:</span> Li-ion 20Wh<br /></li>
              <li><span className='text-indigo-600'>Actuation System:</span> Reaction Wheel, Torquerods <br /></li>
              <li><span className='text-indigo-600'>Sensors:</span> Magnetometer, Gyro, Sun Sensors <br /></li>
            </ul>
          </div>
          <div>
            <div
              aria-hidden="true"
              className="lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute transform sm:left-1/2 sm:top-0 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 -translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className={`overflow-hidden sm:opacity-0 lg:opacity-100 ${isLoaded ? '' : 'opacity-0'}`}>
                      {!isLoaded && <div className="loading-placeholder">Loading...</div>}
                      <iframe
                        className={`pb-10 max-w-[103vw] max-h-[250vh] ${isLoaded ? '' : 'opacity-0'}`}
                        src="https://learner1850.autodesk360.com/shares/public/SH286ddQT78850c0d8a443b00bc700406c4c?mode=embed"
                        width="800"
                        height="600"
                        allowFullScreen
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        frameBorder="0"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cubesat() {
  return (
    <>
      <SatSummary />
    </>
  )
}
