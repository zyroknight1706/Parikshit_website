import React from 'react';

const ODHS = () => {
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
         On-Board Data Handling Subsystem (ODHS)
        </h1>
        <p
          style={{
            color: 'white',
            textAlign: 'left',
            fontSize: '24px', // Increase font size to 24px
          }}
        >
          Aims to ensure seamless and orderly functioning of satellite parts. Data received from the satellite is processed and interpreted for understanding and use. They are responsible for the satellite's smooth functioning throughout: giving tasks using a RTOS and maintaining a link between the hardware components.
      </p>
      </div>
    </div>
  );
};

export default ODHS;