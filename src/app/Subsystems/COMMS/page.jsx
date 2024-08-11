import React from 'react';

const COMMS = () => {
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
         Communications and Ground Station Subsystem(COMMS)
        </h1>
        <p
          style={{
            color: 'white',
            textAlign: 'left',
            fontSize: '24px', // Increase font size to 24px
          }}
        >
            Responsible for the exchange of information to and fro and on-board the satellite. The PAGOS can track and receive the beacon of currently operational satellites transmitting in the ham radio frequencies. It uses two RF antennae to establish a connection.
        </p>
      </div>
    </div>
  );
};

export default COMMS;