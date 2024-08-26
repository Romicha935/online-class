import { faBook, faBriefcase, faChalkboard, faChartLine, faComment, faLaptop, faPen, faVideo } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile';
import { faMedal } from '@fortawesome/free-solid-svg-icons/faMedal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Live Classes",
      description: "Real-time interactive sessions with experienced instructors.",
      icon: <FontAwesomeIcon icon={faVideo}/> // You can use actual icons instead
    },
    {
      title: "Recorded Lectures",
      description: "Access pre-recorded video lectures for flexible learning.",
      icon: <FontAwesomeIcon icon={faBook}/>
    },
    {
      title: "Course Materials",
      description: "Downloadable resources like PDFs, slides, and study notes.",
      icon: <FontAwesomeIcon icon={faFile}/>
    },
    {
      title: "Quizzes & Assignments",
      description: "Interactive quizzes and assignments to assess understanding.",
      icon: <FontAwesomeIcon icon={faPen}/>
    },
    {
      title: "Certificates",
      description: "Receive official certifications upon course completion.",
      icon: <FontAwesomeIcon icon={faMedal}/>
    },
    {
      title: "Discussion Forums",
      description: "Join community forums to discuss topics and share knowledge.",
      icon: <FontAwesomeIcon icon={faComment}/>
    },
    {
      title: "1-on-1 Mentorship",
      description: "Personalized mentoring sessions with instructors.",
      icon: <FontAwesomeIcon icon={faChalkboard}/>
    },
    {
      title: "Career Guidance",
      description: "Get help with resume building, interview preparation, and job placements.",
      icon: <FontAwesomeIcon icon={faBriefcase}/>
    },
    {
      title: "Progress Tracking",
      description: "Tools to monitor your learning progress and performance.",
      icon: <FontAwesomeIcon icon={faChartLine}/>
    },
    {
      title: "Technical Support",
      description: "24/7 support for any technical issues or inquiries.",
      icon: <FontAwesomeIcon icon={faLaptop}/>
    },
  ];

  return (
    <div className='services-section py-10 px-5'>
      <h1 className='text-4xl font-bold text-center mb-10'>Our Services</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {services.map((service, idx) => (
          <div key={idx} className='border p-5 rounded-lg shadow-lg hover:shadow-xl transition duration-300'>
            <div className='text-4xl mb-3'>{service.icon}</div>
            <h2 className='text-2xl font-semibold mb-2'>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
