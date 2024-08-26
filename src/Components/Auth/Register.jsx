import React from 'react'

const Register = () => {

 // const navigate = useNavigate()
  

  const handleRegister = async (e) => {
    
    e.preventDefault();
    const data = e.target;
    const name = data.name.value
    const email = data.email.value
    const password = data.password.value;
    console.log('name',name, 'email:',email, 'password:', password)
  }
  return (
    <div className='bg-gray-100 py-10'>
      <div className='bg-white max-w-md mx-auto rounded-lg border-gray-700 shadow-lg'>
        <h1 className='text-3xl text-cente font-bold text-center pt-5 text-purple-500'>Create an account</h1>
        <form onSubmit={handleRegister} className=''  >
        <div className='px-6 py-4'>
            <label htmlFor="name" className='block text-gray-700 text-sm font-semibold mb-2'>Name*</label>
            <input 
              type="text"
              id="name"
             
              
              className='w-full border-2 border-gray-300 py-2 px-4 rounded-md placeholder-gray-500 focus:outline-none focus:border-purple-500'
              placeholder='Enter your Email'
            />
          </div>
          <div className='px-6 py-4'>
            <label htmlFor="email" className='block text-gray-700 text-sm font-semibold mb-2'>Email*</label>
            <input 
              type="email"
              id="email"
             
              
              className='w-full border-2 border-gray-300 py-2 px-4 rounded-md placeholder-gray-500 focus:outline-none focus:border-purple-500'
              placeholder='Enter your Email'
            />
          </div>
          <div className='px-6 py-4'>
            <label htmlFor="password" className='block text-gray-700 text-sm font-semibold mb-2'>Password*</label>
            <input
              type="password"
              id="password"
              
              
              className='w-full border-2 border-gray-300 py-2 px-4 rounded-md placeholder-gray-500 focus:outline-none focus:border-purple-500'
              placeholder='Enter your password'
            />
           
             <div className='px-6 pb-6 text-right'>
          <a href='/forgot-password' className='text-purple-500 hover:text-purple-700 text-sm '>Forgot password?</a>
        </div>
          </div>
          <div className='px-6 py-2'>
            <button
              type='submit'
              className='bg-gradient-to-r from-purple-500 to-pink-400 text-white w-full py-2 text-lg rounded-md hover:scale-105 transition-transform duration-300'
            >
              Create an account
            </button>
          </div>
        </form>
        <div className='px-6 pb-6 text-center'>
          <p className='text-gray-600 text-sm'>Allrady have an account? 
            <a href='/login' className='text-purple-500 hover:text-purple-700 font-semibold'> Login here!</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register