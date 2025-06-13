import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';

const UpcomingEventDetails = () => {
    const { user } = use(AuthContext)
    // console.log(user)
    const details = useLoaderData()
    const { thumbnail, title, description, _id, eventType, location, eventDate, organizerEmail } = details?.data;


    const handleJoinedEvents = () => {
        console.log('joined events')
        // if (user?.email === organizerEmail) {
        const joinInfo = {
            organizerEmail: user?.email,
            joinedId: _id

        }
        console.log(joinInfo)

        axios.post(`http://localhost:3000/joined-events/${_id}`, joinInfo)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    }
    

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
                    <button onClick={handleJoinedEvents} className="btn btn-primary">Joined Event</button>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEventDetails;