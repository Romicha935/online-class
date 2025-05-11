import React, { useContext, useEffect, useState } from 'react'
import popular from '../../../public/popular.json'
import active from '../../../public/active.json'
import design from '../../../public/design.json'
import certifications from '../../../public/certification.json'
import addclass from '../../../public/Addclass.json'
import { FaStar } from 'react-icons/fa6'
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import { SearchContext,  } from '../SearchProvider/SearchProvider'


const Classes = () => {
  //const[classes, setClasses] = useState([])
  //const [addclass,setAddclass] = useState([])
  const [addclass, setAddclass] = useState([]);
  const { searchTerm } = useContext(SearchContext);


  //const {searchTerm} = useContext(searchContext)
//const [array,setArray] = useState(classes)
  useEffect(()=> {
    axios.get('http://localhost:3000/classes')
    .then((res)=> {
      console.log(res);
      setAddclass(res.data)
    })
    .catch((err)=> {
      console.log(err)
    })
  },[]);

  const filteredClasses = addclass.filter(item =>
    item.className.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //const filteredClasses = active.filter((item)=> {
   // item.className.toLowerCase().includes(searchTerm.toLowerCase())
    //console.log(filteredClasses)
  //})

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
            <div>
                <h1   data-aos='fade-up'
        data-aos-delay='200'
        data-aos-duration='300'
         className='text-3xl font-semibold  px-20 pt-10'><span className='text-purple-600'>Add Your</span> Class </h1>
                 <div  data-aos='fade-up'
        data-aos-delay='300'
        data-aos-duration='800'
         className='flex flex-wrap gap-10 justify-center py-10 w-full '>
                    {
                        filteredClasses.map((item,idx)=>(
                            <div   data-aos='fade-up'
                            data-aos-delay={`${300 + idx * 100}`}
                            data-aos-duration='600'
                             key={idx} className='border-2 rounded-xl py-2 flex-col items-center px-3  w-fit'>
                                <div className=''>
                                <img  className='w-48 h-44 object-cover rounded-md' src={item.imgUrl} alt=""   data-aos='zoom-in'
                data-aos-delay={`${400 + idx * 100}`}
                data-aos-duration='800'/>
                                <h1  data-aos='fade-up'
                data-aos-delay={`${500 + idx * 100}`}
                data-aos-duration='600'
                  className='font-bold '>{item?.className}</h1>
                                <h2   data-aos='fade-up'
                data-aos-delay={`${600 + idx * 100}`}
                data-aos-duration='600'
                 className='font-semibold text-purple-600'>{item?.category}</h2>
                                <p  data-aos='fade-up'
                data-aos-delay={`${700 + idx * 100}`}
                data-aos-duration='600'
                 className='text-sm italic line-clamp-2 w-48'> {item?.details}</p>
                             <div className='flex'>
                                <FaStar className='flex text-purple-500'/>
                                <FaStar className='flex text-purple-500'/>
                                <FaStar className='flex text-purple-500'/>
                                <FaStar className='flex text-purple-500'/>
                             </div>

                                 <button className='bg-gradient-to-r from-purple-600 to-pink-400 text-white py-1 w-full mt-2 hover:scale-105 rounded-md'        data-aos='fade-up'
                data-aos-delay={`${800 + idx * 100}`}
                data-aos-duration='600'>Join Now</button>
                                </div>
                            </div>
                        ))
                    }
                 </div>
            </div>

            <div>
                <div>
                    <h1  data-aos='fade-up'
        data-aos-delay='200'
        data-aos-duration='300'
         className='text-3xl font-semibold text-purple-600 px-24'>Active Class </h1>
                   <div   data-aos='fade-up'
        data-aos-delay='300'
        data-aos-duration='800'
         className='flex flex-wrap justify-center py-9 gap-10'>
                    {
                        active.map((item,idx)=>(
                            <div  data-aos='fade-up'
                            data-aos-delay={`${300 + idx * 100}`}
                            data-aos-duration='600'
                             key={idx} className='w-fit border-2 p-3 justify-center items-center'>
                             <img  data-aos='zoom-in'
                data-aos-delay={`${400 + idx * 100}`}
                data-aos-duration='800' className='w-44 h-44 object-cover items-center rounded-md' src={item.image} alt="" />
                             <h1   data-aos='fade-up'
                data-aos-delay={`${600 + idx * 100}`}
                data-aos-duration='600'
                 className=' font-bold py-2'>{item.title}</h1>
                             <button className='bg-gradient-to-r from-purple-600 to-pink-400 text-white py-1 w-full rounded-xl hover:scale-105'        data-aos='fade-up'
                data-aos-delay={`${800 + idx * 100}`}
                data-aos-duration='600'>Details</button>
                            </div>
                        ))
                    }
                   </div>
                </div>
            </div>

            <div>
                <h1 data-aos='fade-up'
        data-aos-delay='200'
        data-aos-duration='300'
         className='text-3xl font-semibold px-24 pb-5'>Design And <span className='text-purple-600 font-extrabold'>Development</span></h1>
                <div   data-aos='fade-up'
        data-aos-delay='300'
        data-aos-duration='800'
         className='flex flex-wrap gap-10 justify-center py-6'>
                 {
                    design.map((item,idx)=> (
                        <div  data-aos='fade-up'
                        data-aos-delay={`${300 + idx * 100}`}
                        data-aos-duration='600'
                         key={idx} className='border-2 p-3'>
                            <img data-aos='zoom-in'
                data-aos-delay={`${400 + idx * 100}`}
                data-aos-duration='800' className='w-44 h-44 rounded-md' src={item.image} alt="" />
                            <h1  data-aos='fade-up'
                data-aos-delay={`${600 + idx * 100}`}
                data-aos-duration='600'
                 className='font-bold py-2'>{item.title}</h1>
                            <button className='bg-gradient-to-r from-purple-600 to-pink-400 text-white py-1 w-full rounded-md hover:scale-105'>Details</button>
                        </div>
                    ))
                 }
                </div>
            </div>
        

         <div className=''>
            <h1 data-aos='fade-up' data-aos-delay='200' data-aos-duration='300' className='text-4xl font-bold text-center py-7  '><span className='text-purple-600'>Certifications</span> Class</h1>
         <div data-aos='fade-right' data-aos-duration='400' data-aos-delay='500' className='grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mx-20 items-center py-10 '>
      {certifications.map((module, idx) => (
        <div    data-aos="fade-up"
        data-aos-delay={`${300 + idx * 100}`}
        data-aos-duration="600" 
         key={idx} className="border  ">
          <h2 className="text-2xl font-bold mb-3 hover:text-purple-500 mt-1">{module.module}</h2>
          <ul>
            {module.classes.map((classItem, classIdx) => (
              <li   data-aos="fade-right"
              data-aos-delay={`${classIdx * 100}`}
               key={classIdx} className="mb-2">
                <h3  className="text-xl font-semibold hover:text-purple-500">{classItem.title}</h3>
                <p className='hover:text-purple-500'>{classItem.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
         </div>

        </div>
    </div>
  )
}

export default Classes