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

const PAYLOADChallengeContext = () => {
  return null;
};

const PAYLOADChallengeQuestions = () => {
  return (
    <>
      <div className="text-center mb-10">
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



        <span className='text-indigo-600 font-bold text-3xl'>Questions:</span>
      </div>
      <div className="space-y-16 text-justify">
        <ol className='list-decimal list-inside space-y-20'>
          <li>
            <span className='text-indigo-600 text-2xl'>Question 1: Neural Network for Kidney Tumor Segmentation (KITS-19)</span><br /><br />
            <strong className='text-indigo-600'>Objective:</strong> Build a neural network model for segmenting kidney tumors using the KITS-19 dataset. Your task is to preprocess the data, train the model, and evaluate its performance.<br /><br />
            <strong className='text-indigo-600'>Instructions:</strong><br /><br />
            <strong className='text-indigo-600'>Dataset Preference:</strong> The KITS-19 dataset is preferred for this task, and solutions using this dataset will be given higher priority.<br /><br />
            <strong className='text-indigo-600'>Model Requirements:</strong><br />
            <ul className='list-disc list-inside pl-5'>
              <li>Design an appropriate neural network architecture for the segmentation task.</li>
              <li>Implement the model using a deep learning framework of your choice (e.g., TensorFlow, PyTorch).</li>
              <li>Include a validation strategy, such as cross-validation or a holdout validation set.</li>
            </ul><br />
            <strong className='text-indigo-600'>Evaluation:</strong><br />
            <ul className='list-disc list-inside pl-5'>
              <li>Evaluate the model's performance using relevant metrics such as Dice coefficient, Intersection over Union (IoU), or others as appropriate.</li>
              <li>Present your results with visualizations of segmented images.</li>
            </ul><br />
            <strong className='text-indigo-600'>Bonus:</strong> If possible, compare the performance of your neural network with traditional machine learning methods or other deep learning architectures.<br /><br />
            <strong className='text-indigo-600'>Dataset Links:</strong><br />
            <ul className='list-disc list-inside pl-5'>
              <li><a href='https://www.kaggle.com/datasets/sabahesaraki/kidney-tumor-segmentation-challengekits-19' className='text-indigo-600 underline'>KITS-19 Dataset</a></li>
            </ul>
          </li>
          <li>
            <span className='text-indigo-600 text-2xl'>Question 2: Neural Network for Building Segmentation (Massachusetts Buildings Dataset)</span><br /><br />
            <strong className='text-indigo-600'>Objective:</strong> Build a neural network model for segmenting buildings from aerial images using the Massachusetts Buildings Dataset. Your task is to preprocess the data, train the model, and evaluate its performance.<br /><br />
            <strong className='text-indigo-600'>Instructions:</strong><br /><br />
            <strong className='text-indigo-600'>Dataset:</strong> Use the Massachusetts Buildings Dataset available here.<br /><br />
            <strong className='text-indigo-600'>Model Requirements:</strong><br />
            <ul className='list-disc list-inside pl-5'>
              <li>Design a suitable neural network architecture for the segmentation task.</li>
              <li>Implement the model using a deep learning framework of your choice (e.g., TensorFlow, PyTorch).</li>
              <li>Include a validation strategy, such as cross-validation or a holdout validation set.</li>
            </ul><br />
            <strong className='text-indigo-600'>Evaluation:</strong><br />
            <ul className='list-disc list-inside pl-5'>
              <li>Evaluate the model's performance using relevant metrics like Intersection over Union (IoU) or F1 score.</li>
              <li>Present your results with visualizations of segmented images.</li>
            </ul><br />
            <strong className='text-indigo-600'>Bonus:</strong> Experiment with different network architectures or preprocessing techniques to improve performance.<br />
            Provide a comparison with any baseline models or traditional approaches.<br /><br />
            <strong className='text-indigo-600'>Dataset Links:</strong><br />
            <ul className='list-disc list-inside pl-5'>
              <li><a href='https://www.cs.toronto.edu/~vmnih/data/' className='text-indigo-600 underline'>Massachusetts Buildings Dataset</a></li>
            </ul>
          </li>
          <li>
            <span className='text-indigo-600 text-2xl'>Tether: </span><br /><br />
            <strong className='text-indigo-600'>Instructions:</strong> Partial submissions are allowed and must be done through a hand-written document.<br /><br />
            <strong className='text-indigo-600 text-xl'>Question 1: Gravity Gradient Tug-of-War</strong><br /><br />
            A  30 km  long  bare silver-coated tether  is deployed in orbit around a planet with a radius of  6000 km, orbiting at a height of   500 km  from the surface of the planet, with a gravitational acceleration of  9 m/s²  at the surface. The tether is oriented  radially  to the planet. The tether experiences a  gravity gradient force  that creates tension along its length. Suddenly, the planet’s  magnetic field reverses .<br /><br />
            <strong className='text-indigo-600'>Questions: </strong>
            <ol className='list-inside list-decimal ps-5'>
              <li>What happens to the tether after the  reversal of the magnetic field ?</li>
              <li>How does the  gravity gradient force  act on different segments of the tether, and what is the resulting  tension  at different points along the tether? ( Math required )</li>
              <li>What effect does the  magnetic field reversal  have on the tether's  oscillation, and how does it interact with the   gravity gradient's force ?</li>
            </ol>
          </li>
          <li>
            <span className='text-indigo-600 text-2xl'>Electrodynamics in a Twisted Orbit</span><br /><br />
            <strong className='text-indigo-600'>Instructions:</strong> Partial submissions are allowed and must be done through a hand-written document.<br /><br />
            <strong className='text-indigo-600 text-xl'>Question 2: Electrodynamics in a Twisted Orbit</strong><br /><br />
            A  bare tether system  is deployed in a low orbit around a planet with a highly elliptical orbit. The tether, which is 3 km long, is made of copper and is aligned along the  major axis  of the orbit. The tether experiences  electrodynamic drag  due to its interaction with the planet’s  magnetic field. The space station to which the tether is attached starts experiencing   abnormal oscillations  due to the  uneven magnetic field  caused by the planet’s  non-uniform shape .<br /><br />
            <ol className='list-decimal list-inside ps-5'>
              <li>How do the oscillations of the space station affect the tether's current? (Math required )</li>
              <li>What is the impact of reducing the  tether's resistance by 50%  while the station is in motion, and how will this affect the  induced current ?</li>
              <li>Assume the space station is equipped with a device that can  manipulate the tether's length. If the tether is shortened to   2 km, how does this affect the overall   system dynamics, considering the   black hole's gravitational pull ?</li>
            </ol>
          </li>
        </ol>
        <div className="text-center mt-16">
          <span className='text-indigo-600 text-2xl'>Bonus Question:</span><br /><br />
          <strong className='text-indigo-600 text-xl'>Short MATLAB Task: Simulating Orbital Decay After Tether Deployment</strong><br /><br />
          Create a  MATLAB script  to simulate the  orbital decay  of a satellite in  low Earth orbit  at an initial altitude of  500 km  after deploying a  1 km long conductive bare tether. The simulation should model the   orbital dynamics  after tether deployment.
        </div>

        


      </div>
    </>
  );
};

const PAYLOADChallengeData = {
  challengeContext: PAYLOADChallengeContext,
  challengeQuestions: PAYLOADChallengeQuestions,
};

const PAYLOAD = () => {
  return (
    <div className="payload-page">
      <Hero Data={PAYLOADHeroData} />
      <Summary Data={PAYLOADSummaryData} />
      <Challenge Data={PAYLOADChallengeData} />
    </div>
  );
};

export default PAYLOAD;
