import React from 'react';
import { useLoaderData } from 'react-router';

const UpcomingEventDetails = () => {

    const details = useLoaderData()
    const { thumbnail, title, description, _id, eventType, location, eventDate, organizerEmail } = details?.data;

    return (
        <div className="card card-side bg-base-100 shadow-sm px-8 md: my-12">
            <figure>
                <img
                    src={thumbnail}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>{eventType}</p>
                <p>{eventDate}</p>
                <p>{location}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Joined Event</button>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEventDetails;