import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <footer>
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
              <strong>Phone: </strong>+91 63746 63716 <br />
              <strong>Email: </strong>parikshit.musat@gmail.com <br />
            </div>
            <div className='mb-5 ml-10 p-5'>
              <h4>Pages: </h4>
              <ul>
                <li className='my-2'><a href='#'>Home</a></li>
                <li className='my-2'><a href='#'>Subsystems</a></li>
                <li className='my-2'><a href='#'>Contact Us</a></li>
                <li className='my-2'><a href='#'>Join Us</a></li>
              </ul>
            </div>
            <div className='mb-5 space-y-4 text-white'>
              <h4 className='font-black m-5'>Learn More: </h4>
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
          <div className='text-center'>
            Copyright <strong><span>Parikshit Student Satellite</span></strong> 2024. All Rights Reserved.
          </div>
          <div className='text-center'>
            Designed by Atulya Mishra 😎
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
