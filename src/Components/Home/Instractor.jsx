import React from 'react'
import instractor from '../../assets/img/instractor.jpg'

const Instractor = () => {
  return (
    <div className='bg-gray-50 py-10'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold text-center pb-10'>
          Lead <span className='text-purple-600'>Instructor</span>
        </h1>

        <div className='flex flex-col lg:flex-row items-center lg:items-start gap-10'>
          
            {/* Image Part */}
          <div data-aos='fade-right' data-aos-duration='300' data-aos-delay='300' className='w-full lg:w-1/2 flex justify-center'>
            <img
              className='h-[300px] w-[300px] rounded-md object-cover shadow-2xl'
              src={instractor}
              alt='Instructor'
            />
          </div>
          
          {/* Text Part */}
          <div data-aos='fade-left' data-aos-delay='200' data-aos-duration='300' className='w-full lg:w-1/2 text-center lg:text-left px-4'>
            <p className='text-gray-700'>
              Mahmud Hasan Siddique is a MERN Stack Developer. He studied B.Sc in Computer Science & Engineering at Sheikh Borhanuddin Post Graduate College/University.
              <br /><br />
              He has been involved in the web development and software industry for 2 years. In February 2022, out of a love for programming and a passion for teaching, Mahmud Hasan Siddique started Programmer Platform.
              <br /><br />
              He has taught programming to many students and is one of the most dedicated teachers on our platform.
            </p>
            <h2 className='font-semibold text-lg pt-4'>Mahmud Hasan Siddique</h2>
            <p className='font-semibold text-purple-600'>MERN Stack Developer</p>
          </div>

        

        </div>
      </div>
    </div>
  )
}

export default Instractor
