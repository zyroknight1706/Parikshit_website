import react from 'react'
import Image from 'next/image'
import header from './../../public/header.jpg'

export default function Hero() {

  return (
    <div className="w-full h-screen relative" style={{ backgroundImage: 'url(public/header.jpg)' }}>
      <Image className='w-full h-full object-cover' src={ header } alt='iski maa ki chut' />
      <div className="z-10 isolate px-6 pt-14 lg:px-8 absolute w-ful h-full top-0 flex flex-col">
        <div className="max-w-2xl py-28 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-4 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white">
              Announcing our next round of recruitment.{' '}
              <a href="#" className="font-semibold text-white bg-indigo-600 rounded-lg p-2">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className='text-left'>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Extending thoughts into space...
            </h1>
          </div>
        </div>
      </div>
        <div className="align-top pb-[10vh] mb-[10vh] mx-auto items-center text-center text-3xl leading-8 text-gray-400 absolute w-ful h-full top-[65vh] flex flex-col">
          "Parikshit is your 'Pariksha'! Learn well, question deeply. Don't take anything for granted.Success will be 
          yours. God Bless,Happy Creating and testing!"
          <br />
          <br />
          <div className='text-2xl'>
            -Wing Commander Rakesh Sharma, First Indian in Space, Visiting Parikshit
          </div>
        </div>
    </div>
  )
}