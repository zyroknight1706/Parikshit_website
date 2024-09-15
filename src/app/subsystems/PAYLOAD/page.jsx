import React from 'react';
import abc from "./bc.jpg";
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import Challenge from '@/components/Challenge';
import SideImg from './SideImg.png';
import './PAYLOAD.css';

const PAYLOADHeroData = {
  bgImg: abc,
  readHREF: "#recruitments",
  whiteBg: true,
  mainTitle: "Payload Subsystem",
  quote: '"I am the One who Snaps!  "',
  addAuth: false,
};

const Quote = () => {
  return (
    <i>The Predator ain't got shit on us...</i>
  );
};

const UpperDesc = () => {
  return (
    <p className="mt-6 text-xl leading-8 text-stone-200 font-black text-justify">
      Our satellite mission features two innovative <strong className='text-indigo-600'>Payloads</strong>: a thermal imaging camera and an electrodynamic tether, each designed to push the boundaries of space technology.
    </p>
  );
};

const LowerDesc = () => {
  return (
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="max-w-xl text-xl leading-7 text-stone-200 lg:max-w-lg text-justify">
          <ol className="space-y-8">
            <li>
              <span className='text-indigo-600 font-black text-xl'>Primary Payload: Thermal Imaging Camera</span><br /><br />
              This camera will capture thermal Landsat images of India, processed through a blend of remote sensing techniques and AI-driven analysis. These images will provide valuable insights into environmental patterns, including climate data, urban heat islands, and cloud monitoring.
            </li>
            <li>
              <span className='text-indigo-600 font-black text-xl'>Secondary Payload: Electrodynamic Tether</span><br /><br />
              The electrodynamic tether will deorbit the satellite after the mission—something never tried before and potentially revolutionary in reducing space debris as well.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

const PAYLOADSummaryData = {
  quote: Quote,
  upperDesc: UpperDesc,
  sideImg: SideImg,
  lowerDesc: LowerDesc,
};



const PAYLOAD = () => {
  return (
    <div className="payload-page">
      <Hero Data={PAYLOADHeroData} />
      <Summary Data={PAYLOADSummaryData} />

    </div>
  );
};

export default PAYLOAD;
