import React, { useContext, useEffect, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/img/logo1.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { app } from '../Firebase/Firebase.config';
import { SearchContext } from '../SearchProvider/SearchProvider';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth(app);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });
    return () => unsubscribe();
  }, [auth]);

  const Routers = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Classes', link: '/classes' },
    { id: 3, name: 'Add Class', link: '/add-class' },
    { id: 4, name: 'My Favourite class', link: '/mfclass' },
    { id: 5, name: 'Services', link: '/servicess' },
  ];

  const handleLogout = () => {
    signOut(auth)
      .then(() => navigate('/login'))
      .catch((error) => console.log('logout error:', error));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='shadow-md bg-white w-full z-50'>
      {/* Upper Navbar */}
      <div className='bg-purple-500 py-3 px-4 flex justify-between items-center sm:px-10'>
        <div className='flex items-center gap-2'>
          <img src={logo} alt='logo' className='w-10 h-10 rounded-full object-cover' />
          <a href='/' className='text-2xl font-bold text-white'>Online Class</a>
        </div>

        {/* Search Input (hidden on small) */}
        <div className='hidden sm:flex relative items-center'>
          <input
            value={searchTerm}
            onChange={handleSearch}
            type='text'
            placeholder='Search'
            className='w-[200px] sm:w-[200px] group-hover:w-[300px] py-1 px-2 transition-all duration-300 rounded-full border border-gray-300 focus:outline-none focus:border-purple-600'
          />
          <IoMdSearch className='absolute right-3 text-gray-500' />
        </div>

        {/* Hamburger Icon for mobile */}
        <div className='sm:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)} className='text-white text-2xl'>
            <FaBars />
          </button>
        </div>

        {/* Login / Logout Button */}
        <div className='hidden sm:block'>
          {user ? (
            <button
              onClick={handleLogout}
              className='bg-gradient-to-r from-purple-600 to-pink-400 text-white py-1 px-4 rounded-full hover:scale-110 transition'
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className='bg-gradient-to-r from-purple-600 to-pink-400 text-white py-1 px-4 rounded-full hover:scale-110 transition'
            >
              Log in
            </button>
          )}
        </div>
      </div>

      {/* Lower Navbar for large screens */}
      <div className='hidden sm:flex justify-center bg-white shadow-md'>
        <ul className='flex gap-6 py-3'>
          {Routers.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className={`px-4 py-2 ${
                  location.pathname === data.link
                    ? 'text-purple-500 border-b-2 border-purple-500'
                    : 'text-gray-600 hover:text-purple-500'
                }`}
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='sm:hidden bg-white shadow-md'>
          <ul className='flex flex-col items-center gap-4 py-4'>
            {Routers.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2 text-lg ${
                    location.pathname === data.link
                      ? 'text-purple-500 border-b-2 border-purple-500'
                      : 'text-gray-600 hover:text-purple-500'
                  }`}
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* Login/Logout for mobile */}
            <li>
              {user ? (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    handleLogout();
                  }}
                  className='bg-gradient-to-r from-purple-600 to-pink-400 text-white py-1 px-4 rounded-full'
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate('/login');
                  }}
                  className='bg-gradient-to-r from-purple-600 to-pink-400 text-white py-1 px-4 rounded-full'
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
