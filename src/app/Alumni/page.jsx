import React from 'react';
import './Alumni.css'; // Import custom CSS file
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import GitHub and LinkedIn icons

const alumniMembers = [
  {
    name: 'Akash Kumar Singh',
    role: 'Advisory Board',
    image: '/images/image5.jpg',
    github: '#', // Add the correct GitHub link if available
    linkedin: '#', // Add the correct LinkedIn link if available
  },
  {
    name: 'Abhishek Avadhanam',
    role: 'Advisory Board',
    image: '/images/image2.jpg',
    github: '#', // Add the correct GitHub link if available
    linkedin: '#', // Add the correct LinkedIn link if available
  },
  {
    name: 'Chinmay Marathey',
    role: 'Advisory Board',
    image: '/images/image4.jpg',
    github: '#', // Add the correct GitHub link if available
    linkedin: '#', // Add the correct LinkedIn link if available
  },
  {
    name: 'Shivani S',
    role: 'Advisory Board',
    image: '/images/image1.jpg',
    github: '#', // Add the correct GitHub link if available
    linkedin: '#', // Add the correct LinkedIn link if available
  },
  {
    name: 'Shubhakriti Gupta',
    role: 'Advisory Board',
    image: '/images/image3.jpg',
    github: '#', // Add the correct GitHub link if available
    linkedin: '#', // Add the correct LinkedIn link if available
  },
  // Add more alumni members as needed
];

const Alumni = () => {
  return (
    <div className="alumni-container">
      <div className="content-wrapper">
        <h1 className="title">Our Distinguished Alumni</h1>
        <p className="intro">
          Our alumni have gone on to achieve great things in their careers. We are proud to showcase a few of our distinguished graduates who continue to inspire us with their achievements and contributions to the tech industry.
        </p>
        <div className="alumni-grid">
          {alumniMembers.map((member, index) => (
            <div key={index} className="alumni-card">
              <img src={member.image} alt={member.name} className="alumni-image" />
              <div className="alumni-info">
                <h3 className="alumni-name">{member.name}</h3>
                <p className="alumni-role">{member.role}</p>
                <div className="alumni-links">
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="alumni-link">
                      <FaGithub className="icon github-icon" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="alumni-link">
                      <FaLinkedin className="icon linkedin-icon" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;
