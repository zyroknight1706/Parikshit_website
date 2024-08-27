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

// Challenge Context Component (Empty for now)
const STMSChallengeContext = () => null;

// Challenge Questions Component
const STMSChallengeQuestions = () => (
  <div className="text-justify">
    <div className="text-center mt-16">
  <span className='text-indigo-600 text-2xl'>Hurry Up! </span><br /><br />
  <strong className='text-indigo-600 text-xl'>
    The last submission will be accepted on 11<sup>th</sup> September 11:59 pm
  </strong><br /><br />
</div>

    <span className='text-indigo-600 font-bold text-center text-3xl'>Questions:</span>
    <br /><br />
    <ul className='list-inside'>
      <li>
        <strong className='text-indigo-600 text-2xl'>Question 1:</strong>
        <br /><br />
        <ol className='list-[upper-roman] list-inside ps-10'>
          <li>Your satellite has a shear panel that has dimensions 2 x 0.5 x 0.02 m³. You measure the temperature at both large faces of the plate, which are constantly held at temperatures of 100 K and 25 K respectively. Find the heat transfer rate through the plate and also find the steady state temperature at a point 0.02 m away from the colder face. Thermal conductivity of the plate material is 200 W/m·K.</li>
          <br /><br />
          <li>You have two surfaces in a satellite perpendicular to each other with a common edge of length 2 m. Surface 1 has width 3 m and surface 2 has width 4 m. Surface 1 has a constant temperature of 500 K and surface 2 has constant temperature of 300 K. Assuming both surfaces to be black bodies, find the net heat transfer between surface 1 and surface 2.</li>
        </ol>
        <br /><br /><br />
      </li>
      <li>
        <strong className='text-indigo-600 text-2xl'>Question 2:</strong>
        <br /><br />
        You have a spool that will be ejected from a satellite using a burn wire mechanism. The spool of mass 100 grams is held in place with the burn wire tied to a loop at its centre. There are three springs compressed in parallel when the spool is in the un-ejected state. When ejected, we want the spool to have a velocity of 5 m/s after 2 seconds. The initial velocity of the spool is 2 m/s. Find the mean, inner and outer diameters, total number of turns, solid and free lengths, pitch, and spring constant of the springs to be used.
        <br />
        The springs must have square and ground ends, spring index = 6, maximum allowable shear stress of the material is 1240 MPa, shear modulus of the material is 0.07845 MPa, the springs are deflected by 10 mm when compressed and the clearance between coils in the uncompressed position should be 20% of total deflection.
        <br />
        Also, find the minimum diameter of the burn wire if the material has a yield strength of 2 MPa.
        <br /><br /><br />
      </li>
      <li>
        <strong className='text-indigo-600 text-2xl'>Question 3:</strong>
        <br /><br />
        Density of the material used is 2700 kg/m³, find the weight of the structure. All dimensions are in millimetres.
        <br /><br />
        <Image src={q3_pic1} alt="Question 3 Image 1" />
        <br />
        <Image src={q3_pic2} alt="Question 3 Image 2" />
        <br />
        <Image src={q3_pic3} alt="Question 3 Image 3" />
        <br />
      </li>
    </ul>
  </div>
);

// Challenge Section Data
const STMSChallengeData = {
  challengeContext: STMSChallengeContext,
  challengeQuestions: STMSChallengeQuestions,
};

// Main STMS Component
const STMS = () => (
  <>
    <Hero Data={STMSHeroData} />
    <Summary Data={STMSSummaryData} />
    <Challenge Data={STMSChallengeData} />
  </>
);

export default STMS;
