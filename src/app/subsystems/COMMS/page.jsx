import React from 'react';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import Challenge from '@/components/Challenge';
import bg from './bg.jpeg';
import SideImg from './SideImg.jpeg';
import './COMMS.css';

// Hero Section Data
const COMMSHeroData = {
  bgImg: bg,
  readHREF: "#recruitments",
  whiteBg: false,
  mainTitle: "Communications and Ground Station Subsystem",
  quote: '"Tune down the noises and strengthen your signal"',
  addAuth: false,
};

// Quote Component
const Quote = () => (
  <i>Houston...</i>
);

// Upper Description Component
const UpperDesc = () => (
  <p className="mt-6 text-xl leading-8 text-stone-200 font-black text-justify">
    The <span className='text-indigo-600'>Communications and Ground Station Subsystem or COMMS</span> is responsible for the team to establish a communication link between the Ground Station and the Satellite. The subsystem deals with making RF modules, building antennae, data processing, and tracking satellites from PAGOS. The main motto is to design the system in such a way that there always exists a strong link with minimal interference.
  </p>
);

// Lower Description Component (Empty for now)
const LowerDesc = () => null;

// Summary Section Data
const COMMSSummaryData = {
  quote: Quote,
  upperDesc: UpperDesc,
  sideImg: SideImg,
  lowerDesc: LowerDesc,
};

// Challenge Context Component (Empty for now)

export default function COMMS() {
  return (
    <div className="comms-page">
      <Hero Data={COMMSHeroData} />
      <Summary Data={COMMSSummaryData} />

    </div>
  );
}
