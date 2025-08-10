import React from 'react';
import { MapPin, Calendar, Clock, Users, Mic, CalendarDays, Tag } from "lucide-react";
import { Link, useNavigate } from 'react-router';

const UpCommingEvent = ({ event }) => {
  // console.log(event)
  const { thumbnail, title, description, _id, eventType, location, eventDate, organizerEmail, runningTime, speakerDesignation, speakerName, seat, } = event;
  const navigate = useNavigate()
  const handleDetail = () => {
    navigate(`${_id}`)
  }

  return (
    <div className="card w-full md:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Tag className="w-4 h-4" />
          <span>{eventType}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <CalendarDays className="w-4 h-4" />
          <span>{event.eventDate}</span>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link to={`/upComingEvents/${_id}`}>
            <button className="btn btn-primary w-full">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpCommingEvent;