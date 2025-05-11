import React from 'react'
import contact from '../../assets/img/contact-img.jpg'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Contact = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className='min-h-screen shadow-md bg-gray-100 items-center px-5  py-5'>
        <h1 data-aos='fade-up'
                  data-aos-duration='500'
                  data-aos-delay='200'
                  data-aos-once='true'
                   className='text-3xl font-semibold text-center py-5'>Contact <span className='text-purple-500'>for online class</span></h1>
  <div className='flex flex-col lg:flex-row gap-10 md:px-8 py-6 px-10 w-full max-w-5xl'>
  <div data-aos='fade-right' className='w-full lg:w-1/2  space-y-8  bg-white py-11 px-6 shadow-md rounded-xl'>


      <div className='text-center'>

        <h1 className='text-4xl font-bold'>Contact Us</h1>
        
        </div>
      <div>
        <form action="" className=''>
       <div>
       <div>
            <label htmlFor="" className='px-2'>Enter your Name : </label><br />
            <input className='w-full border border-gray-200 px-2 py-2 mt-2 focus:border-l-violet-400 focus:outline-none placeholder-gray-600 text-gray-500 rounded-t-md' type="text" placeholder=' name'/>
          </div>
          <div>
            <label htmlFor="" className='px-2'>Enter your E-mail: </label><br />
            <input className='w-full border border-gray-200 px-2 py-2 mt-2 focus:border-l-violet-400 focus:outline-none placeholder-gray-600 text-gray-500 rounded-t-md' type="email" placeholder=' email'/>
          </div>
          <div>
            <label htmlFor="" className='px-2'>Your Messange</label><br />
            <textarea className='w-full h-[100px] border border-gray-200 px-2 py-2 mt-2 focus:border-l-violet-400 focus:outline-none placeholder-gray-600 text-gray-500 rounded-t-md' type="text" placeholder='Message'/>
          </div>
      
           
               <button className='bg-gradient-to-r from-purple-500 to-pink-400 w-full hover:scale-105 rounded-md my-2 text-white py-2 '>Submit</button>
     
       </div>
        </form>
      </div>
      </div>
      <div data-aos='fade-up' className='flex items-center justify-center'>
                <span className='text-xl mx-5 '> <a className='text-purple-500' href="">or</a></span>
            </div>
        <div data-aos='fade-left' className='items-center justify-center pl-28'>
          <h1 className='text-2xl py-10'> feel free to contact us </h1>
           <img className='h-[200px] w-[200px] rounded-full' src={contact} alt="" />
          <div className='flex gap-6 py-10'>
          <FaFacebook className='text-3xl hover:scale-110 hover:text-purple-500'/>
           <FaTwitter className='text-3xl hover:scale-110 hover:text-purple-500'/>
           <FaInstagram className='text-3xl hover:scale-110 hover:text-purple-500'/>
           <FaGithub className='text-3xl hover:scale-110 hover:text-purple-500'/>
          </div>
        </div>
  </div>
        
    </div>
  )
}

export default Contact