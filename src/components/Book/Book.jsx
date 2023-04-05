import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
   
    const {subtitle,image,isbn13,price,title,}=book
    return (
        <Link to ={`/book/${isbn13}`}>
             <div className='shadow-green-500 relative p-8 h-[400px]  shadow-lg'>
           <h1 className='text-cyan-600 font-bold text-xl'>{title}</h1> 
           <h1 className='text-red-800 text-sm font-bold' >{subtitle}</h1>
           <img src={image} className='p-4 w-[300px]' alt="" /> 
           <div className='bg-black bg-opacity-60  absolute inset-0 opacity-0 hover:opacity-100 text-gray-500 '>
        <h1 className=' font-bold text-xl'>{title}</h1> 
           <h1 className=' text-sm font-bold' >{subtitle}</h1>
           <img src={image} className='p-4 w-[300px]' alt="" /> 
        </div>
        </div>
       
        </Link>
   
    );
};

export default Book;