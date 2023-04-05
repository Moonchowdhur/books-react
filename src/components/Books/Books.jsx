import React from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Book from '../Book/Book';
import Loadingspiner from '../Loadingspiinner/Loadingspiner';

const Books = () => {
    const navigation=useNavigation()
    if(navigation.state==="loading"){
        return <Loadingspiner></Loadingspiner>
    }
    const books=useLoaderData()
    return (
        <Link >
          <div className=' gap-5 my-8 md:mx-12 p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'> 
            {
                books.books.map(book=><Book book={book}></Book>)
            }
        </div>
        </Link>
      
    );
};

export default Books;