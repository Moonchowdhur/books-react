import React from 'react';

const Loadingspiner = () => {
    return (
        <div className='flex h-[500px] justify-center items-center text-center'>
          <h2 className='text-9xl text-cyan-600 font-bold'>L</h2>  
          <h2 className='text-9xl  text-red-600  animate-spin font-bold'>O</h2>  
          <h2 className='text-9xl text-cyan-800 font-bold'>A</h2>  
          <h2 className='text-9xl text-cyan-800 font-bold'>D</h2>  
          <h2 className='text-9xl text-cyan-800 font-bold'>I</h2>  
          <h2 className='text-9xl text-cyan-800 font-bold'>N</h2>  
          <h2 className='text-9xl text-cyan-800 font-bold'>G</h2>  
        
        </div>
    );
};

export default Loadingspiner;