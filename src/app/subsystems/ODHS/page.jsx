import React from 'react';
import bg from './bg.jpeg';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import Challenge from '@/components/Challenge';
import SideImg from './SideImg.jpeg';

const ODHSHeroData = {
  bgImg: bg,
  readHREF: '#recruitments',
  whiteBg: true,
  mainTitle: 'Onboard Data Handling Subsystem',
  quote: '"Pushing code to space"',
  addAuth: false,
};

const Quote = () => {
  return <i>We hope bugs can't live in space...</i>;
};

const UpperDesc = () => {
  return (
    <p className="mt-6 text-xl leading-8 text-stone-200 font-black text-justify">
      The <strong className='text-indigo-600'>On-Board Data Handling Subsystem (ODHS)</strong> is a critical component of satellite systems, designed to ensure the seamless and orderly functioning of all satellite parts. It plays a vital role in managing the flow of data, maintaining communications, and ensuring the satellite operates smoothly throughout its mission.
    </p>
  );
};

const LowerDesc = () => {
  return (
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="max-w-xl text-xl leading-7 text-stone-200 lg:max-w-lg text-justify">
          <ol>
            <li>
              <span className='text-indigo-600 font-black text-xl'>Core Responsibilities:</span>
              <br /><br />
              <ul className='list-disc'>
                <li>
                  <strong className='text-indigo-600'>Data Acquisition: </strong>ODHS gathers data from various sensors and instruments onboard the satellite, including telemetry (satellite health and status) and mission data (scientific measurements, imaging, etc.).
                </li>
                <li>
                  <strong className='text-indigo-600'>Data Processing: </strong>This subsystem processes the collected data, performing tasks such as error checking, compression, and formatting, ensuring it’s ready for storage or transmission.
                </li>
                <li>
                  <strong className='text-indigo-600'>Data Storage: </strong>Processed data is stored temporarily until it can be transmitted back to Earth, making efficient use of the satellite's limited memory.
                </li>
              </ul>
            </li>
            <li>
              <br /><br />
              <span className='text-indigo-600 font-black text-xl'>Task Management with RTOS:</span>
              <br /><br />
              <ul className='list-disc'>
                <li>
                  <strong className='text-indigo-600'>Real-Time Operating System: </strong>The ODHS operates under an RTOS, ensuring timely and predictable execution of tasks, which is crucial for the satellite’s mission success.
                </li>
                <li>
                  <strong className='text-indigo-600'>Task Scheduling: </strong>The RTOS dynamically schedules tasks, prioritizing critical operations like attitude control and data collection based on real-time conditions and commands from Earth.
                </li>
              </ul>
            </li>
            <li>
              <br /><br />
              <span className='text-indigo-600 font-black text-xl'>Subsystem Coordination:</span>
              <br /><br />
              <ul className='list-disc'>
                <li>
                  <strong className='text-indigo-600'>Subsystem Interface: </strong>ODHS acts as the central hub connecting and coordinating other satellite subsystems, including power management, communication, propulsion, and attitude control.
                </li>
                <li>
                  <strong className='text-indigo-600'>Command Execution: </strong>It interprets and executes commands received from Earth, directing subsystems to perform specific actions such as reorienting the satellite or transmitting data.
                </li>
              </ul>
            </li>
            <li>
              <br /><br />
              <span className='text-indigo-600 font-black text-xl'>Communication and Data Downlink:</span>
              <br /><br />
              <ul className='list-disc'>
                <li>
                  <strong className='text-indigo-600'>Maintaining Communication Links: </strong>ODHS ensures consistent communication between the satellite and ground stations, managing data formatting and transmission protocols.
                </li>
                <li>
                  <strong className='text-indigo-600'>Data Downlink Management: </strong>It optimizes data transmission timing to maintain efficient communication with Earth.
                </li>
              </ul>
            </li>
            <li>
              <br /><br />
              <span className='text-indigo-600 font-black text-xl'>Fault Detection and Management:</span>
              <br /><br />
              <ul className='list-disc'>
                <li>
                  <strong className='text-indigo-600'>Fault Monitoring: </strong>The ODHS continuously monitors the satellite's health and performance, automatically responding to detected anomalies by triggering backups or adjusting operations.
                </li>
                <li>
                  <strong className='text-indigo-600'>Redundancy Management: </strong>It manages redundant systems, ensuring that backup components are activated without interrupting satellite operations.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

const ODHSSummaryData = {
  quote: Quote,
  upperDesc: UpperDesc,
  sideImg: SideImg,
  lowerDesc: LowerDesc,
};



const ODHS = () => {
  return (
    <>
      <Hero Data={ODHSHeroData} />
      <Summary Data={ODHSSummaryData} />
      
    </>
  );
};

export default ODHS;
