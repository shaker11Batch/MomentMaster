import React from 'react';
import { CiLocationOn } from "react-icons/ci";

const Future = ({ future }) => {
    const { title, location, description, image } = future;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <p className='px-3 pt-8 flex items-center'><span className='px-3'><CiLocationOn  size={24}/></span>{location}</p>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default Future;