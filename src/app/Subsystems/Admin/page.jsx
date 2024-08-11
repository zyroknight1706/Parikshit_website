import React from 'react';

const MANAGEMENT = () => {
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
         MANAGEMENT
        </h1>
        <p
          style={{
            color: 'white',
            textAlign: 'left',
            fontSize: '24px', // Increase font size to 24px
          }}
        >Management handles the backend operations of the team. They do logistical work like filing for reimbursement and getting permission and guidance from the authorities, and are points of contact for external entities. They also help maintain a steady stream of communication across subsystems . Another responsibility is to create and manage social media content, keeping it relevant around space technology.
        </p>
      </div>
    </div>
  );
};

export default MANAGEMENT;