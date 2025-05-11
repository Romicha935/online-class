import React from 'react'
import popular from '../../../public/popular.json'

const Popular = () => {
  return (
    <div className='py-10'>
        <h1 className='text-4xl text-center'>Our <span className='text-purple-600'>Popular Class</span></h1>
        <div className='flex py-7 justify-center items-center flex-wrap gap-10 '>
            { popular.map((data,idx)=> (
              <div className='border rounded-md p-2 border-purple-400 w-fit' key={idx}>
                <img className='h-42 w-48 object-cover' src={data.image} alt="" />
                <h1 className='text-2xl font-bold'>{data.title}</h1>
                <h2 className='font-bold'>{data.category}</h2>
                <h3 className='text-purple-600'>{data.instractor}</h3>
                <p className='line-clamp-2 w-48 italic'>{data.details}</p>
               <div className='py-2'>
               <button className='w-full bg-gradient-to-r from-pink-400 to-purple-600 py-2 text-white hover:scale-105 rounded-full'>Details</button>
               </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Popular