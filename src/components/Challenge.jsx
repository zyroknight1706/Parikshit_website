import React from 'react'

const Challenge = ({ Data }) => {
  return (
    <div id='recruitments' className='items-center overflow-hidden w-full'>
      <h1 className='md:text-7xl font-bold md:max-w-[60vw] p-3 rounded-lg mx-5 md:mx-auto text-center bg-indigo-600'>Recruitment Challenge</h1><br /><br />
      <span className='text-indigo-600 text-md font-bold md:relative md:left-80 p-2 md:text-4xl'>Email your answers to: recruitments.parikshit@gmail.com</span><br /><br />
      <span className=' text-sm md:relative md:left-80 p-2 md:text-3xl'>In the email, under subject, write "name_regno_subsystem"<br />&nbsp;(example: Swetha_220392948_Admin)</span>
      <div className='text-white max-w-7xl text-2xl p-[8vw] py-14 mx-auto'>
        { Data.challengeContext() }
        { Data.challengeQuestions() }
      </div>
    </div>
  )
}

export default Challenge