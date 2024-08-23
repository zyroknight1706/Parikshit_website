import React from 'react'
import bg from "./bg.jpeg"
import Hero from '@/components/Hero'
import Summary from '@/components/Summary'
import Challenge from '@/components/Challenge'
import SideImg from './SideImg.png'

const PAYLOADHeroData = {
  bgImg: bg,
  readHREF: "#recruitments",
  whiteBg: true,
  mainTitle: "Payload Subsystem",
  quote: '"I am the One who Snaps!"',
  addAuth: false,
}

// Link budget is better than Nirmala's

const Quote = () => {
  return (
    <i>The Predator ain't got shit on us...</i>
  )
}

const UpperDesc = () => {
  return (
    <p className="mt-6 text-xl leading-8 text-stone-200 font-black">
      Our satellite mission features two innovative <strong className='text-indigo-600'>Payloads</strong>: a thermal imaging camera and an electrodynamic tether, each designed to push the boundaries of space technology.
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
            <span className='text-indigo-600 font-black text-xl'>Primary Payload: Thermal Imaging Camera</span><br /><br />
            This camera will capture thermal Landsat images of India, processed through a blend of remote sensing techniques and AI-driven analysis. These images will provide valuable insights into environmental patterns, including climate data, urban heat islands, and cloud monitoring.
          </li><br /><br />
          <li>
            <span className='text-indigo-600 font-black text-xl'>Secondary Payload: Electrodynamic Tether</span><br /><br />
            The electrodynamic tether will deorbit the satellite after the mission—something never tried before and potentially revolutionary in reducing space debris as well.
          </li>
        </ol>
      </div>
    </div>
  </div>
  )
}

const PAYLOADSummaryData = {
  quote: Quote,
  upperDesc: UpperDesc,
  sideImg: SideImg,
  lowerDesc: LowerDesc,
}

const PAYLOADChallengeContext = () => {
  return null
}

const PAYLOADChallengeQuestions = () => {
  return (
    <>
      <span className='text-indigo-600 font-bold align-middle text-center text-3xl'>Questions: </span><br /><br />
      <ol className='list-decimal list-inside space-y-20'>
        <li>
          <span className='text-indigo-600 text-2xl'>ML: Build a Neural Network</span><br /><br />
          <strong className='text-indigo-600'>Instruction</strong> - KITS19 is preferred and will be given more preference<br />
          <br />
          Massachusetts Buildings Dataset.<br />
          <a href='https://www.kaggle.com/datasets/balraj98/massachusetts-buildings-dataset/data'>https://www.kaggle.com/datasets/balraj98/massachusetts-buildings-dataset/data</a><br />
          <br />
          Kidney Tumor Segmentation or KITS-19.<br /><br />
        </li>
        <li>
          <span className='text-indigo-600 text-2xl'>Tether: </span><br /><br />
          <strong className='text-indigo-600'>Instructions</strong> - At least 2, and solve all the sub-questions.<br />
          <br />
          <strong className='text-indigo-600 text-xl'>Question 1: Gravity Gradient Tug-of-War</strong><br /><br />
          A 30 km long bare silver coated tether is deployed in orbit around a planet with a radius of 6000 km, orbiting at a height of 500 km from the surface of the planet, and a gravitational acceleration of 9m/s2 at the surface. The tether is oriented radially to the planet. The tether experiences a gravity gradient force that creates tension along its length. Suddenly, the planet’s magnetic field reverses.
          <br /><br />
          <strong className='text-indigo-600'>Questions: </strong>
          <ol className='list-inside list-decimal ps-5'>
            <li>What happens to the tether after the reversal of the magnetic field?</li>
            <li>How does the gravity gradient force act on different segments of the tether, and what is the resulting tension at different points along the tether? (maths)</li>
            <li>What effect does the magnetic field reversal have on the tether's oscillation, and how does it interact with the gravity gradient's force?</li>
          </ol><br /><br /><br />
          <strong className='text-indigo-600 text-xl'>Question 2: Electrodynamics in a Twisted Orbit</strong><br /><br />
          A bare tether system is deployed in a low orbit around a planet with a uniform magnetic field strength of 0.3 T. The tether is rotating about its center of mass at 1 revolution per minute (RPM) while also orbiting the planet. The planet has a strong gravity gradient, and the tether's orbit is slightly elliptical.
          <br /><br />
          <strong className='text-indigo-600'>Questions: </strong>
          <ol className='list-inside list-decimal ps-5'>
            <li>How does the combination of the tether’s rotation and the elliptical orbit affect the induced EMF along the tether?</li>
            <li>If the tether system somehow becomes resonant with the planet’s magnetic field fluctuations, how would the induced current and the resulting Lorentz force alter the tether’s orbit?</li>
          </ol><br /><br /><br />
          <strong className='text-indigo-600 text-xl'>Question 3: The Cosmic Roller Coaster (unsolved)</strong><br /><br />
          A space station, Cosmic Coaster, is equipped with a 5 km long electrodynamic tether that extends into a nearby black hole's event horizon. The station has a mass of 3000 kg, and the tether has a resistance of 0.05 ohms per kilometer
          <br /><br />
          <strong className='text-indigo-600'>Questions: </strong>
          <ol className='list-inside list-decimal ps-5'>
            <li>As the space station orbits the black hole at a distance of 100 km, calculate the potential difference induced in the tether due to the extreme gravitational gradient.</li>
            <li>If an alien race suddenly sends a pulse of energy that increases the tether's resistance by 50% while the station is in motion, what will be the effect on the induced current?</li>
            <li>Assume the space station is equipped with a device that can manipulate the tether's length. If the tether is shortened to 2 km, how does this affect the overall system dynamics, considering the black hole's gravitational pull?</li>
          </ol>
        </li>
      </ol><br /><br />
      <span className='text-indigo-600 text-2xl'>Bonus Question: </span><br /><br />
      <strong className='text-indigo-600 text-xl'>Short MATLAB Task:  Simulating Orbital Decay After Tether Deployment</strong><br /><br />
      Create a MATLAB script to simulate the orbital decay of a satellite in low Earth orbit at an initial altitude of 500 km after deploying a 1 km long conductive bare tether. The simulation should model the orbital dynamics after tether deployment.
    </>
  )
}

const PAYLOADChallengeData = {
  challengeContext: PAYLOADChallengeContext,
  challengeQuestions: PAYLOADChallengeQuestions,
}

const PAYLOAD = () => {
  return (
    <>
    <Hero Data={ PAYLOADHeroData } />
    <Summary Data={ PAYLOADSummaryData } />
    <Challenge Data={ PAYLOADChallengeData } />
    </>
  )
}

export default PAYLOAD