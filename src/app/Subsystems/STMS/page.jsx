import React from 'react';

const STMS = () => {
  return (
    <div
      className="h-screen w-full"
      style={{
        backgroundImage: 'url(/header.jpg)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '100vh',
        width: '100vw',
        zIndex: 0,
        display: 'flex', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div
        className="relative p-8 max-w-3xl mx-auto"
        style={{
          zIndex: 1,
        }}
      >
        <h1
          style={{
            color: 'white',
            textAlign: 'left',
            fontSize: '36px', // Increase font size to 36px
          }}
        >
         Structures, Thermal and Mechanisms Subsystem(STMS)
        </h1>
        <p
          style={{
            color: 'white',
            textAlign: 'left',
            fontSize: '24px', // Increase font size to 24px
          }}
        >We create and do the final assembly of the satellite, aware of external space obstacles. They will ensure the satellite can endure launch loads, survive radiation, and more. Structure must follow nanosatellite specs and they ensure the sensitive components are well-placed away from harm. They need to integrate and check smooth functioning between parts and check thermal regulation.
          </p>
      </div>
    </div>
  );
};

export default STMS;