import React, { useState } from 'react';
import { HiSparkles} from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    const [isopen,setIsopen]=useState(false)
    return (
        <div className='bg-slate-300 md:flex justify-between p-4 md:mx-12'>
          <div className='flex'>
          <HiSparkles className='text-cyan-600 text-4xl'/> 
          <h3 className='text-cyan-600 text-4xl font-bold'>NextPage</h3> 
          </div>
           <div className='flex gap-5 font-bold  text-cyan-600 text-2xl'>
            {/* <Link to="/home">Home</Link> */}
            {/* <Link to="/books">Books</Link> */}
            {/* <Link to="/about">About Us</Link> */}
            <NavLink
                    to="/home"
                    className={({ isActive}) =>
                      isActive
                        ? "text-red-700" : ""
                    }
                  >Home
                    {/* other code */}
                  </NavLink>
                  <NavLink
                    to="/books"
                    className={({ isActive}) =>
                      isActive
                        ? "text-red-700" : ""
                    }
                  >Books
                    {/* other code */}
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive}) =>
                      isActive
                        ? "text-red-700" : ""
                    }
                  >About Us
                    {/* other code */}
                  </NavLink>
           </div>
        </div>


    );
};

export default Header;