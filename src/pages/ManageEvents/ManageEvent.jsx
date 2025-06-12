import { Pencil } from 'lucide-react';
import { MdDeleteForever } from "react-icons/md";
import React from 'react';
import { Link } from 'react-router';

const ManageEvent = ({ event }) => {
    
    const { thumbnail, title, description, _id, eventType, location, eventDate } = event;
    const handleDelete = () => {
        console.log('deletvvvvvvvvvvvvvvve')
    }

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
                    <div className="badge badge-secondary">{eventType}</div>
                </h2>
                <p>{description}</p>
                <p>{location}</p>
                <p>{eventDate}</p>
                <div className="card-actions justify-end">
                    <Link to={``}>
                        <button className="badge badge-outline">View</button>
                    </Link>
                    <Link to={`/update/${_id}`}>
                        <button className=""><Pencil fill='blue' /></button>
                    </Link>
                    <Link to={``}>
                        <button onclick={handleDelete} className=""><MdDeleteForever size={24} /></button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ManageEvent;