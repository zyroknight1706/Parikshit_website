import React from 'react';
import Image from 'next/image';

export default function Hero({ Data }) {
  return (
    <div className="w-full h-screen relative">
      <Image 
        className={Data.whiteBg ? 'w-full h-full object-cover brightness-75' : 'w-full h-full object-cover'} 
        src={Data.bgImg} 
        alt="hero background image" 
      />
      <div className="z-10 isolate px-6 pt-14 lg:px-8 absolute w-full h-full top-0 flex flex-col">
        <div className="max-w-2xl md:py-0 lg:py-56 flex flex-col justify-center items-start">
          <div className="sm:mb-4 sm:text-sm sm:flex sm:justify-center">
            <div 
              className={Data.whiteBg 
                ? 'relative rounded-md md:py-1 text-[20px] font-bold leading-6 text-white bg-indigo-600 md:text-lg'
                : 'relative rounded-full px-3 md:py-1 text-[20px] font-bold leading-6 text-white bg-indigo-600 md:text-lg'
              }
            >
             
            </div>
          </div>
          <div className="text-left mb-6 lg:mb-10">
            <h1 
              className={Data.whiteBg 
                ? 'text-[25px] lg:text-6xl md:text-4xl font-bold tracking-tight rounded-xl bg-indigo-600 p-4 text-black'
                : 'text-[25px] lg:text-6xl md:text-4xl font-bold tracking-tight pb-6 rounded-2xl text-white'
              }
            >
              {Data.mainTitle}
            </h1>
          </div>
          {Data.quote && (
            <div 
              className={Data.whiteBg 
                ? 'text-[20px] lg:text-3xl md:text-xl text-white bg-black bg-opacity-50 font-bold absolute w-full bottom-20 px-4 py-2 rounded-lg'
                : 'text-[20px] lg:text-3xl md:text-xl text-white bg-black bg-opacity-50 font-bold absolute w-full bottom-20 px-4 py-2 rounded-lg'
              }
            >
              <div className="text-center">
                <i>{Data.quote}</i>
                {Data.addAuth && (
                  <div className='mt-4 text-sm md:text-lg'>
                    -Wing Commander Rakesh Sharma, First Indian in Space, Visiting Parikshit
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
