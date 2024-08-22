import react from 'react'
import Image from 'next/image'

export default function Hero({ Data }) {

  return (
    <div className="w-full h-screen relative">
      <Image 
      className={Data.whiteBg ? ('w-full h-full object-cover brightness-75') : ('w-full h-full object-cover')} 
      src={ Data.bgImg } alt='hero background image' />
      <div className="z-10 isolate px-6 pt-14 lg:px-8 absolute w-ful h-full top-0 flex flex-col">
        <div className="max-w-2xl md:py-0 lg:py-56">
          <div className="sm:mb-4 sm:text-sm sm:flex sm:justify-center">
            <div className={ Data.whiteBg ? (
              "relative rounded-md px-3 py-1 text-lg font-bold leading-6 text-white bg-indigo-600"
              ) : (
                "relative rounded-full px-3 py-1 text-lg font-bold leading-6 text-white bg-indigo-600"
              )}>
              Announcing our next round of recruitments.{' '}
              <a href={ Data.readHREF } className={ Data.whiteBg ? (
                "font-semibold text-white underline rounded-lg p-2" ) : (
                  "font-semibold text-white underline rounded-lg p-2"
                )}>
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className='text-left'>
            <h1 className={ Data.whiteBg ? (
              "lg:text-6xl md:text-4xl sm:text-2xl font-bold tracking-tight rounded-xl bg-indigo-600 p-2 text-black"
            ) : (
              "lg:text-6xl md:text-4xl sm:text-2xl font-bold tracking-tight rounded-2xl text-white"
            )}>
              { Data.mainTitle }
            </h1>
          </div>
        </div>
      </div>
        {Data.isAdmin ? (null) : (<div className={Data.whiteBg ? (
          "align-top lg:pb-[5vh] lg:mb-[10vh] md:pb-[7vh] md:mb-[2vh] sm:pb-[4vh] sm:mb-[4vh] sm:mt-1 mx-auto items-center text-center lg:text-3xl md:text-xl sm:text-lg pt-[5vh] text-white bg-black bg-opacity-50 font-bold absolute w-full top-[65vh] flex flex-col"
          ) : (
          "align-top lg:pb-[5vh] lg:mb-[10vh] md:pb-[7vh] md:mb-[2vh] sm:pb-[4vh] sm:mb-[4vh] sm:mt-1 mx-auto items-center text-center lg:text-3xl md:text-xl sm:text-lg pt-[5vh] text-white bg-black bg-opacity-50 font-bold absolute w-full top-[65vh] flex flex-col"
          )}>
          { Data.quote }
          {Data.addAuth ? (
          <div className='mt-[6vh] text-2xl'>
            -Wing Commander Rakesh Sharma, First Indian in Space, Visiting Parikshit
          </div>
          ) : ( 
            null 
          )
          }
        </div>)}
    </div>
  )
}