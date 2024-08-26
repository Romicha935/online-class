import React from 'react'
import instractor from '../../assets/img/instractor.jpg'

const Instractor = () => {
  return (
    <div>
         <div className='pb-10'>
      <h1 className='text-3xl font-bold text-center py-10'>Lead <span className='text-purple-600'>Instractor</span></h1>
        <div className='flex gap-8'>
        <div data-aos='fade-right' data-aos-duration='300' data-aos-delay-='300' className='pb-8 pl-40 w-1/2 container shadow-xl'>
        
        <img className='h-[300px] pt-5 rounded-md object-cover shadow-2xl' src={instractor} alt="" />
      </div>
      <div className='w-1/2 pr-10 text-container '>
      <p data-aos='fade-left' data-aos-delay='200' data-aos-duration='300' >Mahmud Hasan  Siddique are MERN stact developer.He was studies B.Sc in Computer Science & Engineering  at Sheak borhanuddin Post graugate Collage/univercsty. <br /> <br />He has been involved in web development and software profession for 2 years. At the time of 2 years ago, Out of love for programming and passion for  teaching people come, Mahmud Hasan Siddique Programmer Platform in February 2022. <br /><br /> Mahmud Hasan Siddique is teaches programming to many students .He Is a good teacher of our platform.</p>
      <h2 data-aos='fade-up' data-aos-delay='200' data-aos-duration='300' className='font-semibold pt-3'>Mahmud Hasan Siddique</h2>
      <p  data-aos='fade-up' data-aos-delay='200' data-aos-duration='300'  className='font-semibold'>MERN Stack developer</p>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Instractor