import React from 'react';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { CiLocationOn } from "react-icons/ci";
import { IoMdTimer } from 'react-icons/io';
import { SiTheboringcompany } from "react-icons/si";

const Future = ({ future }) => {
    const { title, location, description, image,time,category,date,organizer } = future;
    return (
        <div className="card bg-base-100  shadow-sm ">
            <figure>
                <img className='rounded-2xl'
                    src={image}
                    alt="Shoes" />
            </figure>
            
            <div className="card-body ">
            <div className='flex flex-col md:flex-row md:gap-16'>
                    <p className=' flex items-center gap-4 my-2 mt-2 '><span className='gap-4'><CiLocationOn size={24} /></span>{location}</p>
                    <p className=' flex items-center gap-4  '><span className='gap-4'><IoMdTimer size={24} /></span>{date} - {time}</p>
                </div>
                <h2 className="card-title px-3">{title}</h2>
                <p className='px-3'>{description}</p>
                <div className='flex flex-col md:flex-row md:gap-16'>
                    <p className=' flex items-center gap-4 my-2 mt-2 '><span className='gap-4'><BiSolidCategoryAlt size={24} /></span>{category}</p>
                    <p className=' flex items-center gap-4  '><span className='gap-4'><SiTheboringcompany size={24} /></span>{organizer}</p>
                </div>
            </div>
        </div>
    );
};

export default Future;