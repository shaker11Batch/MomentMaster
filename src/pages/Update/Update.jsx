import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const Update = () => {
    const navigate =useNavigate()
    const data = useLoaderData();
    console.log(data)
    const { user } = useContext(AuthContext)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const { thumbnail, title, description, _id, eventType,organizerEmail, location, eventDate } = data?.data;
    console.log(_id)

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        console.log(data)


        axios.put(`http://localhost:3000/eventUpdate/${_id}`, data)
            .then(res => {
                console.log(res.data)
                if (res?.data?.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(`/myEvents/${organizerEmail}`)
                }
            }).catch(err => console.log(err))

    }


    return (
        <div className=''>
            <form onSubmit={handleUpdate} className=' my-4 '>
                <fieldset className="">
                    <legend className="fieldset-legend">Event title</legend>
                    <input type="text" name='title' defaultValue={title} className="input " placeholder="Event title" />

                </fieldset>
                <fieldset className="">
                    <legend className="fieldset-legend">Photo URL</legend>
                    <input type="text" name='thumbnail' defaultValue={thumbnail} className="input  " placeholder="Photo URL" />

                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Location </legend>
                    <input type="text" name='location' className="input" defaultValue={location} placeholder="Location" />

                </fieldset>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Your Description</legend>
                    <textarea name='description' className="textarea h-24" defaultValue={description} placeholder="Description"></textarea>

                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
                    <legend className="fieldset-legend">Event Type</legend>
                    <select defaultValue={eventType} name='eventType' className="select">
                        <option disabled={true}>Event Type</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>
                </fieldset>
                <div className='border w-3/12 my-2'>
                    <p>Date</p>
                    <DatePicker
                        selected={selectedDate}
                        name='eventDate'
                        defaultValue={eventDate}
                        onChange={data => setSelectedDate(data)}
                        dateFormat='dd/MM/yyyy'
                        minDate={new Date()}
                    />

                </div>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">HR_email </legend>
                    <input type="text" name='organizerEmail' defaultValue={user?.email} className="input " placeholder="organizerEmail" />

                </fieldset>
                <input className='btn btn-secondary' type="submit" value="Create Event" />
            </form>
        </div>
    );
};

export default Update;