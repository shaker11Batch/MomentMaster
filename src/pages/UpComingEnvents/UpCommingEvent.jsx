import React from 'react';
import { Link } from 'react-router';

const UpCommingEvent = ({ event }) => {
    // console.log(event)
    const { thumbnail, title, description, _id, eventType, location, eventDate, organizerEmail } = event;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={thumbnail}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{eventType}</div>
                </h2>
                <p>{description}</p>
                <p>{location}</p>
                <p>{eventDate}</p>
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