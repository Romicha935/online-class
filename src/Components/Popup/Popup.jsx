import React, { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const Popup = ({order,setOrder}) => {
    //const [order,setOrder] = useState(false)
  return (
    <div>
       {order && (
        <div className='popup'> 
        <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-10 backdrop-blur-sm'>
            <div className='fixed  justify-center top-1/2 left-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded duration-200 w-[300px]'>
            {/*header section */}
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-2xl font-semibold py-2'>Order Now</h1>
                </div>
                <div>
                    <IoCloseOutline className='text-2xl cursor-pointer' onClick={()=> setOrder(false)}></IoCloseOutline>
                </div>
            </div>
            {/*form section */}
             <div>
                <input type="text" placeholder='Name' className='w-full rounded-full border border-gray-300 px-2 mb-4 py-1'/>

                <input type="email" placeholder='Email' className='w-full rounded-full border border-gray-300 px-2 mb-4 py-1'/>

                <input type="text" placeholder='Address' className='w-full rounded-full border border-gray-300 px-2 mb-4 py-1'/>

                <div className='flex justify-center'>
                <button className='bg-blue-500 w-full py-1 rounded-full text-white duration-200 hover:bg-blue-600'>Order Now</button>
                </div>
             </div>
            </div>
        </div>
        </div>

       )}
    </div>
  )
}

export default Popup