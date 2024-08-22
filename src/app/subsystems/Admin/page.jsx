import Hero from '@/components/Hero';
import React from 'react';
import bg from './bg.png';
import Summary from '@/components/Summary';
import Challenge from '@/components/Challenge';
import SideImg from './SideImg.jpg'

const AdminHeroData = {
  bgImg: bg,
  readHREF: "#recruitments",
  whiteBg: true,
  isAdmin: true,
  mainTitle: "Operations and Administration Subsystem",
  quote: '',
  addAuth: false,
}

const Quote = () => {
  return (
    <i>The invisible threads of coordination weave the fabric of success....</i>
  )
}

const UpperDesc = () => {
  return (
    <p className="mt-6 text-xl leading-8 text-stone-200 font-black">
      At the heart of our organization's efficiency lies the <span className='text-indigo-600'>Operations and Administration Subsystem</span>. This integral part of our team ensures that all aspects of our digital presence run smoothly, with a focus on the following key areas:
    </p>
  )
}

const LowerDesc = () => {
  return (
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
    <div className="lg:pr-4">
      <div className="max-w-xl text-xl leading-7 text-stone-200 lg:max-w-lg">
        <div className="mt-8 font-black">
          <ul className='list-disc'>
            <li>
              <span className='text-indigo-600 font-black text-xl'>Web Development</span><br /><br />
              Our web development team is dedicated to creating and maintaining a user-friendly, responsive, and visually appealing website. We ensure that our online platform is optimized for performance, accessibility, and security, providing a seamless experience for all users.
            </li><br />
            <li>
              <span className='text-indigo-600 font-black text-xl'>Public Relations</span><br /><br />
              Effective communication is crucial for maintaining a positive image. Our PR team works tirelessly to craft messages that resonate with our audience, manage our reputation, and build strong relationships with stakeholders. We handle all press releases, media inquiries, and public statements to ensure a consistent and professional public image.
            </li><br />
            <li>
              <span className='text-indigo-600 font-black text-xl'>Social Media Management</span><br /><br />
              In today’s digital age, social media is a powerful tool for engagement. Our social media team curates content, interact with our audience, and monitor trends to keep our online presence dynamic and engaging. We handle all aspects of social media, from content creation to analytics, ensuring that our message reaches the right audience at the right time.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

const AdminSummaryData = {
  quote: Quote,
  upperDesc: UpperDesc,
  sideImg: SideImg,
  lowerDesc: LowerDesc,
}

const AdminChallengeContext = () => {
  return (
    <div className='text-white max-w-7xl text-2xl mx-auto items-center'>
      <span className='text-indigo-600 font-bold align-middle text-center text-3xl'>Context: </span><br /><br />
      <i>The Systems and Administration subsystem of Parikshit handles various non-technical yet crucial aspects to ensure the smooth functioning and visibility of the project.Your solutions should reflect the multifaceted nature of the management subsystem, considering web development,posts, and video editing. Each solution should be realistic, creative and efficient.You can solve one or all of the below questions.</i>
      <br /><br /><span className='text-indigo-600 font-black text-2xl'>Instructions for Submission: </span><br /><br />
      <ol className='list-decimal'>
        <li>Submit your work to the following email id</li>
        <li>Send the links of the respective tasks. If you have made a git repository for the web dev task, do send the link.</li>
        <li>You are free to use any software for tasks b and c.</li>
      </ol>
    </div>
  )
}

const AdminChallengeQuestions = () => {
  return (
    <>
      <span className='text-indigo-600 font-bold align-middle text-center text-3xl'>Questions: </span><br /><br />
      <ul className='list-disc'>
        <li>
          <strong className='text-indigo-600'>Create a functional and user-friendly website to manage and showcase the activities of a project that you have worked on/Parikshit. The website should feature:</strong>
          <ul className='list-inside list-disc ps-10'>
            <li>Homepage</li>
            <li>Latest News</li>
            <li>Navigation Menu</li>
            <li>About Us section with project details</li>
            <li>Team Profiles</li>
            <li>a public engagement section with mission details, events, and contact form</li>
          </ul><br />
          <strong className='text-indigo-600'>Optional: </strong>database integration for data storage and management,a team collaboration section with discussion forums, document sharing, and meeting scheduler.
          <br />
          <br />
          <i className='text-indigo-600'>ps: you can use any tech stack you want except for boilerplate and barebones HTML and CSS</i><br /><br />
        </li>
        <li>
          <strong className='text-indigo-600'>Create an engaging instagram reel out of your MIT id card in a vertical aspect ratio not more than 12 seconds long .You are free to use any extra props and equipment.</strong><br />
          <br />
          <i className='text-indigo-600'>ps: we're serious about it.</i><br /><br />
        </li>
        <li>
          <strong className='text-indigo-600'>Create/replicate any poster from the given website (<a href='https://posteritati.com/tag/criterion-collection' className='underline text-indigo-600'>https://posteritati.com/tag/criterion-collection</a>)  adding your own flair but embodying the ethos of a student satellite team. When you send your work link the original inspiration.</strong>
        </li>
      </ul>
    </>
  )
}

const AdminChallengeData = {
  challengeContext: AdminChallengeContext,
  challengeQuestions: AdminChallengeQuestions,
}

export default function Administration() {
  return (
    <>
      <Hero Data={ AdminHeroData } />
      <Summary Data={ AdminSummaryData } />
      <Challenge Data={ AdminChallengeData } />
    </>
  );
}