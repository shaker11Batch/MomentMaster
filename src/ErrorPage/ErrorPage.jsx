import React from 'react';
import error from '../assets/error.png'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className=' flex justify-center my-16'>
         <div>
         <img className='w-[500px]' src={error} alt="" />
         <Link className='flex justify-center' to='/'>
         <button className="btn btn-dash btn-success my-16 ">GO TO DASHBOARD</button>
         </Link>
         </div>
        </div>
    );
};

export default ErrorPage;