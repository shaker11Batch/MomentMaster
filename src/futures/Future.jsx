import React from 'react';
import { CiLocationOn } from "react-icons/ci";

const Future = ({ future }) => {
    const { title, location, description, image } = future;
    return (
        <div className="card bg-base-100  shadow-sm ">
            <figure>
                <img className='rounded-2xl'
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            
            <div className="card-body ">
            <p className=' flex items-center '><span className='px-3'><CiLocationOn  size={24}/></span>{location}</p>
                <h2 className="card-title px-3">{title}</h2>
                <p className='px-3'>{description}</p>
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default Future;