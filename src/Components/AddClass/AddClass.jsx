import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const AddClass = () => {
  const [className, setClassName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [category, setCategory] = useState('');
  const [details, setDetails] = useState('');
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch classes from the backend when the component mounts
    axios.get('http://localhost:3000/classes')
      .then(res => setClasses(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const classData = { className, imgUrl, category, details };
    console.log(classData);

    axios.post('http://localhost:3000/class', classData)
      .then((res) => {
        if (res) {
          Swal.fire({
            title: "Successful add class!",
            text: "You clicked the button!",
            icon: "success"
          });
          // Add the new class to the state
          //setClasses([...classes, res.data]);
          return axios.get('http://localhost:3000/classes');
        }
      })
      .then((res) => {
        if (res) {
          setClasses(res.data);
        }
      })
   
      .catch((err) => {
        Swal.fire({
          title: "Unsuccessful add class!",
          text: "You clicked the button!",
          icon: "error"
        });
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/class/${id}`)
      .then(() => {
        Swal.fire({
          title: 'Deleted!',
          text: 'The class has been deleted.',
          icon: 'success'
        });
        // Remove the class from the state to update the UI
        setClasses(classes.filter(cls => cls._id !== id));
      })
      .catch(err => {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to delete the class. Please try again.',
          icon: 'error'
        });
      });
  };
  
  return (
    <div>
      <div className='min-h-screen shadow-md bg-gray-100 items-center px-5'>
        <h1 className='text-4xl font-bold text-center py-10'>Add Class</h1>
        <div className='space-y-4'>
          <form onSubmit={handleSubmit} className='w-1/2 justify-center py-7 -mt-5 bg-white mx-auto' action="">
            <div className='px-8'>
              <label className='' htmlFor="">Enter Your Class Name</label><br />
              <input
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className='w-full p-2 border-2 my-2 rounded-md border-purple-300'
                type="text"
                placeholder='name'
              />
            </div>
            <div className='px-8'>
              <label className='' htmlFor="imgurl">Enter Your Class ImageURL</label><br />
              <input
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
                className='w-full p-2 border-2 my-2 rounded-md border-purple-300'
                type="url"
                placeholder='image'
              />
            </div>
            <div className='px-8'>
              <label className='' htmlFor="">Enter Your Class Category</label><br />
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='w-full p-2 border-2 my-2 rounded-md border-purple-300'
                type="text"
                placeholder='category'
              />
            </div>
            <div className='px-8'>
              <label className='' htmlFor="">Enter Your Class Details</label><br />
              <input
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className='w-full py-7 p-2 border-2 my-2 rounded-md border-purple-300'
                type="text"
                placeholder='details'
              />
              <button
                type='submit'
                className='bg-gradient-to-r from-purple-600 to-pink-400 text-white w-full rounded-md hover:scale-105 py-2 my-2'
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className='min-h-screen shadow-md bg-gray-100 items-center px-5 py-10'>
          <h1 className='text-4xl font-bold text-center py-10'>Class List</h1>
          <div className='space-y-4 flex flex-wrap gap-10 justify-center'>
            {classes.map(cls => (
              <div key={cls._id} className='bg-white border-2 border-gray-300 p-4 rounded-md'>
                  <img src={cls.imgUrl} alt={cls.className} className='w-48 h-32 object-cover my-2' />
                <h2 className='text-2xl font-semibold'>{cls.className}</h2>
                <p>{cls.category}</p>
                <p className='line-clamp-2 w-52'>{cls.details}</p>
              
                <button
                  onClick={() => handleDelete(cls._id)}
                  className='bg-gradient-to-r from-purple-600 to-pink-400 text-white py-1 rounded-md hover:scale-105 my-2 w-full'
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
