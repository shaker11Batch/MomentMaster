import { Pencil } from 'lucide-react';
import { MdDeleteForever } from "react-icons/md";
import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import axios from 'axios';
import { IoMdTimer } from 'react-icons/io';
import { CiLocationOn } from 'react-icons/ci';
import { BiSolidCategoryAlt } from 'react-icons/bi';

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
                <h2 className="card-title text-blue-500">
                    {title}
                </h2>
                <div className="">
                    {description}
                </div>
                <div className='flex flex-col md:flex-row md:gap-16'>
                    <p className=' flex items-center gap-4 my-2 mt-2 '><span className='gap-4'><CiLocationOn size={24} fill='blue' /></span>{location}</p>
                    <p className=' flex items-center gap-4  '><span className='gap-4'><IoMdTimer size={24} fill='blue' /></span>{eventDate}</p>
                </div>
                <p className=' flex items-center gap-4 mb-4 '><span className='gap-4'><BiSolidCategoryAlt size={24} fill='blue' /></span>{eventType}</p>
                <div className="card-actions justify-end">
                    
                    <Link to={`/update/${_id}`}>
                        <button className="btn btn-outline rounded-full"><Pencil fill='blue' /></button>
                    </Link>

                    <button onClick={() => handleDelete(_id)} className="btn btn-outline rounded-full"><MdDeleteForever size={24} fill='red' /></button>


                </div>
            </div>
        </div>
    );
};

export default ManageEvent;