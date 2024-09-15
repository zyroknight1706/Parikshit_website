import React from 'react';
import './Team.css'; // Import custom CSS file
import { FaLinkedin } from 'react-icons/fa'; // Import GitHub and LinkedIn icons

const teamMembers = [
  {
    name: 'Arnav Marwaha',
    role: 'System Engineer',
    image: '/timages/image14.jpg',
    //github: 'https://github.com/arnavmarwaha',
    linkedin: 'https://www.linkedin.com/in/arnav-marwaha-a7487a219/',
  },
  {
    name: 'Srishti Singh',
    role: 'System Engineer',
    image: '/timages/image21.jpg',
    //github: 'https://github.com/srishtisingh',
    linkedin: 'https://www.linkedin.com/in/srishti-singh-7bb2b5267/',
  },
  {
    name: 'Abhay Sharma',
    role: 'System Engineer',
    image: '/timages/image12.jpg',
    //github: 'https://github.com/abhaysharma',
    linkedin: 'https://www.linkedin.com/in/abhay-sharma-b8180a222/',
  },
  {
    name: 'Yash Srivastava',
    role: 'System Admin',
    image: '/timages/image16.jpg',
    //github: 'https://github.com/yashsrivastava',
    linkedin: 'https://www.linkedin.com/in/yash-srivastava-18b880240/',
  },
  {
    name: 'Ankit Mishra',
    role: 'ADCS Subsystem Head',
    image: '/timages/image20.jpg',
    //github: 'https://github.com/ankitmishra',
    linkedin: 'https://www.linkedin.com/in/ankit-mishra5204/',
  },
  {
    name: 'Prem Vineet Dhanikonda',
    role: 'COMMS Subsystem Head',
    image: '/timages/image11.jpg',
    //github: 'https://github.com/premvineet',
    linkedin: 'https://www.linkedin.com/in/prem-vineet-d-aa962b245/',
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
    linkedin: 'https://www.linkedin.com/in/rishit-mukherjee-5b0334265/',
  },
  {
    name: 'Swetha M.R',
    role: 'Management Subsystem Head',
    image: '/timages/image23.jpg',
    //github: 'https://github.com/swethamr',
    linkedin: 'https://www.linkedin.com/in/swetha-mr-651bb2270/',
  },
  {
    name: 'Atulya Mishra',
    role: 'ADCS Team Member',
    image: '/timages/image3.jpg',
    //github: 'https://github.com/atulyamishra',
    linkedin: 'https://www.linkedin.com/in/atulya-mishra-2b3952270/',
  },
  {
    name: 'Pranav Lakshmanan',
    role: 'ADCS Team Member',
    image: '/timages/image24.jpg',
    //github: 'https://github.com/pranavlakshmanan',
    linkedin: 'https://www.linkedin.com/in/pranav-lakshmanan/',
  },
  {
    name: 'Sudeeksha Bhattacharyya',
    role: 'ADCS Team Member',
    image: '/timages/image2.jpg',
    //github: 'https://github.com/sudeekshab',
    linkedin: 'https://www.linkedin.com/in/sudeeksha-bhattacharyya/',
  },
  {
    name: 'Visalakshi S',
    role: 'ADCS Team Member',
    image: '/timages/image24.jpg',
    //github: 'https://github.com/visalakshi',
    linkedin: 'https://www.linkedin.com/in/visalakshi-subramanian-3247812a6/',
  },
  {
    name: 'Pragadeeshwaran U K',
    role: 'COMMS Team Member',
    image: '/timages/image15.jpg',
    //github: 'https://github.com/pragadeeshwaran',
    linkedin: 'https://www.linkedin.com/in/pragadeesh-444/',
  },
  {
    name: 'Nidhi Hegde',
    role: 'COMMS Team Member',
    image: '/timages/image18.jpg',
    //github: 'https://github.com/nidhihegde',
    linkedin: 'https://www.linkedin.com/in/nidhi-mhegde/',
  },
  {
    name: 'Jayant Sharma',
    role: 'COMMS Team Member',
    image: '/timages/image199.jpg',
    //github: 'https://github.com/jayanthsharma',
    linkedin: 'https://www.linkedin.com/in/jayant-s-248783212/',
  },
  {
    name: 'Akshay ',
    role: 'EPS Team Member',
    image: '/timages/image17.jpg',
    //github: 'https://github.com/akshay',
    linkedin: '--',
  },
  {
    name: 'Ritika Salimath',
    role: 'ODHS Team Member',
    image: '/timages/image13.jpg',
    //github: 'https://github.com/ritikasalimath',
    linkedin: 'https://www.linkedin.com/in/ritika-salimath/',
  },
  {
    name: 'Aanya Shantaram',
    role: 'ODHS Team Member',
    image: '/timages/image1000.jpg',
    //github: 'https://github.com/aanyashantaram',
    linkedin: 'https://www.linkedin.com/in/aanya-shantaram-a9912a2aa/',
  },
  {
    name: 'Shashwat Harsh',
    role: 'ODHS Team Member',
    image: '/timages/image1000.png',
    //github: 'https://github.com/sashwatharsh',
    linkedin: 'https://www.linkedin.com/in/shash3h/',
  },
  {
    name: 'Rachit',
    role: 'ODHS Team Member',
    image: '/timages/image10.png',
    //github: 'https://github.com/rachit',
    linkedin: '--',
  },
  {
    name: 'Soham Singh',
    role: 'ODHS Team Member',
    image: '/timages/image4.jpg',
    //github: 'https://github.com/sohamsingh',
    linkedin: '--',
  },
  {
    name: 'Nishitha',
    role: 'ODHS Team Member',
    image: '/timages/image19.png',
    //github: 'https://github.com/nishitha',
    linkedin: '--',
  },
  {
    name: 'Prathmesh',
    role: 'ODHS Team Member',
    image: '/timages/image6.png',
    //github: 'https://github.com/prathmesh',
    linkedin: 'https://www.linkedin.com/in/prathamesh-aggarwal-341035279/',
  },
  {
    name: 'Siddhartha Chhauda',
    role: 'Payload Team Member',
    image: '/timages/image9.jpg',
    //github: 'https://github.com/sidharthchhauda',
    linkedin: 'https://www.linkedin.com/in/siddhartha-chhauda-b6b484311/',
  },
  {
    name: 'Shrihar Pande',
    role: 'Payload Team Member',
    image: '/timages/image1.jpg',
    //github: 'https://github.com/shriharpande',
    linkedin: 'https://www.linkedin.com/in/shrihar-pande-b866a8274/',
  },
  {
    name: 'Roselin Maria',
    role: 'Payload Team Member',
    image: '/timages/image8.png',
    //github: 'https://github.com/roselinmaria',
    linkedin: 'https://www.linkedin.com/in/roselin-maria-83900a286/',
  },
  {
    name: 'Asna Kidwai',
    role: 'Payload Team Member',
    image: '/timages/image7.jpg',
    //github: 'https://github.com/asnakidwai',
    linkedin: 'https://www.linkedin.com/in/asna-kidwai-298b44298/',
  },
  {
    name: 'Mokshagna Naidu',
    role: 'Management Team Member',
    image: '/timages/image22.jpg',
    //github: 'https://github.com/mokshagnanaidu',
    linkedin : 'https://www.linkedin.com/in/pasupuleti-mokshagna-naidu-51b679272/',
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
