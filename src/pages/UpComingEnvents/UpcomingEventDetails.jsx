import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { CiLocationOn } from 'react-icons/ci';
import { IoMdTimer } from "react-icons/io";
import { BiSolidCategoryAlt } from "react-icons/bi";
import useAxiosSecure from '../../hooks/useAxiosSecure';

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
            joinedEvent: true,
            title: title,
            description: description,
            thumbnail: thumbnail,
            eventType: eventType,
            eventDate: eventDate,
            location: location



        }
        console.log(joinInfo)
     const axiosSecure = useAxiosSecure()
        axiosSecure.post(`/joined-events/${_id}`, joinInfo)
            .then(res => {
                console.log(res)
                if (res?.data?.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your successfully join Event",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }).catch(err => {
                console.log(err)
            })
    }


    return (
        <div className='flex flex-col md:flex-row my-16 px-4 md:px-40 gap-16 w-full mx-auto items-center'>
            <div className=''>
                <img src={thumbnail} alt="" className='md:max-w-sm w-[300px] rounded-4xl' />
            </div>
            <div className='md:max-w-1/2'>
                <h3 className="text-4xl font-bold">{title}</h3>
                <p className="">
                    {description}
                </p>
                <p className="my-2">
                    {description}
                </p>
                <div className='flex gap-16'>
                    <p className=' flex items-center gap-4 my-4 '><span className='gap-4'><CiLocationOn size={24} /></span>{location}</p>
                    <p className=' flex items-center gap-4  '><span className='gap-4'><IoMdTimer size={24} /></span>{eventDate}</p>
                </div>
                <p className=' flex items-center gap-4 mb-4 '><span className='gap-4'><BiSolidCategoryAlt size={24} /></span>{eventType}</p>
                <button className="btn btn-outline btn-success w-full" onClick={handleJoinedEvents}>Join Event</button>
            </div>
        </div>
    );
};

export default UpcomingEventDetails;