import React from 'react'
import footerlogo from '../../assets/img/logo1.jpg'

import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'


const FooterLinks = [
    {
        title: 'Home',
        link: '/#'
    },
    {
        title: 'About',
        link: '/#about'
    },
    {
        title: 'Contact',
        link: '/#contact'
    },
    {
        title: 'Blog',
        link: '/#blog'
    }
]
const Footer = () => {
  return (
    <div className='bg-purple-500 text-white '>
     
   <div className='container'>
      <div className='grid grid-cols-3 pt-5'>
        {/*compani details */}
        <div className='py-8 px-4'>
            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>Online Class</h1>
            <img className='max-w-[50px] rounded-full' src={footerlogo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nihil.</p>
        </div>
        {/*footer links */}
        <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:3'>
          <div>
            <div className='py-8 px-4'>
                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                <ul className='flex flex-col gap-3'>
                    {
                        FooterLinks.map((link)=>(
                            <li className='cursor-pointer hover:text-pink-800 hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                                <span>{link.title}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
          </div>

          <div>
            <div className='py-8 px-4'>
                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>Links</h1>
                <ul className='flex flex-col gap-3'>
                    {
                        FooterLinks.map((link)=>(
                            <li className='cursor-pointer hover:text-pink-800 hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                                <span>{link.title}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
          </div>

          {/*social lnks */}
          <div className='mt-9'>
            <div className='flex gap-3'>
                <a href="#">
                    <FaInstagram className='text-3xl hover:scale-150'/>
                </a>
                <a href="#" className='text-3xl'>
                    <FaFacebook className='hover:scale-150'/>
                </a>
                <a href="#">
                    <FaLinkedin className='text-3xl hover:scale-150'/>
                </a>
            </div>
            <div className='mt-6'>
              <div className='flex items-center hover:scale-105 gap-3'>
                <FaLocationArrow className=''/>
                <p>Dhaka,Bangladesh</p>
              </div>
              <div className='flex items-center hover:scale-105 gap-3 mt-3'>
                <FaMobileAlt />
                <p>+880 1234 345453</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
    </div>
  )
}

export default Footer


