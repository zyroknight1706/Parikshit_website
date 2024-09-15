import React from 'react';
import './Papers.css'; // Import custom CSS file

const papers = [
  {
    authors: 'Vedant Dubey, Avish Gupta, Shraddha Meda Sheshadri, Kanishk Ujjwal, Stephen Eric, Deeksha Sabhari Abhishek Avadhanam, Akash Kumar Singh, Chinmay Marathey, Ayush Goyal',
    year: '2020',
    title: 'Orbital Dynamics and System Analysis of Nanosatellite in Decaying Orbit',
    conference: '2020 IEEE Aerospace Conference',
    link: 'http://toc.proceedings.com/59160webtoc.pdf'
  },
  {
    authors: 'Disha Gundecha, Nishant Gavhane, Vedant Dubey, Sahil Joshi, Pranav Karve, Abhishek Avadhanam, Akash Kumar Singh, Chinmay Marathey, Ayush Goyal',
    year: '2020',
    title: 'Complete Failure Analysis of Attitude Determination and Control Subsystem',
    conference: '2021 IEEE Aerospace Conference',
    link: 'http://toc.proceedings.com/59160webtoc.pdf'
  },
  {
    authors: 'Alakh Sethi, Varun Thakurta, Nanditha Gajanur, Bhagath Singh Cheela, Kshitij Sandeep Sadasivan, Raunak Hosangadi',
    year: '2017',
    title: 'Implementation of COTS components for CubeSat applications',
    conference: '2017 IEEE Aerospace Conference',
    link: 'https://ieeexplore.ieee.org/document/7943808'
  },
  {
    authors: 'Bhagath Singh Cheela, Nirav Annavarapu, Srinivasan N. Shalini, Paliwal Pranjal, Alakh Sethi, Varun Thakurta, Kshitij Sandeep Sadasivan, Hosangadi Raunak',
    year: '2017',
    title: 'Ground system design for receiver-end RF communication in amateur band',
    conference: '2017 IEEE Aerospace Conference',
    link: 'https://ieeexplore.ieee.org/document/7943920'
  },
  {
    authors: 'Kshitij Sandeep Sadasivan, Srinivasan N. Shalini, Bhagath Singh Cheela, Nirav Annavarapu',
    year: '2017',
    title: 'Design and analysis of antennas for a nano-satellite',
    conference: '2017 IEEE Aerospace Conference',
    link: 'https://ieeexplore.ieee.org/document/7943809'
  },
  {
    authors: 'Hemant Ganti, Anirudh P Kailaje, Aniketh Ajay Kumar, Akash Paliya, Arnav Saikia, Rohan Sonkusare, Atharva Tikle',
    year: '2017',
    title: 'Design of thermal model and implementation of thermal solutions for nano satellite',
    conference: '2017 IEEE Aerospace Conference',
    link: 'https://ieeexplore.ieee.org/abstract/document/7943622'
  },
  {
    authors: 'Yadava Deigant, Vora Akshat, Hosangadi Raunak, Paliwal Pranjal, Jain Avi',
    year: '2017',
    title: 'A proposed method for lossless image compression in nano-satellite systems',
    conference: '2017 IEEE Aerospace Conference',
    link: 'https://ieeexplore.ieee.org/document/7943682'
  },
  {
    authors: 'Nirav Annavarapu, Bhagath Singh Cheela, Kshitij Sandeep Sadasivan',
    year: '2016',
    title: 'A robust low power communications architecture for nano-satellites',
    conference: '2016 IEEE Aerospace Conference',
    link: 'http://toc.proceedings.com/30787webtoc.pdf'
  },
  {
    authors: 'Abhilasha Jain, Dhananjay Sahoo, BS R Sarvani, K. Sukumar, Ritvik Gupta, Adheesh Boratkar',
    year: '2016',
    title: 'Calibration and characterization of a COTS thermal camera for space',
    conference: '2016 IEEE Aerospace Conference',
    link: 'https://ieeexplore.ieee.org/abstract/document/7500657'
  },
  {
    authors: 'Arnav Saikia',
    year: '2016',
    title: 'Promotion of Space Sciences at Undergraduate Level through the lessons learnt from Parikshit Student Satellite Model',
    conference: 'International Astronautical Congress – 2016',
    link: 'https://iafastro.directory/iac/archive/browse/IAC-16/E1/IP/31800/'
  },
  {
    authors: 'Arnav Saikia',
    year: '2016',
    title: 'Standard Framework to Increase Interest and Participation of Indian High School and Undergraduate Students in Space Sciences',
    conference: 'International Astronautical Congress – 2016',
    link: 'https://iafastro.directory/iac/paper/id/31796/abstract-pdf/IAC-16,E1,2,10,x31796.brief.pdf?2016-03-24.12:47:18'
  },
  {
    authors: 'Arnav Saikia',
    year: '2016',
    title: 'Innovative small satellite structural concept for effective system integration',
    conference: 'International Astronautical Congress – 2016',
    link: 'https://iafastro.directory/iac/archive/browse/IAC-16/E2/4/31785/'
  },
  {
    authors: 'K. Sukumar, Krishna Kinger, Thomas John, Ankur Dev, Kshitij Shashank',
    year: '2016',
    title: 'Adaptive fault tolerant architecture for enhanced reliability of small satellites',
    conference: '2016 IEEE Aerospace Conference',
    link: 'https://ieeexplore.ieee.org/document/750060'
  },
  {
    authors: 'Krishna Kinger, Rajat Agarwal, Chandrasekhar Nagarajan, Bhavya Shahi, Varun Kashyap, Nikhil Gupta',
    year: '2016',
    title: 'Using xPC Target to test the control system of a nano satellite',
    conference: '2016 IEEE Aerospace Conference',
    link: 'https://ieeexplore.ieee.org/abstract/document/7500664/similar#similar'
  },
  {
    authors: 'Nikhil Gupta, Bhavya Shahi',
    year: '2016',
    title: 'Memory architecture design for nano satellites',
    conference: '2016 IEEE Aerospace Conference',
    link: 'https://ieeexplore.ieee.org/abstract/document/7500695'
  },
  {
    authors: 'Nanditha R Gajanur, Apurva Singh, Aishwarya Jain',
    year: '2016',
    title: 'Solar powered railway track monitoring system',
    conference: '2016 IEEE International Conference on Power and Renewable Energy',
    link: 'https://ieeexplore.ieee.org/document/7871198'
  },
  {
    authors: 'Carina P Varun Kashyap, Naman Saxena, Smit Kamal, Revathi Ravula, Kaundu Rakesh',
    year: '2016',
    title: 'Software in the loop test set-up of a tethered nano-satellite',
    conference: '2016 IEEE Aerospace Conference',
    link: 'https://ieeexplore.ieee.org/document/7500603'
  },
  {
    authors: 'Arnav Saikia, Rohan Sonkusare, Atharva Tikle, Ravi Teja Varma Pericherla',
    year: '2015',
    title: 'Standard small satellite architecture for space microbiology',
    conference: 'International Astronautical Congress – 2015',
    link: 'https://iafastro.directory/iac/archive/browse/IAC-15/A1/8/31611/'
  },
  {
    authors: 'Chandrasekhar Nagarajan, Krishna Kinger, Faraz Haider, Rajat Agarwal',
    year: '2015',
    title: 'Performance analysis of micrium RTOS in the computer of a nano satellite',
    conference: '2015 IEEE Aerospace Conference',
    link: 'https://ieeexplore.ieee.org/abstract/document/7119042?section=abstract'
  },
  {
    authors: 'Abhilasha Jain, Chandrasekhar Nagarajan',
    year: '2015',
    title: 'Efficient Control Algorithm for a Smart Solar Street Light',
    conference: '9th IEEE International Conference on Next Generation Mobile Applications, Services and Technologies',
    link: 'https://ieeexplore.ieee.org/document/7373272'
  },
  {
    authors: 'Yash Vardhan Gupta, B. Kapil Bharadwaj, Adheesh Boratkar, Akash Paliya, Shubhankar Dabak, Hemant Ganti',
    year: '2015',
    title: 'Active and passive protection of Low Earth Orbit satellites from space environmental effects',
    conference: '2016 International Astronautical Congress',
    link: 'https://iafastro.directory/iac/archive/browse/IAC-15/C2/6/31059/'
  },
  {
    authors: 'Raunaq Rakesh, Smit Kamal, Carina Pereira, Naman Saxena, Revathi Ravula, Faraz Haider, Siddharth Mayya, Karun Potty',
    year: '2015',
    title: 'Verification and Validation of CubeSat Inertial Sensors',
    conference: '2015 IEEE Aerospace Conference',
    link: 'https://ieeexplore.ieee.org/document/7119344'
  },
  {
    authors: 'Akshay Kumar, Arun S, Shikha B, Ankur Dev, Akash Kumar',
    year: '2015',
    title: 'Design and Validation of a Small Satellite Thermal Control System',
    conference: '2015 IEEE Aerospace Conference',
    link: 'https://ieeexplore.ieee.org/document/7119001'
  },
  {
    authors: 'Shubham Soni, Faraz Haider, Abhilasha Jain, Naveen Mahajan, Nikhil Gupta',
    year: '2015',
    title: 'Design and testing of a high performance miniature propulsion system for a nanosatellite',
    conference: '2015 IEEE Aerospace Conference',
    link: 'https://ieeexplore.ieee.org/document/7119018'
  }
];

const Papers = () => {
  return (
    <div className="papers-container">
      <div className="content-wrapper">
        <h1 className="title">Conference Papers</h1>
        <div className="papers-list">
          {papers.map((paper, index) => (
            <div key={index} className="paper-card">
              <h2 className="paper-title">{paper.title}</h2>
              <p className="paper-authors">by {paper.authors}</p>
              <p className="paper-year-conference">
                {paper.year} | {paper.conference}
              </p>
              <a href={paper.link} target="_blank" rel="noopener noreferrer" className="paper-link">
                View Paper
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Papers;
