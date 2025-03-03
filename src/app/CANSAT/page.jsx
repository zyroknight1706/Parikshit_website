"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './CANSAT.css';

const CANSATPage = () => {
  // Effect for animations on page load
  useEffect(() => {
    // Function to check if element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Function to handle scroll animations
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      animatedElements.forEach((element) => {
        if (isInViewport(element) && !element.classList.contains('animated')) {
          element.classList.add('animated');
        }
      });
    };

    // Initial check for elements in viewport
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Add floating animation to particles
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
      particle.style.animationDelay = `${index * 0.2}s`;
    });

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="cansat-page">
      {/* Animated stars in background */}
      <div className="stars-container">
        {[...Array(20)].map((_, index) => (
          <div 
            key={index} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`
            }}
          />
        ))}
      </div>

      <header className="cansat-header" style={{ backgroundImage: 'url("/images/cansat.png")' }}>
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1 className="animate-title">CanSat Competition</h1>
          <p className="animate-subtitle">Challenging students to design, build, and launch a space-like mission in a soda can-sized satellite</p>
        </div>
      </header>

      <div className="container">
        {/* Indian CanSat by ASI Section */}
        <section className="about-section animate-on-scroll fade-in-up">
          <h2 className="section-title">Indian CanSat Competition by ASI</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              The Indian CanSat Competition hosted by the Astronautical Society of India (ASI) is a prestigious 
              national-level competition that challenges students to design and build small satellite prototypes 
              the size of a soda can. This competition provides a unique platform for Indian students to gain 
              hands-on experience in space technology and satellite development.
            </p>
            <p>
              ASI's CanSat competition fosters innovation and practical skills in aerospace engineering among 
              Indian students, preparing the next generation of scientists and engineers for careers in India's 
              growing space sector. The competition emphasizes interdisciplinary collaboration, systems engineering, 
              and real-world problem-solving through space technology applications.
            </p>

            

            <div style={{ position: 'relative', height: '300px', borderRadius: '10px', overflow: 'hidden', marginTop: '1rem' }} className="image-zoom">
              <Image 
                src="/images/bgimg.jpg" 
                alt="Indian CanSat by ASI" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* Environmental CanSat Section */}
        <section className="about-section animate-on-scroll fade-in-up">
          <h2 className="section-title">Our Environmental CanSat</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              The Parikshit Student Satellite Team's CanSat is specifically designed as an environmental monitoring 
              system. Our innovative approach focuses on collecting crucial environmental data during its descent 
              phase, measuring parameters such as air quality, particulate matter concentration, temperature 
              gradients, humidity levels, and atmospheric pressure at different altitudes.
            </p>
            <p>
              Our environmental CanSat is equipped with state-of-the-art sensors that can detect various pollutants 
              and greenhouse gases, providing valuable data for environmental research. The collected information 
              is processed through our custom-designed algorithms that analyze pollution patterns and environmental 
              conditions in real-time, offering insights into local atmospheric conditions.
            </p>
            <p>
              The mission objectives include creating detailed vertical profiles of air quality, identifying 
              pollution layers in the atmosphere, and contributing to environmental research through open-source 
              data sharing. This project demonstrates how space technologies can be applied to address pressing 
              environmental challenges on Earth.


            </p>
            <div style={{ position: 'relative', height: '300px', borderRadius: '10px', overflow: 'hidden', marginTop: '1rem' }} className="image-zoom">
              <Image 
                src="/images/img8.jpg" 
                alt="Parikshit Environmental CanSat" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* Team Information Section */}
        <section className="about-section animate-on-scroll fade-in-up">
          <h2 className="section-title">Team Information</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="info-card pulse-glow">
              <h3>Team ID: <span className="highlight">2024-ASI-CANSAT-059</span></h3>
              <h3>RTIM Number: <span className="highlight">RITM0012653</span></h3>
            </div>
            <p>
              The Parikshit Student Satellite Team from MIT Manipal consists of dedicated undergraduate students from various engineering disciplines. Our team brings together expertise in 
              aerospace engineering, electronics, mechanical design, and computer science to 
              create innovative satellite solutions.
            </p>
            <p>
              Under the guidance of faculty advisors and industry mentors, our team members work collaboratively 
              to design, build, test, and launch our environmental CanSat. Each team member plays a crucial role 
              in the development process, from conceptualization to final deployment.
            </p>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="gallery-section animate-on-scroll fade-in-up">
  <h2 className="section-title">Competition Gallery</h2>
  
  <div className="gallery-grid">
    {[
      "/images/img1.jpg",
      "/images/img2.jpg",
      "/images/img3.jpg",
      "/images/img4.jpg",
      "/images/img7.jpg",
      "/images/img6.jpg"
    ].map((imagePath, index) => (
      <div 
        key={index} 
        className="gallery-item animate-on-scroll scale-in" 
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <Image 
          src={imagePath}
          alt={`CanSat Competition Image ${index + 1}`}
          fill
          className="gallery-img"
        />
      </div>
    ))}
  </div>
</section>
      </div>
    </div>
  );
};

export default CANSATPage;
