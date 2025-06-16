import React from 'react';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { IoMdTimer } from 'react-icons/io';
import { Link } from 'react-router';

const UpCommingEvent = ({ event }) => {
    // console.log(event)
    const { thumbnail, title, description, _id, eventType, location, eventDate, organizerEmail } = event;
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure>
                <img
                    src={thumbnail}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary"><span className='gap-4'><BiSolidCategoryAlt size={24} /></span>{eventType}</div>
                </h2>
                <p>{description}</p>
                <div className='flex flex-col md:flex-row md:gap-16'>
                    <p className=' flex items-center gap-4 my-2 mt-2 '><span className='gap-4'><CiLocationOn size={24} /></span>{location}</p>
                    <p className=' flex items-center gap-4  '><span className='gap-4'><IoMdTimer size={24} /></span>{eventDate}</p>
                </div>
                <div className="card-actions justify-end">
                   <Link to={`/upComingEvents/${_id}`}>
                   <btn className="badge badge-outline">View</btn>
                   </Link>
                   
                </div>
            </div>
        </div>
    );
};

export default UpCommingEvent;