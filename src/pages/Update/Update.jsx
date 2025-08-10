import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const Update = () => {
    const navigate = useNavigate()
    const data = useLoaderData();
    console.log(data)
    const { user } = useContext(AuthContext)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const { thumbnail, title, description, _id, eventType, organizerEmail, location, eventDate } = data?.data;
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
        <div>
            <h3 className="text-4xl font-bold text-center my-8">Update Event</h3>
            <form
                onSubmit={handleUpdate}
                className="pl-4 pr-4 md:pl-0 md:pr-0 grid grid-cols-1 md:grid-cols-2 gap-6 ">

                <div>
                    <legend className=" ">Event Title</legend>
                    <input type="text" className=" input w-full  " defaultValue={title} name='title' placeholder="My awesome page" />
                </div>
                <div>
                    <legend className=" ">Event photo</legend>
                    <input type="text" name='thumbnail' defaultValue={thumbnail} className=" input w-full " placeholder="My awesome page" />
                </div>
                <div>
                    <legend className=" ">Event Location</legend>
                    <input type="text" name='location'
                        defaultValue={location} className=" input w-full " placeholder="My awesome page" />
                </div>
                <fieldset className="fieldset ">
                    <legend className=" ">Event Description</legend>
                    <input name='description' defaultValue={description} className=" input w-full  " placeholder="Description"></input>

                </fieldset>
                <div className="">
                    <legend className=" ">Event Type</legend>
                    <select defaultValue={eventType} name='eventType' className="select ">
                        <option disabled={true}>Event Type</option>
                        <option>Talent Fusion Night</option>
                        <option>College Colors Day</option>
                        <option>Career Launchpad</option>
                        <option>Blood for Life</option>
                        <option>Clean & Care Campaign</option>
                        <option>Tree for Tomorrow</option>
                        <option>Inter-College Sports Fest</option>
                        <option>Battle of Champions</option>
                    </select>
                </div>
                <div className=''>
                    <legend className=" ">Event Date</legend>
                    <DatePicker
                        selected={selectedDate}
                        name='eventDate'
                        defaultValue={eventDate}
                        onChange={data => setSelectedDate(data)}
                        dateFormat='dd/MM/yyyy'
                        minDate={new Date()}
                        style={{ width: "500px" }}
                    />
                </div>

                <div className=" ">
                    <legend className=" ">HR_email </legend>
                    <input type="text" name='organizerEmail' defaultValue={user?.email} readOnly className=" input w-full  " placeholder="organizerEmail" />

                </div>
                <br />
                <input type="submit" className='btn btn-primary w-full' value="Create Event" />

            </form>
        </div>
    );
};

export default Update;