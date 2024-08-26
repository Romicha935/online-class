import React from 'react'
import banner1 from '../../assets/img/back4.jpg'
import banner2 from '../../assets/img/back5.jpg'
import banner3 from '../../assets/img/back56.jpg'
import banner4 from '../../assets/img/back7.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'
import Slider from 'react-slick'

const imageList = [
    {
        id: 1,
        img:banner1,
        title: 'Online Class your start now ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, inventore.'
    },
    {
        id: 2,
        img:banner2,
        title: 'Online Class your start now  ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, inventore.'
    },
    {
        id: 3,
        img:banner3,
        title: 'Online Class your start now ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, inventore.'
    },
    {
      id: 4,
      img:banner4,
      title: 'Online Class your start now ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, inventore.'
  },

]

const Banner = () => {
   React.useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: 'ease-in-out',
          delay: 100,
        });
        AOS.refresh();
      }, []);

    
    var settings = {
        dots:false,
        arrow:false,
        infinite:true,
        speed:800,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus : true,
    }

  return (
    <div className='relative   bg-gray-100 flex justify-center items-center duration-200'>
   
     <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
        {imageList.map((data)=>(
            <div className='-mt-7' key={data.id}>
             <img className='w-full h-[500px] relative top-0' src={data.img} alt="" />
                {/*text contetnt section */}
                <div className='absolute top-36 pl-28 gap-y-9 w-2/3 '>
                  <h1 data-aos='Zoom-out'
                  data-aos-duration='500'
                  data-aos-once='true' className='text-2xl text-gray-800 font-bold'>{data.title}</h1>
                  <p data-aos='fade-up'
                  data-aos-duration='500'
                  data-aos-delay='200' className='text-sm py-3 w-80'>{data.description}</p>
                  <div data-aos='fade-up' data-aos-duration='500'
                  data-aos-delay='300' className='py-3'>
                    <button  className='bg-gradient-to-r from-purple-500 to-pink-400 p-1  rounded-full hover:scale-105 px-4 text-white'>See Online class</button>
                  </div>
                </div>
             
                
               </div>
         
        ))}
        </Slider>
     </div>
   
    </div>
  )
}

export default Banner