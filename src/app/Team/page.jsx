import React from 'react';
import './Team.css'; // Import custom CSS file
import { FaLinkedin } from 'react-icons/fa'; // Import GitHub and LinkedIn icons

const teamMembers = [
  {
    name: 'Arnav Marwaha',
    role: 'System Engineer',
    image: '/timages/image14.jpg',
    //github: 'https://github.com/arnavmarwaha',
    linkedin: 'https://www.linkedin.com/in/arnavmarwaha/',
  },
  {
    name: 'Srishti Singh',
    role: 'System Engineer',
    image: '/timages/image21.jpg',
    //github: 'https://github.com/srishtisingh',
    linkedin: 'https://www.linkedin.com/in/srishtisingh/',
  },
  {
    name: 'Abhay Sharma',
    role: 'System Engineer',
    image: '/timages/image12.jpg',
    //github: 'https://github.com/abhaysharma',
    linkedin: 'https://www.linkedin.com/in/abhaysharma/',
  },
  {
    name: 'Yash Srivastava',
    role: 'System Admin',
    image: '/timages/image16.jpg',
    //github: 'https://github.com/yashsrivastava',
    linkedin: 'https://www.linkedin.com/in/yashsrivastava/',
  },
  {
    name: 'Ankit Mishra',
    role: 'ADCS Subsystem Head',
    image: '/timages/image20.jpg',
    //github: 'https://github.com/ankitmishra',
    linkedin: 'https://www.linkedin.com/in/ankitmishra/',
  },
  {
    name: 'Prem Vineet Dhanikonda',
    role: 'COMMS Subsystem Head',
    image: '/timages/image11.jpg',
    //github: 'https://github.com/premvineet',
    linkedin: 'https://www.linkedin.com/in/premvineet/',
  },
  {
    name: 'Aniket Pachaury',
    role: 'EPS Subsystem Head',
    image: '/timages/image5.jpg',
    //github: 'https://github.com/aniketpachaury',
    linkedin: 'https://www.linkedin.com/in/aniketpachaury/',
  },
  {
    name: 'Rishit Mukherjee',
    role: 'EPS Subsystem Head',
    image: '/timages/image17.jpg',
    //github: 'https://github.com/rishitmukherjee',
    linkedin: 'https://www.linkedin.com/in/rishitmukherjee/',
  },
  {
    name: 'Swetha M.R',
    role: 'Management Subsystem Head',
    image: '/timages/image23.jpg',
    //github: 'https://github.com/swethamr',
    linkedin: 'https://www.linkedin.com/in/swethamr/',
  },
  {
    name: 'Atulya Mishra',
    role: 'ADCS Team Member',
    image: '/timages/image3.jpg',
    //github: 'https://github.com/atulyamishra',
    linkedin: 'https://www.linkedin.com/in/atulyamishra/',
  },
  {
    name: 'Pranav Lakshmanan',
    role: 'ADCS Team Member',
    image: '/timages/image24.jpg',
    //github: 'https://github.com/pranavlakshmanan',
    linkedin: 'https://www.linkedin.com/in/pranavlakshmanan/',
  },
  {
    name: 'Sudeeksha Bhattacharyya',
    role: 'ADCS Team Member',
    image: '/timages/image2.jpg',
    //github: 'https://github.com/sudeekshab',
    linkedin: 'https://www.linkedin.com/in/sudeekshab/',
  },
  {
    name: 'Visalakshi S',
    role: 'ADCS Team Member',
    image: '/timages/image24.jpg',
    //github: 'https://github.com/visalakshi',
    linkedin: 'https://www.linkedin.com/in/visalakshi/',
  },
  {
    name: 'Pragadeeshwaran U K',
    role: 'COMMS Team Member',
    image: '/timages/image15.jpg',
    //github: 'https://github.com/pragadeeshwaran',
    linkedin: 'https://www.linkedin.com/in/pragadeeshwaran/',
  },
  {
    name: 'Nidhi Hegde',
    role: 'COMMS Team Member',
    image: '/timages/image18.jpg',
    //github: 'https://github.com/nidhihegde',
    linkedin: 'https://www.linkedin.com/in/nidhihegde/',
  },
  {
    name: 'Jayant Sharma',
    role: 'COMMS Team Member',
    image: '/timages/image199.jpg',
    //github: 'https://github.com/jayanthsharma',
    linkedin: 'https://www.linkedin.com/in/jayanthsharma/',
  },
  {
    name: 'Akshay ',
    role: 'EPS Team Member',
    image: '/timages/image17.jpg',
    //github: 'https://github.com/akshay',
    linkedin: 'https://www.linkedin.com/in/akshay/',
  },
  {
    name: 'Ritika Salimath',
    role: 'ODHS Team Member',
    image: '/timages/image13.jpg',
    //github: 'https://github.com/ritikasalimath',
    linkedin: 'https://www.linkedin.com/in/ritikasalimath/',
  },
  {
    name: 'Aanya Shantaram',
    role: 'ODHS Team Member',
    image: '/timages/image1000.jpg',
    //github: 'https://github.com/aanyashantaram',
    linkedin: 'https://www.linkedin.com/in/aanyashantaram/',
  },
  {
    name: 'Sashwat Harsh',
    role: 'ODHS Team Member',
    image: '/timages/image1000.png',
    //github: 'https://github.com/sashwatharsh',
    linkedin: 'https://www.linkedin.com/in/sashwatharsh/',
  },
  {
    name: 'Rachit',
    role: 'ODHS Team Member',
    image: '/timages/image10.png',
    //github: 'https://github.com/rachit',
    linkedin: 'https://www.linkedin.com/in/rachit/',
  },
  {
    name: 'Soham Singh',
    role: 'ODHS Team Member',
    image: '/timages/image4.jpg',
    //github: 'https://github.com/sohamsingh',
    linkedin: 'https://www.linkedin.com/in/sohamsingh/',
  },
  {
    name: 'Nishitha',
    role: 'ODHS Team Member',
    image: '/timages/image19.png',
    //github: 'https://github.com/nishitha',
    linkedin: 'https://www.linkedin.com/in/nishitha/',
  },
  {
    name: 'Prathmesh',
    role: 'ODHS Team Member',
    image: '/timages/image6.png',
    //github: 'https://github.com/prathmesh',
    linkedin: 'https://www.linkedin.com/in/prathmesh/',
  },
  {
    name: 'Siddhartha Chhauda',
    role: 'Payload Team Member',
    image: '/timages/image9.jpg',
    //github: 'https://github.com/sidharthchhauda',
    linkedin: 'https://www.linkedin.com/in/sidharthchhauda/',
  },
  {
    name: 'Shrihar Pande',
    role: 'Payload Team Member',
    image: '/timages/image1.jpg',
    //github: 'https://github.com/shriharpande',
    linkedin: 'https://www.linkedin.com/in/shriharpande/',
  },
  {
    name: 'Roselin Maria',
    role: 'Payload Team Member',
    image: '/timages/image8.png',
    //github: 'https://github.com/roselinmaria',
    linkedin: 'https://www.linkedin.com/in/roselinmaria/',
  },
  {
    name: 'Asna Kidwai',
    role: 'Payload Team Member',
    image: '/timages/image7.jpg',
    //github: 'https://github.com/asnakidwai',
    linkedin: 'https://www.linkedin.com/in/asnakidwai/',
  },
  {
    name: 'Mokshagna Naidu',
    role: 'Management Team Member',
    image: '/timages/image22.jpg',
    //github: 'https://github.com/mokshagnanaidu',
    linkedin: 'https://www.linkedin.com/in/mokshagnanaidu/',
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <div className="content-wrapper">
        <h1 className="title">Our Team</h1>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <div className="team-links">
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="team-link">
                    <FaGithub className="icon github-icon" />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-link">
                    <FaLinkedin className="icon linkedin-icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
