import React from 'react'

const Challenge = ({ Data }) => {
  return (
    <div id='recruitments' className='items-center overflow-hidden w-full'>
      <h1 className='text-7xl font-bold max-w-[60vw] p-3 rounded-lg mx-auto text-center bg-indigo-600'>Recruitment Challenge</h1><br /><br />
      <span className='text-indigo-600 relative left-80 p-2 text-4xl'>Email your answers to: recruitments.parikshit@gmail.com</span><br /><br />
      <span className='relative left-80 p-2 text-3xl'>In the email, under subject, write "name_regno_subsystem"<br />&nbsp;(example: Swetha_220392948_Admin)</span>
      <div className='text-white max-w-7xl text-2xl p-[8vw] py-14 mx-auto'>
        { Data.challengeContext() }
        { Data.challengeQuestions() }
      </div>
    </div>
  )
}

export default Challenge