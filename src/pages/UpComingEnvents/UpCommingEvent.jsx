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
                <div className='flex flex-col md:flex-row gap-4'>
                    <h2 className="font-bold text-xl text-blue-500">
                        {title}
                    </h2>
                    <div className="btn btn-outline  btn-info"><span className='gap-4'><BiSolidCategoryAlt size={24} /></span><span className=''>{eventType}</span></div>
                </div>
                <p>{description}</p>
                <div className='flex flex-col md:flex-row md:gap-16'>
                    <p className=' flex items-center gap-4 my-2 mt-2 '><span className='gap-4'><CiLocationOn size={24} fill='blue'/></span>{location}</p>
                    <p className=' flex items-center gap-4  '><span className='gap-4'><IoMdTimer size={24} fill='blue' /></span>{eventDate}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/upComingEvents/${_id}`}>
                        <btn className="btn btn-outline btn-primary">View</btn>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default UpCommingEvent;