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

const EPSChallengeContext = () => {
  return (
    <div className="text-justify">
      <span className='text-indigo-600 font-bold align-middle text-center text-3xl'>
        Context:
      </span>
      <br />
      <br />
      You may solve one or all of the questions below. We are not hoping for the complete answer but will be judging your method and thought process. A partial answer is fine.
      <br />
      Submit your answers to:
      <br />
      <br />
    </div>
  );
};

const EPSChallengeQuestions = () => {
  return (
    <div className="text-justify">
      <div className="text-center mt-16">
  <span className='text-indigo-600 text-2xl'>Hurry Up! </span><br /><br />
  <strong className='text-indigo-600 text-xl'>
    The last submission will be accepted on 11<sup>th</sup> September 11:59 pm
  </strong><br /><br />
</div>

      <span className='text-indigo-600 font-bold align-middle text-center text-3xl'>
        Questions:
      </span>
      <br />
      <br />
      <ol className='list-decimal list-inside space-y-20'>
        <li className='space-y-10'>
          <span className='text-3xl mx-auto underline font-bold text-indigo-600'>
            Question 1
          </span>
          <br />
          <br />
          <span className='text-2xl underline font-bold'>
            Background
          </span>
          <br />
          <br />
          A satellite requires many sensitive sensors to estimate its attitude. One of these sensors is a magnetometer, which takes readings of the Earth’s changing magnetic field to assess the movement of the satellite.
          <br />
          <br />
          <span className='text-2xl underline font-bold'>
            Objective
          </span>
          <br />
          <br />
          Sending the magnetometer signal directly to the ADC will cause some issues. Your job is to{' '}
          <strong className='text-indigo-600'>
            design a circuit that conditions and manipulates the signal from the magnetometer
          </strong>, so that the signal can be sent into an analog-to-digital converter (ADC) and the information being sent by the magnetometer signal is preserved.
          <br />
          The process of digitizing the analog signal occurs internally in the ADC and need not be factored in for the design.{' '}
          <strong className='text-indigo-600'>You may use any component of your choice.</strong>
          <br />
          <br />
          <strong className='text-indigo-600'>
            *Submit a schematic and a simulation file, displaying the necessary output (the signal to be sent to the ADC). You may use LTSpice or Falstad for the schematics and the simulation. Hand-drawn schematics are also acceptable.<br />
            <i>A write-up explaining your design decisions is optional but preferred.</i>
          </strong>
          <br />
          <br />
          <span className='text-2xl underline font-bold'>
            System Constraints
          </span>
          <br />
          <br />
          <strong className='text-indigo-600 underline'>
            Satellite Voltage Bus:
          </strong>
          <br />
          A <strong className='text-indigo-600'>3.3V</strong> bus powers all the onboard circuitry. <strong className='text-indigo-600'>There is no negative voltage rail</strong>. All voltages are referenced to <strong className='text-indigo-600'>GND</strong>
          <br />
          <br />
          <span className='text-2xl underline font-bold'>
            Magnetometer
          </span>
          <br />
          <br />
          <ul className='list-disc list-inside ps-10'>
            <li>Output Type: Differential</li>
            <li>Output Voltage Range: <strong className="text-indigo-600">0.2mV peak-to-peak</strong></li>
          </ul>
          <br />
          <Image src={Q1_p1} alt="mag pic" />
          <br />
          <Image src={Q1_p2} alt="" />
          <br />
          <span className='text-2xl underline font-bold'>
            ADC
          </span>
          <br />
          <br />
          <Image src={Q1_p3} alt="ADC" />
          <br />
          <ul className='list-disc list-inside ps-10'>
            <li>
              Input Type: Supports a differential input. CH1+ denotes the positive input channel. CH1- denotes the negative input channel. The ADC also supports a single-ended input (can be configured by grounding either of the CH1 pins).
            </li>
            <li>
              Input Voltage Range: The ADC can accept an input voltage range of <strong className="text-indigo-600">±2.048V differentially</strong>. The minimum voltage it can detect is <strong className='text-indigo-600'>2mV</strong>.
            </li>
          </ul>
          <br />
        </li>
        <li className='space-y-10'>
          <span className='text-3xl mx-auto underline font-bold text-indigo-600'>
            Question 2
          </span>
          <br />
          <br />
          <span className='text-2xl underline font-bold'>
            Background
          </span>
          <br />
          <br />
          Cubesats often use reaction wheels to control their attitude. Reaction wheels are driven by motors, usually BLDC or PMSM; our nanosat uses BLDC motors. These motors are controlled using motor drivers; the system-level diagram of our motor driver is as shown below. <strong className="text-indigo-600">
            Motor control is achieved by sending a PWM signal of 5V amplitude at a frequency of 10 kHz to the driver.
          </strong>
          The duty cycle of this signal is proportional to the RPM of the motor, whose speed is constant, KV is <strong className="text-indigo-600">1000 RPM/V</strong>
          <br />
          <br />
          <Image src={Q2_p1} alt="motor driver pic" />
          <br />
          <br />
          <span className='text-2xl underline font-bold'>
            Objective
          </span>
          <br />
          <br />
          <strong className='text-indigo-600'>
            Design a circuit that generates the controlling signal, such that the RPM of the motor can be varied from 0% to 100%.
            <br />
            <br />
            *Submit a schematic and a simulation file, displaying the necessary output (the control signal). You may use LTSpice or Falstad for the schematics and the simulation. Hand-drawn schematics are also acceptable.<br />
            A write-up explaining your design decisions is optional but preferred.
            <br />
            <br />
            Bonus:
          </strong>
          The motor driver outputs a square wave, whose frequency ranges from <strong className='text-indigo-600'>0Hz to 500Hz</strong> which must be read to determine the speed of the motor shaft. This square wave is generated by a hall sensor embedded within the motor, which emits a high pulse each time the north pole of the rotor crosses it. Assume the rotor has <strong className='text-indigo-600'>1 pole pair</strong> (i.e., one north and one south).
          <br />
          <br />
          <strong className='text-indigo-600'>
            Design a system that takes this square wave as an input and returns the RPM of the motor. You may use an Arduino or any other microcontroller of your choice.
            <br />
            <br />
            *Submission must be through Tinkercad. Comments explaining your code are preferred.
          </strong>
        </li>
      </ol>
      <br />
      <br />
      Falstad: <a className='text-indigo-600 underline hover:text-white' href="https://www.falstad.com/circuit/">
        https://www.falstad.com/circuit/
      </a>
      <br />
      Tinkercad: <a className='text-indigo-600 underline hover:text-white' href="https://www.tinkercad.com/circuits">
        https://www.tinkercad.com/circuits
      </a>
      <br />
      LTSpice: <a className='text-indigo-600 underline hover:text-white' href="https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html">
        https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html
      </a>
    </div>
  );
};

const EPSChallengeData = {
  challengeContext: EPSChallengeContext,
  challengeQuestions: EPSChallengeQuestions,
};

const EPS = () => {
  return (
    <>
      <Hero Data={EPSHeroData} />
      <Summary Data={EPSSummaryData} />
      <Challenge Data={EPSChallengeData} />
    </>
  );
};

export default EPS;
