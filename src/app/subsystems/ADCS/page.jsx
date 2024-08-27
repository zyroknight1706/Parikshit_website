import React from 'react';
import bg from './bg-2.png';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import Challenge from '@/components/Challenge';
import SideImg from './SideImg.png';

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

const ADCSChallengeContext = () => {
  return (
    <>
    <div className="text-center mt-16">
  <span className='text-indigo-600 text-2xl'>Hurry Up ! </span><br /><br />
  <strong className='text-indigo-600 text-xl'>
    The last submission will be accepted on 11<sup>th</sup> September 11:59 pm
  </strong><br /><br />
</div>
<br/>
      <span className='text-indigo-600 font-bold align-middle text-center text-3xl'>Context: </span><br /><br />
      Our satellite orbits at an altitude of around <strong className='text-indigo-600'>500 Km</strong> from the surface of the Earth. <br />
      The satellite is completely autonomous, meaning, the satellite has to perceive itself (<strong className='text-indigo-600'>i.e., its own position, velocity with respect to both the Earth, other celestial bodies, and its own body frame</strong>) and this perception is aided by the onboard set of sensors. <br />
      <br />
      Next, it has to take actions based on this perception through the onboard actuators, whether it means pointing towards the Earth to take pictures or pointing towards the sun to gather electrical power.<br />
      <br />
      <strong className='text-indigo-600'>Now, this means that this becomes an orbital physics, control systems, embedded systems, and hardware problem, all at the same time.</strong><br />
      <br />
      <i>Therefore, all your solutions should reflect the above context; they should be realistic, efficient, and mathematically sound.</i><br />
      <br />
      <strong className='bg-red-600 p-1'>You can solve one or all of the below questions ;)</strong><br />
      <br />
      <strong className='bg-red-600 p-1'>All codes should be preferably done in MATLAB. Although even Python files or hand-written notes/calculations are completely fine, we are not looking for ONLY the answer but your method of solving.</strong><br />
      <br />
      <i>You can use ChatGPT for all of our below questions; in fact, we encourage prompt engineering, but then be prepared for the interviews based on the answers you submit.</i><br />
      <br />
      <i>Our questions have sub-questions which, if followed, can lead you to the final answer itself.</i><br /><br />
      <strong className='text-indigo-600'>Submit your challenge solutions to <a href="mailto:example@example.com" className='underline hover:text-indigo-600'>example@example.com</a></strong>
    </>
  );
};

const ADCSChallengeQuestions = () => {
  return (
    <>
      <span className='text-indigo-600 font-bold align-middle text-center text-3xl'>Questions: </span><br /><br />
      <ol className='list-decimal list-inside space-y-20'>
        <li className='space-y-10'>
          Given an initial velocity and position vectors of a satellite in orbit, determine the velocity and position after <strong className='text-indigo-600'>x seconds.</strong>
          <ol className='list-decimal list-inside ps-10'>
            <li>Compute the Keplerian elements.</li>
            <li>Find the anomalies associated with these elements.</li>
            <li>Propagate these anomalies for the given time period.</li>
            <li>Compute the final vectors in the Perifocal frame.</li>
          </ol>
        </li>
        <li className='space-y-10'>
          Given an attitude in <strong className='text-indigo-600'>ORF (Orbital Reference Frame)</strong> and an initial angular velocity of <strong className='text-indigo-600'>30 rad/s</strong>, design a controller to achieve a final angular velocity of <strong className='text-indigo-600'>0.5 rad/s</strong> post-exit from the launch vehicle, <strong className='text-indigo-600'>only using solenoid-based actuators.</strong>
          <ol className='list-decimal list-inside ps-10'>
            <li>Model a magnetic actuation device.</li>
            <li>Realize a control law based on magnetic actuation.</li>
            <li>Compute the necessary frame conversions.</li>
            <li>Combine the above computations with a suitable controller.</li>
          </ol>
        </li>
        <li className='space-y-10'>
          Design a simulation model for the onboard gyroscope of a Cubesat. Using the provided datasheet, create a model that generates realistic angular velocity measurements at a <strong className='text-indigo-600'>1 kHz rate (every 1ms).</strong> Your model should account for key sensor characteristics and error sources.
          <ol className='list-decimal list-inside ps-10'>
            <li>
              Identify key parameters from the given datasheet (e.g., range, noise density).
              (<a href='https://drive.google.com/file/d/12WwCipIzgoSdoyBGDSOUeTjcBVAuY8Bq/view?usp=sharing' className='underline hover:text-indigo-600'>Google docs link for the datasheet</a>)
            </li>
            <li>Find the anomalies associated with these elements.</li>
            <li>Propagate these anomalies for the given time period.</li>
            <li>Compute the final vectors in the Perifocal frame.</li>
          </ol>
        </li>
        <li className='space-y-10'>
          Design a Helmholtz cage test setup to simulate the magnetic environment for a <strong className='text-indigo-600'>2U Cubesat</strong> in a <strong className='text-indigo-600'>400 km Low-Earth Orbit</strong>. Focus on the cage design and field generation capabilities. Assume the magnetic field strength to be <strong className='text-indigo-600'>60 uT (60 microTesla)</strong>.
          <ol className='list-decimal list-inside ps-10'>
            <li>
              Size the Helmholtz cage:
              <ul className='list-inside list-disc ps-10'>
                <li>Calculate the dimensions based on the 2U Cubesat size (10x10x20 cm).</li>
                <li>Ensure sufficient uniform field volume.</li>
              </ul>
            </li>
            <li>
              Design the coil system:
              <ul className='list-inside list-disc ps-10'>
                <li>Specify the number of turns, wire gauge, and current requirements.</li>
              </ul>
            </li>
            <li>
              Calculate expected field uniformity:
              <ul className='list-inside list-disc ps-10'>
                <li>Determine uniformity in the test volume.</li>
              </ul>
            </li>
          </ol>
        </li>
      </ol>
      <br />
      <br />
      <i><strong>Bonus Question - While traditionally 4 reaction wheels are used in most Cubesats as a momentum transfer mechanism, come up with a single reaction wheel-based controller (we need the transfer function) that works in tandem with magnetic actuators.</strong></i>
      
      
    
    
    </>


  );
};

const ADCSChallengeData = {
  challengeContext: ADCSChallengeContext,
  challengeQuestions: ADCSChallengeQuestions,
};

const ADCS = () => {
  return (
    <>
      <Hero Data={ADCSHeroData} />
      <Summary Data={ADCSSummaryData} />
      <Challenge Data={ADCSChallengeData} />
    </>
  );
};

export default ADCS;
