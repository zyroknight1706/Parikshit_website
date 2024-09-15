import React from 'react';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import Challenge from '@/components/Challenge';
import bg from './bg.jpeg';
import SideImg from './SideImg.jpeg';
import Image from 'next/image';
import q3_pic1 from './q3_pic1.jpeg';
import q3_pic2 from './q3_pic2.jpeg';
import q3_pic3 from './q3_pic3.jpeg';
import './STMS.css';

// Hero Section Data
const STMSHeroData = {
  bgImg: bg,
  readHREF: "#recruitments",
  whiteBg: true,
  mainTitle: "Structures, Thermals and Mechanisms Subsystem",
  quote: '"In space, no one can hear you weld"',
  addAuth: false,
};

// Quote Component
const Quote = () => (
  <i>Yes, we do mechanical engineering, no it's not cooler than cars....</i>
);

// Upper Description Component
const UpperDesc = () => (
  <p className="mt-6 text-xl leading-8 text-stone-200 font-black text-justify">
    The <strong className='text-indigo-600'>mechanical</strong> subsystem in Parikshit consists of three segments: <strong className='text-indigo-600'>Structures, Thermals and Mechanisms.</strong> The broad function of this subsystem is to design the body of the satellite and mount all components on it, shielding them well from vibration and excessive temperatures.
  </p>
);

// Lower Description Component
const LowerDesc = () => (
  <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
    <div className="lg:pr-4">
      <div className="max-w-xl text-xl leading-7 text-stone-200 lg:max-w-lg">
        It manages control of the internal thermal environment at all times and designs mechanisms crucial to the working of components.
      </div>
    </div>
  </div>
);

// Summary Section Data
const STMSSummaryData = {
  quote: Quote,
  upperDesc: UpperDesc,
  sideImg: SideImg,
  lowerDesc: LowerDesc,
};

// Challenge Context Com

// Main STMS Component
const STMS = () => (
  <div className="stms-page">
    <Hero Data={STMSHeroData} />
    <Summary Data={STMSSummaryData} />

  </div>
);

export default STMS;

