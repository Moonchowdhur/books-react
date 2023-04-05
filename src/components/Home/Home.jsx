import React from 'react';
import { Link } from 'react-router-dom';
// import Lottie from 'lottie-react'
// import pic from '../../assets/42367-joy-in-education.json'
const Home = () => {
    return (
        <div className='md:mx-12 p-4 '>

         <div>
         <button className='sale'>ON SALE!</button>
         <h2 className='text-4xl font-bold my-4'>A reader lives a<br></br><span className='text-cyan-600 text-5xl'>thousand lives before he dies</span></h2>
          <p className='text-2xl my-4'>
          Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.
          </p>
        <Link to="/books"><button className='sale me-5'>Visit Store </button></Link>  
          <button className='font-bold text-cyan-600 '>Learn More</button>
         </div>
          {/* <div>
          <Lottie animationData={pic} loop={true} />
          </div> */}
        </div>
    );
};

export default Home;