import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpcomingEventDetails = () => {
    const { user } = use(AuthContext)
   
    const details = useLoaderData()
    const { thumbnail, title, description, _id, eventType, location, eventDate } = details?.data;


    const handleJoinedEvents = () => {
        console.log('joined events')
        // if (user?.email === organizerEmail) {
        const joinInfo = {
            organizerEmail: user?.email,
            joinedId: _id,
            joinedEvent: true

        }
        console.log(joinInfo)

        axios.post(`http://localhost:3000/joined-events/${_id}`, joinInfo)
            .then(res => {
                console.log(res)
                if (res?.data?.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }).catch(err => {
                console.log(err)
            })
    }


    return (
        <div className="card flex-row card-side bg-base-100 shadow-sm px-8 md: my-12">
            <figure className='w-2/4'>
                <img
                    src={thumbnail}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>{eventType}</p>
                <p>{eventDate}</p>
                <p>{location}</p>
                <div className="card-actions ">
                    <button onClick={ handleJoinedEvents }  className="btn btn-primary">Joined Event</button>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEventDetails;