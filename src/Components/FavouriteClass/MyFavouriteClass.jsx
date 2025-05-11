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
         className='text-4xl font-bold py-10 mx-20'><span className='text-purple-600 italic'>My Favourite</span> Class</h1>
        <div data-aos='fade-up'
        data-aos-delay='300'
        data-aos-duration='800'
         className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 py-8 px-10 '>
          {   
            favourite.map((item,idx)=>(
              <div data-aos='fade-up'
              data-aos-delay={`${300 + idx * 100}`}
              data-aos-duration='600' key={idx} className='border px-6  p-3 w-full shadow-xl'>
                  <img data-aos-delay={`${400 + idx * 100}`}
                data-aos-duration='800' className='h-44 w-48 object-cover rounded-md ' src={item.image} alt="" />
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