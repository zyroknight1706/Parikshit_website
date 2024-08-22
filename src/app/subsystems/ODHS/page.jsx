import React from 'react'
import bg from "./bg.jpeg"
import Hero from '@/components/Hero'
import Summary from '@/components/Summary'
import Challenge from '@/components/Challenge'
import SideImg from './SideImg.jpeg'

const ODHSHeroData = {
  bgImg: bg,
  readHREF: "#recruitments",
  whiteBg: true,
  mainTitle: "Onboard Data Handling Subsystem",
  quote: '"Pushing code to space"',
  addAuth: false,
}

const Quote = () => {
  return (
    <i>We hope bugs can't live in space...</i>
  )
}

const UpperDesc = () => {
  return (
    <p className="mt-6 text-xl leading-8 text-stone-200 font-black">
      The <strong className='text-indigo-600'>On-Board Data Handling Subsystem (ODHS)</strong> is a critical component of satellite systems, designed to ensure the seamless and orderly functioning of all satellite parts. It plays a vital role in managing the flow of data, maintaining communications, and ensuring the satellite operates smoothly throughout its mission.
    </p>
  )
}

const LowerDesc = () => {
  return (
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
    <div className="lg:pr-4">
      <div className="max-w-xl text-xl leading-7 text-stone-200 lg:max-w-lg">
        <ol>
          <li>
            <span className='text-indigo-600 font-black text-xl'>Core Responsibilities:</span><br /><br />
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
          <li><br /><br />
            <span className='text-indigo-600 font-black text-xl'>Task Management with RTOS:</span><br /><br />
            <ul className='list-disc'>
              <li>
                <strong className='text-indigo-600'>Real-Time Operating System: </strong>The ODHS operates under an RTOS, ensuring timely and predictable execution of tasks, which is crucial for the satellite’s mission success.
              </li>
              <li>
                <strong className='text-indigo-600'>Task Scheduling: </strong>The RTOS dynamically schedules tasks, prioritizing critical operations like attitude control and data collection based on real-time conditions and commands from Earth.
              </li>
            </ul>
          </li>
          <li><br /><br />
            <span className='text-indigo-600 font-black text-xl'>Subsystem Coordination:</span><br /><br />
            <ul className='list-disc'>
              <li>
                <strong className='text-indigo-600'>Subsystem Interface: </strong>ODHS acts as the central hub connecting and coordinating other satellite subsystems, including power management, communication, propulsion, and attitude control.
              </li>
              <li>
                <strong className='text-indigo-600'>Command Execution: </strong>It interprets and executes commands received from Earth, directing subsystems to perform specific actions such as reorienting the satellite or transmitting data.
              </li>
            </ul>
          </li>
          <li><br /><br />
            <span className='text-indigo-600 font-black text-xl'>Communication and Data Downlink:</span><br /><br />
            <ul className='list-disc'>
              <li>
                <strong className='text-indigo-600'>Maintaining Communication Links: </strong>ODHS ensures consistent communication between the satellite and ground stations, managing data formatting and transmission protocols.
              </li>
              <li>
                <strong className='text-indigo-600'>Data Downlink Management: </strong>It optimizes data transmission timing to maintain efficient communication with Earth.
              </li>
            </ul>
          </li>
          <li><br /><br />
            <span className='text-indigo-600 font-black text-xl'>Fault Detection and Management:</span><br /><br />
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
  )
}

const ODHSSummaryData = {
  quote: Quote,
  upperDesc: UpperDesc,
  sideImg: SideImg,
  lowerDesc: LowerDesc,
}

const ODHSChallengeContext = () => {
  return (
      <>
        <span className='text-indigo-600 font-bold align-middle text-center text-3xl'>Context: </span><br /><br />
        Raw data collected from sensors often needs to be processed on a satellite, and programming for such data handling on the satellite requires segmentation of the programs. This segmentation is required since the parameters of each program are very unique. A satellite contains many devices serving different purposes, and thus, many fundamental aspects of a program differ- type of data, data handling operations to be performed, the hardware devices involved, etc. In the tail end, all these programs must be brought together under the satellite’s operating system, while minimizing their footprint.
        <br /><strong className='text-indigo-600'>
        For this challenge, you must write a master program which handles files and add the following features in separate modules. The modules must return relevant process information/metadata to the master program. You must write documentation on how to use the master program and create a state diagram showing the interaction/flow between the master program and the modules. Mention error states as well.
        </strong><br />
        <u>Not all features need to be added for submission. Partial projects can be submitted regardless of progress.</u><br /><br />
        {/* write where to submit the challenge question */}
      </>
  )
}

const ODHSChallengeQuestions = () => {
  return (
    <>
      <span className='text-indigo-600 font-bold align-middle text-center text-3xl'>Questions: </span><br /><br />
      The <strong className='text-indigo-600'>main tasks</strong> must be completed <strong className='text-indigo-600'>sequentially:</strong>
      <ol className='list-decimal'><br />
        <li>
          In <strong className='text-indigo-600'>C </strong>(preferred), or <strong className='text-indigo-600'>Python </strong>(easier), write a <strong className='text-indigo-600'>master file handler</strong> that <strong className='text-indigo-600'>converts .tiff</strong> files into <strong className='text-indigo-600'>.csv</strong> files and vice versa.
        </li><br />
        <li>
          In <strong className='text-indigo-600'>C</strong>, write a separate program that adds a <strong className='text-indigo-600'>parity bit</strong> row to a given <strong className='text-indigo-600'>.csv</strong> file, where the n<super>th</super> entry in the row corresponds to the parity bit of the n<super>th</super> column. Additionally, add the ability to perform a <strong className='text-indigo-600'>parity check</strong> on a given <strong className='text-indigo-600'>.csv</strong> file.<br />
          In the <strong className='text-indigo-600'>file handler</strong>, add the functionality to run the <strong className='text-indigo-600'>parity bit addition</strong>, or the <strong className='text-indigo-600'>parity check</strong>, program on a <strong className='text-indigo-600'>.csv</strong> file, specifying the type of parity.
        </li><br />
        <li>
          In <strong className='text-indigo-600'>C</strong>, write a separate program that performs a <strong className='text-indigo-600'>blurring</strong> average using a given <strong className='text-indigo-600'>weightage</strong> on a given <strong className='text-indigo-600'>.csv</strong> file. Write another separate program that generates a <strong className='text-indigo-600'>weightage</strong> using a <strong className='text-indigo-600'>weighting function</strong> given a size <strong className='text-indigo-600'>n</strong><br />
          In the <strong className='text-indigo-600'>file handler</strong>, add the functionality to run the <strong className='text-indigo-600'>blur</strong> programs on a <strong className='text-indigo-600'>.csv</strong> file, specifying the size. The <strong className='text-indigo-600'>weighting</strong> module and the <strong className='text-indigo-600'>blurring</strong> module should be used together.
        </li><br />
        <li>
          In <strong className='text-indigo-600'>C</strong>, write a separate program that <strong className='text-indigo-600'>sorts</strong> all the rows of a given <strong className='text-indigo-600'>.csv</strong> in ascending or descending order. Use a <strong className='text-indigo-600'>suitable sorting algorithm</strong> based on metrics such as memory usage, time duration, no. of swaps, etc.<br />
          In the <strong className='text-indigo-600'>file handler</strong>, add the functionality to run the <strong className='text-indigo-600'>sorting algorithm</strong> program, specifying the order.
        </li><br />
        <li>
          In <strong className='text-indigo-600'>any compiled language</strong>, such as <strong className='text-indigo-600'>C</strong>, write a separate program that filters a <strong className='text-indigo-600'>.csv</strong> using the original <strong className='text-indigo-600'>Kuwahara filter</strong> set to a size <strong className='text-indigo-600'>n</strong> and outputs the result in another <strong className='text-indigo-600'>.csv</strong> file without changin the original <strong className='text-indigo-600'>.csv</strong>.<br />
          In the <strong className='text-indigo-600'>file handler</strong>, add the functionality to run the <strong className='text-indigo-600'>filter</strong> program on a <strong className='text-indigo-600'>.csv</strong> file, specifying the size and the name of the generated <strong className='text-indigo-600'>.csv</strong> file.
        </li>
      </ol><br /><br />
      <u>You can also attempt these <strong className='text-indigo-600'>supplemental tasks</strong> in any order (<strong className='text-indigo-600'>non-sequential</strong>), as long as the relevant <strong className='text-indigo-600'>main task</strong> has been completed:</u><br /><br />
      <ul className='list-disc'>
        <li>
          Add support for other image formats, such as <strong className='text-indigo-600'>.png</strong>, in the conversion. <strong className='text-indigo-600'>[Main task A]</strong>
        </li><br />
        <li>
          Add a <strong className='text-indigo-600'>log</strong> of changes and tasks performed in a <strong className='text-indigo-600'>XLCS or Excel</strong> file maintained by the <strong className='text-indigo-600'>file handler. [Main task A]</strong>
        </li><br />
        <li>
          Add the ability to choose and execute other types of <strong className='text-indigo-600'>blurs. [Main task C]</strong>
        </li><br />
        <li>
          Add the ability to sort <strong className='text-indigo-600'>n</strong> no. of rows together as one. <strong className='text-indigo-600'>[Main task D]</strong>
        </li><br />
        <li>
          Add the ability to automatically select between additional sorting algorithms based on size of data. <strong className='text-indigo-600'>[Main Task D]</strong>
        </li><br />
        <li>
          Add the ability to choose and execute other variants of the <strong className='text-indigo-600'>Kuwahara filter</strong> on the <strong className='text-indigo-600'>.csv</strong> file. <strong className='text-indigo-600'>[Main task E]</strong>
        </li><br />
      </ul>
    </>
  )
}

const ODHSChallengeData = {
  challengeContext: ODHSChallengeContext,
  challengeQuestions: ODHSChallengeQuestions,
}

const ODHS = () => {
  return (
    <>
    <Hero Data={ ODHSHeroData } />
    <Summary Data={ ODHSSummaryData } />
    <Challenge Data={ ODHSChallengeData } />
    </>
  )
}

export default ODHS