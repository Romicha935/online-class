import React, { useState } from 'react'
import {  } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from 'react-icons/io';

const FAQ = () => {

  const [selected, setSelected] = useState(null);

  const toggle = (idx) => {
    
      if (selected === idx) {
          return setSelected(null);
      }
      setSelected(idx);
  };

  const FaqData = [
    {
       question: "How can I register for a class?",
            answer: "You can register for a class by visiting our registration page and filling out the necessary information."
    },
    {
      question: "What is the refund policy?",
      answer: "Refunds are available within the first week of classes. Please contact support for more details."
  },
  {
      question: "How do I access my course materials?",
      answer: "You can access course materials by logging into your account and navigating to the 'My Courses' section."
  },
  {
    question: "Can I pause or resume a course?",
    answer: "Yes, you can pause and resume a course at any time from your course dashboard."
},
{
    question: "What are the technical requirements to take a class?",
    answer: "You need a stable internet connection, a modern web browser, and any necessary software mentioned in the course description."
},
{
    question: "Do I get a certificate after completing a course?",
    answer: "Yes, a certificate of completion will be available for download once you successfully finish the course."
},
{
    question: "How do I contact customer support?",
    answer: "You can contact customer support through the 'Contact Us' page, or by emailing support@example.com."
},
  ]
  console.log(FaqData)
  return (
    <div>
      <div className='max-w-4xl  mx-auto my-10'>
        <h1 data-aos='fade-up' data-aos-delay='300' data-aos-duration='500' className='text-3xl font-semibold text-center py-10'><span className='text-purple-500 font-bold'>Frequency</span> Asked Ques<span className='text-purple-500'>tion</span></h1>
        {
          FaqData.map((item,idx)=>(
            <div key={idx} className='mb-4'>
              <div className='bg-white text-2xl p-4 rounded cursor-pointer flex justify-between border-b border-purple-200' onClick={()=> toggle(idx)}>
                {item.question}
            {selected === idx? <IoIosArrowUp/> : <IoIosArrowDown/>}
              </div>
              <div className={`p-4 bg-purple-100 rounded mt-2 ${selected === idx ? 'block' : 'hidden'}`}>
           
               
                {item.answer}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FAQ