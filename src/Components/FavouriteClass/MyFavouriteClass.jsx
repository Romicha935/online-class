import React from 'react'
import favourite  from '../../../public/favourite.json'
import instractor from '../../assets/img/instractor.jpg'
import './fbclass.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const MyFavouriteClass = () => {
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
    <div>
      <div>
        <h1 data-aos='fade-up'
        data-aos-delay='200'
        data-aos-duration='300'
         className='text-4xl font-bold py-10 mx-20'>My Favourite Class</h1>
        <div data-aos='fade-up'
        data-aos-delay='300'
        data-aos-duration='800'
         className='flex flex-wrap gap-10 py-8 px-5 justify-center'>
          {
            favourite.map((item,idx)=>(
              <div data-aos='fade-up'
              data-aos-delay={`${300 + idx * 100}`}
              data-aos-duration='600' key={idx} className='border  p-3 max-w-56 shadow-xl'>
                  <img data-aos-delay={`${400 + idx * 100}`}
                data-aos-duration='800' className='h-44 w-48 rounded-md ' src={item.image} alt="" />
                  <h1  data-aos='fade-up'
                data-aos-delay={`${500 + idx * 100}`}
                data-aos-duration='600' className='pt-1 font-bold'>{item.title}</h1>
                  <h3 className='font-semibold text-purple-600'>{item.instractor}</h3>
                  <h4  data-aos='fade-up'
                data-aos-delay={`${600 + idx * 100}`}
                data-aos-duration='600'>{item.category}</h4>
                  <p  data-aos='fade-up'
                data-aos-delay={`${700 + idx * 100}`}
                data-aos-duration='600' className='line-clamp-2 italic'>{item.details}</p>

                  <p  data-aos='fade-up'
                data-aos-delay={`${700 + idx * 100}`}
                data-aos-duration='600' className='text-purple-600 font-bold'>{item.rating}</p>
                  <button className='bg-gradient-to-r from-purple-600 to-pink-400 text-white py-2 my-2 rounded-md hover:scale-105 w-full shadow-xl'>Details</button>
              </div>
            ))
          }
        </div>
      </div>

     
    </div>
  )
}

export default MyFavouriteClass