import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';


const CreateEvents = () => {
    const { user } = useContext(AuthContext)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const navigate = useNavigate()
    const handleCreateEvent = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        formData.joinedEvent = false;
        const data = Object.fromEntries(formData.entries())
        data.joinedEvent = false;
        console.log(data)

        axios.post('https://event-management-server-pied.vercel.app/events', data)
            .then(res => {
                console.log(res.data)
                toast("Wow you successfully create event!")
                navigate('/upComingEvents')
            }).catch(err => {
                console.log(err)
            })
    }


    return (

        <div>
            <h3 className="text-4xl font-bold text-center my-8">Create Event</h3>
            <form
                onSubmit={handleCreateEvent}
                className="pl-4 pr-4 md:pl-0 md:pr-0 grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-2">

                <div>
                    <legend className=" ">Event Title</legend>
                    <input type="text" className=" input w-full   " name='title' placeholder="My awesome page" />
                </div>
                <div>
                    <legend className=" ">Event photo</legend>
                    <input type="text" name='thumbnail' className=" input w-full  " placeholder="My awesome page" />
                </div>
                <div>
                    <legend className=" ">Event Location</legend>
                    <input type="text" name='location' className=" input w-full  " placeholder="My awesome page" />
                </div>
                <fieldset className="fieldset">
                    <legend className=" ">HR_email </legend>
                    <input type="text" name='organizerEmail' defaultValue={user?.email} readOnly className=" input w-full   " placeholder="organizerEmail" />

                </fieldset>

                <div className="">
                    <legend className=" ">Event Type</legend>
                    <select defaultValue="Job Category" name='eventType' className="select ">
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
                        onChange={data => setSelectedDate(data)}
                        dateFormat='dd/MM/yyyy'
                        minDate={new Date()}
                        style={{ width: "500px" }}
                    />
                </div>
                <fieldset className="fieldset col-span-2 ">
                    <legend className=" ">Event Description</legend>
                    <textarea name='description' className=" textarea w-full " placeholder="Description"></textarea>

                </fieldset>


                <input type="submit" className='btn btn-primary w-full col-span-2' value="Create Event" />

            </form>
        </div>
    );
};

export default CreateEvents;