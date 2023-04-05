import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const BookDetails = () => {
    const navigation=useNavigate()
    if(navigation.state==="loading"){
        return <Loadingspiner></Loadingspiner>
    }
    const eachBook=useLoaderData()
    const [fold,setFold]=useState(true)
    console.log(eachBook)
    const {image,authors,publisher,price,desc,title,rating}=eachBook
    return (
        <div className=' border md:flex justify-center items-center'>
            <img src={image} className='p-4' alt="" />
            <div className=' mt-6 text-xl '>
                <h2 className='font-bold'>{title}</h2>
                <h2 className='my-5 font-bold'>Authors:{authors}</h2>
                <h2 className='my-5 font-semiboldbold'>Publisher:{publisher}</h2>
                <h2>Rating:{rating}</h2>
                {
                   fold ?(
                    <>
                    <p>{desc.slice(0,100)}..</p>
                    <span className='px-3 py-2 text-green-500 font-bold' onClick={()=>setFold(false)}>Read More</span></>
                   ):(
                    <>
                    <p>{desc}</p>
                    <span className='px-3 py-2 text-blue-400 font-bold' onClick={()=>setFold(true)}>Read Less</span></>
                   )
                }
                <div className='flex gap-5  items-center'>
                    <button className='sale my-8'>Buy Now</button>
                    <p>price:{price}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;