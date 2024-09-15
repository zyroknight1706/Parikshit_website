import React from 'react';

const Challenge = ({ Data }) => {
  return (
    <div id='recruitments' className='items-center overflow-hidden w-full px-5'>
      <h1 className='text-4xl md:text-7xl font-bold max-w-full md:max-w-[60vw] p-3 rounded-lg mx-auto text-center bg-indigo-600'>
        Recruitment Challenge
      </h1>
      <br /><br />
      <span className='bg-indigo-100 text-indigo-700 text-md font-bold block text-center md:text-4xl p-2 rounded-lg'>
        Email your answers to: recruitments.parikshit@gmail.com
      </span>
      <br /><br />
      <span className='bg-indigo-50 text-indigo-800 text-sm block text-center md:text-3xl p-2 rounded-lg'>
        In the email, under subject, write "name_regno_subsystem"
        <br />&nbsp;(example: Swetha_220392948_Admin)
      </span>
      <div className='text-white max-w-7xl text-2xl p-4 py-14 mx-auto'>
        {Data.challengeContext()}
        {Data.challengeQuestions()}
      </div>
    </div>
  );
}

export default Challenge;
