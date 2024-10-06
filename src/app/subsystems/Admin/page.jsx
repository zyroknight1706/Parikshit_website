import Hero from '@/components/Hero';
import React from 'react';
import Image from 'next/image';
//import PropTypes from 'prop-types'; // For prop validation
import Summary from '@/components/Summary';
import './Administration.css';

// Import images from the public folder
const bgImgSrc = "/bnhj.jpeg";
const sideImgSrc = "/SideImg.jpg";

// Hero data object
const AdminHeroData = {
  bgImg: <Image src={bgImgSrc} alt="background" layout="fill" objectFit="cover" />, // Using Next.js Image component
  readHREF: "#recruitments",
  whiteBg: true,
  isAdmin: true,
  mainTitle: "Operations and Administration Subsystem",
  quote: '',
  addAuth: false,
};

// Quote Component
const Quote = () => {
  return (
    <i>The invisible threads of coordination weave the fabric of success....</i>
  );
};

// Upper Description Component
const UpperDesc = () => {
  return (
    <p className="mt-6 text-xl leading-8 text-stone-200 font-black text-justify">
      At the heart of our organization's efficiency lies the <span className='text-indigo-600'>Operations and Administration Subsystem</span>. This integral part of our team ensures that all aspects of our digital presence run smoothly, with a focus on the following key areas:
    </p>
  );
};

// Lower Description Component
const LowerDesc = () => {
  return (
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="max-w-xl text-xl leading-7 text-stone-200 lg:max-w-lg text-justify">
          <div className="mt-8 font-black">
            <ul className='list-disc'>
              <li key="web-dev">
                <span className='text-indigo-600 font-black text-xl'>Web Development</span><br /><br />
                Our web development team is dedicated to creating and maintaining a user-friendly, responsive, and visually appealing website. We ensure that our online platform is optimized for performance, accessibility, and security, providing a seamless experience for all users.
              </li><br />
              <li key="pr">
                <span className='text-indigo-600 font-black text-xl'>Public Relations</span><br /><br />
                Effective communication is crucial for maintaining a positive image. Our PR team works tirelessly to craft messages that resonate with our audience, manage our reputation, and build strong relationships with stakeholders. We handle all press releases, media inquiries, and public statements to ensure a consistent and professional public image.
              </li><br />
              <li key="social-media">
                <span className='text-indigo-600 font-black text-xl'>Social Media Management</span><br /><br />
                In today’s digital age, social media is a powerful tool for engagement. Our social media team curates content, interacts with our audience, and monitors trends to keep our online presence dynamic and engaging. We handle all aspects of social media, from content creation to analytics, ensuring that our message reaches the right audience at the right time.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Summary data object
const AdminSummaryData = {
  quote: <Quote />, // Rendered as JSX
  upperDesc: <UpperDesc />, // Rendered as JSX
  sideImg: <Image src={sideImgSrc} alt="Side Image" width={500} height={500} />, // Using Next.js Image component
  lowerDesc: <LowerDesc />, // Rendered as JSX
};

// Hero component prop type validation
Hero.propTypes = {
  data: PropTypes.object.isRequired,
};

// Summary component prop type validation
Summary.propTypes = {
  data: PropTypes.object.isRequired,
};

// Main Administration Component
export default function Administration() {
  return (
    <div className="administration-page">
      <Hero data={AdminHeroData} />
      <Summary data={AdminSummaryData} />
    </div>
  );
}
