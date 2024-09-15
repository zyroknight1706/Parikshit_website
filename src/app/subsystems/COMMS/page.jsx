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
const COMMSChallengeContext = () => null;

// Challenge Questions Component
const COMMSChallengeQuestions = () => (
  <div className="text-justify">
    <div className="text-center mt-16">
      <span className='bg-indigo-100 text-indigo-600 text-2xl font-bold py-2 px-4 rounded-lg'>
        Hurry Up!
      </span>
      <br /><br />
      <strong className='bg-indigo-50 text-indigo-800 text-xl font-semibold py-2 px-4 rounded-lg'>
        The last submission will be accepted on 11<sup>th</sup> September 11:59 pm
      </strong>
      <br /><br />
    </div>


    <span className='text-indigo-600 font-bold text-center text-3xl'>Questions:</span>
    <br /><br />
    <ol className='list-decimal'>
      <li>
        <strong className='text-indigo-600'>
          Design a communication system for a communication link to be established between PAGOS (Parikshit Ground Station) and the cubesat orbiting at an altitude of 500 km (LEO).
          <br /><br />
          The following are the basic goals which we require you to complete:
        </strong>
        <ul className='list-inside list-disc ps-10'>
          <li>Know the basic RF components required for a communication system.</li>
          <li>Get versed with the different terms associated with a RF link Budget.</li>
          <li>Choose an appropriate carrier frequency, modulation technique, bandwidth, and bit rate required for the data transmission.</li>
          <li>Understand the format of the data flow in order to receive your message/information in PAGOS from a satellite.</li>
          <li>Choose an appropriate Transceiver for both cubesat and PAGOS.</li>
          <li>Explore different types of antenna and find an appropriate one for PAGOS and the cubesat by considering the appropriate parameters.</li>
          <li>Make an RF Link Budget.</li>
        </ul>
        <br />
        <i className='text-indigo-600'>The scores will be based on how many goals you have accomplished and the justifications you give for it.</i>
        <br /><br />
      </li>
      <li>
        <strong className='text-indigo-600'>Design an RF Transmitter or RF Receiver architecture.</strong>
        <br /><br />
      </li>
    </ol>
  </div>
);

// Challenge Section Data
const COMMSChallengeData = {
  challengeContext: COMMSChallengeContext,
  challengeQuestions: COMMSChallengeQuestions,
};

export default function COMMS() {
  return (
    <div className="comms-page">
      <Hero Data={COMMSHeroData} />
      <Summary Data={COMMSSummaryData} />
      <Challenge Data={COMMSChallengeData} />
    </div>
  );
}
