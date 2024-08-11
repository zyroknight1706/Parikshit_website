import React from 'react';

const PAYLOAD = () => {
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
         PAYLOAD
        </h1>
        <p
          style={{
            color: 'white',
            textAlign: 'left',
            fontSize: '24px', // Increase font size to 24px
          }}
        >
          The satellite's mission. Parikshit has two — primary: the thermal infrared camera and secondary: passive electrodynamic tether (EDT). The camera will capture thermal images of the Indian subcontinent for climate-based data. The EDT will deorbit the satellite after the mission; something never tried before and potentially revolutionary in reducing space debris as well.
      </p>
      </div>
    </div>
  );
};

export default PAYLOAD;