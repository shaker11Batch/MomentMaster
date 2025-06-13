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

        axios.post('http://localhost:3000/events', data)
            .then(res => {
                console.log(res.data)
                toast("Wow you successfully create event!")
                navigate('/upComingEvents')
            }).catch(err => {
                console.log(err)
            })
    }


    return (
        <div className=''>
            <form onSubmit={handleCreateEvent} className=' my-4 '>
                <fieldset className="">
                    <legend className="fieldset-legend">Event title</legend>
                    <input type="text" name='title' className="input " placeholder="Event title" />

                </fieldset>
                <fieldset className="">
                    <legend className="fieldset-legend">Photo URL</legend>
                    <input type="text" name='thumbnail' className="input  " placeholder="Photo URL" />

                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Location </legend>
                    <input type="text" name='location' className="input  " placeholder="Location" />

                </fieldset>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Your Description</legend>
                    <textarea name='description' className="textarea h-24" placeholder="Description"></textarea>

                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
                    <legend className="fieldset-legend">Event Type</legend>
                    <select defaultValue="Job Category" name='eventType' className="select">
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
                        onChange={data => setSelectedDate(data)}
                        dateFormat='dd/MM/yyyy'
                        minDate={new Date()}
                    />

                </div>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">HR_email </legend>
                    <input type="text" name='organizerEmail' defaultValue={user?.email} readOnly className="input " placeholder="organizerEmail" />

                </fieldset>
                <input className='btn btn-secondary' type="submit" value="Create Event" />
            </form>
        </div>
    );
};

export default CreateEvents;