import React, { use, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

import useAxiosSecure from '../../hooks/useAxiosSecure';
import { MapPin, Calendar, Clock, Users, Mic, CalendarDays } from "lucide-react";

const UpcomingEventDetails = () => {
    const { user } = use(AuthContext)

    const details = useLoaderData()
    const{ thumbnail, title, description, _id, eventType, location, eventDate, organizerEmail, runningTime, speakerDesignation, speakerName, seat, }= details?.data;
 
    const navigate = useNavigate()

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
                navigate('/upComingEvents')
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
       
        <div className="max-w-7xl mx-auto my-8 bg-base-100 shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
      
      
        <div className="p-6 flex flex-col justify-between w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-3">{title}</h2>
  
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> {location}
            </p>
            <p className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" /> {eventDate}
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" /> {runningTime}
            </p>
            <p className="flex items-center gap-2">
              <Mic className="w-4 h-4 text-primary" /> {speakerName} ({speakerDesignation})
            </p>
            <p className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" /> Seats: {seat}
            </p>
          </div>
  
          <p className="mt-4 text-gray-600 line-clamp-3">{description}</p>
          <button className="btn btn-outline btn-success w-full my-4 mt-4" onClick={handleJoinedEvents}>Join Event</button>
        </div>
  
        <div className="w-full md:w-1/3">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
};

export default UpcomingEventDetails;