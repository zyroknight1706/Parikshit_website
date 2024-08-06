import React from 'react'
import Image from 'next/image'
import header from './../../public/header.jpg'

const Header = () => {
  return (
    <header className='flex flex-col justify-between'>
      <div className='relative w-full'>
        <div className='absolute -z-10 w-full'>
            <Image src={header} alt='Background Image' className='w-full max-h-[1000vh]' width={1000} />
        </div>
      </div>
      <div className='max-w-screen-lg ml-[30vh] h-[100vh] py-5 my-60 rounded-2xl font-black text-7xl text-amber-200 transition duration-300 ease-in-out'>
        Extending Thoughts into space...

        <p className='max-w-screen-lg ml-[18vh] my-[10vh] h-[300vh] items-center rounded-2xl text-3xl text-center text-amber-200 transition duration-300 ease-in-out'>
          Parikshit is your 'Pariksha'! Learn well, question deeply. Don't take anything for granted.Success will be yours. God Bless,Happy Creating and testing!"
          <br />
          <br />
        -Wing Commander Rakesh Sharma, First Indian in Space, Visiting Parikshit
        </p>
      </div> 
    </header>
  )
}

export default Header
