import React from 'react';
import Image from 'next/image';
import bg from './bg.png';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import Challenge from '@/components/Challenge';
import SideImg from './SideImg.png';
import Q1_p1 from './q1_pic1.png';
import Q1_p2 from './q1_pic2.png';
import Q1_p3 from './q1_pic3.png';
import Q2_p1 from './q2_pic1.png';

const EPSHeroData = {
  bgImg: bg,
  readHREF: '#recruitments',
  whiteBg: true,
  mainTitle: 'Electronics and Power Subsystem',
  quote: '"Now I am Become Short, The Destroyer of Boards"',
  addAuth: false,
};

const Quote = () => {
  return <i>Solder fumes are injurious to health (PSA)...</i>;
};

const UpperDesc = () => {
  return (
    <p className="mt-6 text-xl leading-8 text-stone-200 font-black text-justify">
      <strong className='text-indigo-600'>
        The Electronics and Power Subsystem or EPS
      </strong>{' '}
      is responsible for the generation, distribution and regulation of power on the satellite. In addition to this, we also design all onboard circuitry and PCBs in-house.
    </p>
  );
};

const LowerDesc = () => {
  return (
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="max-w-xl text-xl leading-7 text-stone-200 lg:max-w-lg text-justify">
          We build everything from flight controllers to radio boards, all customized for our specifications. We also deal with solar panels, batteries and the power distribution network.
        </div>
      </div>
    </div>
  );
};

const EPSSummaryData = {
  quote: Quote,
  upperDesc: UpperDesc,
  sideImg: SideImg,
  lowerDesc: LowerDesc,
};




const EPS = () => {
  return (
    <>
      <Hero Data={EPSHeroData} />
      <Summary Data={EPSSummaryData} />
      
    </>
  );
};

export default EPS;
