import React from 'react';
import bg from './bg-2.png';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import Challenge from '@/components/Challenge';
import SideImg from './SideImg.png';
import './ADCS.css';

const ADCSHeroData = {
  bgImg: bg,
  readHREF: "#recruitments",
  whiteBg: true,
  mainTitle: "Attitude Determination and Control Subsystem",
  quote: '"Star Trackers are for the weak"',
  addAuth: false,
};

const Quote = () => {
  return (
    <i>Things roll in space, deal with it...</i>
  );
};

const UpperDesc = () => {
  return (
    <p className="mt-6 text-xl leading-8 text-stone-200 font-black text-justify">
      The <strong className='text-indigo-600'>Attitude Determination and Control Subsystem (ADCS)</strong> is at the heart of the satellite's mission, overseeing crucial aspects, from orbit design to spacecraft orientation. We are responsible for:
    </p>
  );
};

const LowerDesc = () => {
  return (
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="max-w-xl text-xl leading-7 text-stone-200 lg:max-w-lg text-justify">
          <ul className='list-disc'>
            <li>Mission planning and orbital trajectory design.</li>
            <li>Stabilizing the spacecraft after launch vehicle separation.</li>
            <li>Maintaining precise satellite orientation throughout the mission.</li>
            <li>Directing the satellite for optimal solar power generation and Earth imaging.</li>
            <li>Executing the deorbiting procedure at the end of the mission.</li>
          </ul><br /><br />
          <strong className='text-indigo-600 text-2xl'>Our work involves:</strong><br /><br />
          <ul className='list-disc'>
            <li>Developing cutting-edge actuator designs and control algorithms.</li>
            <li>Applying principles of orbital dynamics.</li>
            <li>Conducting extensive simulation-based engineering.</li>
            <li>Creating accurate sensor models for spacecraft perception.</li>
          </ul><br /><br />
          As a multidisciplinary subsystem, we strike a perfect balance between hardware and software development.
        </div>
      </div>
    </div>
  );
};

const ADCSSummaryData = {
  quote: Quote,
  upperDesc: UpperDesc,
  sideImg: SideImg,
  lowerDesc: LowerDesc,
};



const ADCS = () => {
  return (
    <div className="adcs-page">
      <Hero Data={ADCSHeroData} />
      <Summary Data={ADCSSummaryData} />
    </div>
  );
};

export default ADCS;
