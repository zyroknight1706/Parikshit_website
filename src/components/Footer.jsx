import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  return (
    <footer id='Contact'>
      <div className='p-10 bg-gray-800 text-white '>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
            <div className='mb-5'>
              <h4>Parikshit Student Satellite: </h4>
            </div>
            <div className='mb-5 font-bold p-5'>
              Room No. 302, <br />
              Academic Block 3, <br />
              Manipal Institute of Technology, <br />
              Manipal, Udupi, Karnataka, <br />
              India, 576104 <br /><br />
              <strong className='text-indigo-600'>Phone: </strong>(Swetha MR): <br />+91 63746 63716<br />
              <strong className='text-indigo-600'>Email: </strong>parikshit.musat@gmail.com <br />
            </div>
            <div className='mb-5 ml-10 p-5'>
              <h4 className='text-indigo-600 text-lg'>Pages: </h4>
              <ul>
                <li className='my-2'><a href='#'>Home</a></li>
                <li className='my-2'><a href='#'>Contact Us</a></li>
              </ul>
            </div>
            <div className='mb-5 space-y-4 text-white'>
              <h4 className='font-black m-5 text-indigo-600 text-xl'>Learn More: </h4>
              <ul>
                <li className='p-5'>
                  <SocialIcon url='https://www.instagram.com/parikshitsatellite?igsh=NnFmdDFjNGxqdWgz' />
                </li>
                <li className='p-5'>
                  <SocialIcon url='https://www.linkedin.com/company/parikshit-student-satellite/' />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-gray-900 text-gray-500 px-10'>
        <div>
          <div 
            className='text-center relative' 
            onMouseEnter={() => setShowEasterEgg(true)} 
            onMouseLeave={() => setShowEasterEgg(false)}
          >
            Copyright <strong><span>Parikshit Student Satellite</span></strong> 2024. All Rights Reserved.
            {showEasterEgg && (
              <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-700 text-white p-2 rounded'>
                 Shhhhhhhhhhhhhhhhhhhhhh .............. You found it !!!
              </div>
            )}
          </div>
          <div className='text-center'>
            Designed by <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Atulya Mishra 😎 | Siddhartha Chhauda ☮️</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
