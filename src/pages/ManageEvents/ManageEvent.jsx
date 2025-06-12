import { Pencil } from 'lucide-react';
import { MdDeleteForever } from "react-icons/md";
import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import axios from 'axios';

const ManageEvent = ({ event, myEvents, setMyEvents }) => {

    const { thumbnail, title, description, _id, eventType, location, eventDate } = event;
    const handleDelete = (id) => {
        console.log('deleted by id', id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/myEvents-delete/${_id}`)
                    .then(res => {
                        console.log(res)
                        if (res?.data?.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }

            // const remainingEvents = myEvents.filter(events => events._id !== id)
            const remainingRecipes = myEvents.filter(recipe => recipe._id !== id)
            setMyEvents(remainingRecipes)
        });
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

                    <button onClick={() => handleDelete(_id)} className=""><MdDeleteForever size={24} /></button>


                </div>
            </div>
        </div>
    );
};

export default ManageEvent;