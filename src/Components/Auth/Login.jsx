import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from '../Firebase/Firebase.config';

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = e.target;
    const email = data.email.value;
    const password = data.password.value;
    console.log('email:', email, 'password:', password);

    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then(res => {
          console.log('Login successful:', res);
          navigate('/'); // Successful login redirects to home page
        })
        .catch(err => {
          console.log('Login error:', err);
          setError('Login failed. Please check your credentials.');
        });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (customer) => {
      if (customer) {
        console.log('User is logged in:', customer);
        navigate('/'); // If user is already logged in, redirect to home
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  return (
    <div className='bg-gray-100 py-10'>
      <div className='bg-white max-w-md mx-auto border border-gray-300 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-extrabold text-center text-purple-500 py-6'>Login</h1>
        <form className='' onSubmit={handleSubmit}>
          <div className='px-6 py-4'>
            <label htmlFor="email" className='block text-gray-700 text-sm font-semibold mb-2'>Email*</label>
            <input 
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full border-2 border-gray-300 py-2 px-4 rounded-md placeholder-gray-500 focus:outline-none focus:border-purple-500'
              placeholder='Enter your Email'
            />
          </div>
          <div className='px-6 py-4'>
            <label htmlFor="password" className='block text-gray-700 text-sm font-semibold mb-2'>Password*</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full border-2 border-gray-300 py-2 px-4 rounded-md placeholder-gray-500 focus:outline-none focus:border-purple-500'
              placeholder='Enter your password'
            />
            {error && <div className='px-6 py-4 text-red-500'>{error}</div>}
            <div className='px-6 pb-6 text-right'>
              <a href='/forgot-password' className='text-purple-500 hover:text-purple-700 text-sm'>Forgot password?</a>
            </div>
          </div>
          <div className='px-6 py-4'>
            <button
              type='submit'
              className='bg-gradient-to-r from-purple-500 to-pink-400 text-white w-full py-2 text-lg rounded-md hover:scale-105 transition-transform duration-300'
            >
              Login
            </button>
          </div>
        </form>
        
        <div className='px-6 pb-6 text-center'>
          <p className='text-gray-600 text-sm'>Don't have an account yet? 
            <a href='/register' className='text-purple-500 hover:text-purple-700 font-semibold'> Register now!</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
