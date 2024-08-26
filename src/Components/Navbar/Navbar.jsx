import React, { useEffect, useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import { IoCard } from 'react-icons/io5'
import logo from '../../assets/img/logo1.jpg'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { app } from '../Firebase/Firebase.config';


const Navbar = ({handleOrder}) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const auth = getAuth(app);
  
    useEffect(() => {
      // Track user login state
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser); // User is logged in
        } else {
          setUser(null); // User is logged out
        }
      });
    
      // Clean up subscription on component unmount
      return () => unsubscribe();
    }, [auth]);
    
    
const Routers = [
    {
        id:1,
        name: "Home",
        link: "/"
    },
    {
        id:2,
        name: "Classes",
        link: "/classes"
    },
    {
        id:3,
        name: "Add Class",
        link: "/add-class"
    },
    {
        id:4,
        name: "My Favourite class",
        link: "/mfclass"
    },
    {
        id:5,
        name: "Servicess",
        link: "/servicess"
    }
]

const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('ব্যবহারকারী লগআউট করেছে');
        navigate('/login'); 
      })
      .catch((error) => {
        console.log('logout error:', error);
      });
  };

  return (
    <div className='shadow-md bg-white duration-300 relative w-full -mx-px'>
    {/*upper navbar */}
       <div className='bg-purple-500 py-2 px-10 items-center justify-between  flex '>
        <div className='container flex justify-between items-center'>
           <div>
           <a href="#" className='text-2xl font-bold sm:text-3xl flex gap-2 text-white'><img className='w-10 object-cover rounded-full' src={logo} alt="" />Online Class</a>
           </div>
     
        {/*search bar */}
        <div className='relative group flex items-center justify-center'>
        <div className='group hidden sm:block'>
            <input type="text" placeholder='search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] py-1 px-2 translate-all duration-300 rounded-full border border-gray-300 focus:outline-none focus:border-1 focus:border-purple-600' />
            <IoMdSearch className='absolute top-1/2 -translate-y-1/2 right-3 text-gray-500 group-hover:text-purple-600'/>
        </div>
        </div>
       

      

           {/* Conditional rendering of Login/Logout button */}
           {user ? (
            <button
              onClick={handleLogout}
              className='bg-gradient-to-r from-purple-600 to-pink-400 text-white py-1 px-4 duration-200 rounded-full hover:scale-110'
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className='bg-gradient-to-r from-purple-600 to-pink-400 text-white py-1 px-4 duration-200 rounded-full hover:scale-110'
            >
              Log in
            </button>
          )}
           
          

        </div>
       </div>
    {/*lowar Navbar */}
    <div className=''>
        <div className='flex justify-center'>
            <ul className=' sm:flex hidden justify-center gap-4'>
            {
                Routers.map((data)=>(
                    <li key={data.id}><a className={`inline-block px-4 py-2 duration-200 ${location.pathname === data.link ? 'text-purple-500 border-b-2 border-purple-500 mb-5' : 'text-gray-600 hover:text-purple-500'}`} href={data.link}>{data.name}</a></li>

                ))
            }
            </ul>
        </div>
    </div>
</div>
  
  )
}

export default Navbar

