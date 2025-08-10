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

    <div className='max-w-7xl mx-auto'>
      <h3 className="text-4xl font-bold text-center my-8">Create Event</h3>

      <form
        onSubmit={handleCreateEvent}
        className="pl-4 pr-4 md:pl-0 md:pr-0 grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-2"
      >
        {/* Event Title */}
        <div>
          <legend>Event Title</legend>
          <input
            type="text"
            className="input w-full"
            name="title"
            placeholder="My awesome page"
          />
        </div>

        {/* Event Photo */}
        <div>
          <legend>Event Photo</legend>
          <input
            type="text"
            name="thumbnail"
            className="input w-full"
            placeholder="https://example.com/photo.jpg"
          />
        </div>

        {/* Event Location */}
        <div>
          <legend>Event Location</legend>
          <input
            type="text"
            name="location"
            className="input w-full"
            placeholder="Cox's Bazar Convention Center"
          />
        </div>

        {/* HR Email */}
        <fieldset className="fieldset">
          <legend>HR Email</legend>
          <input
            type="text"
            name="organizerEmail"
            defaultValue={user?.email}
            readOnly
            className="input w-full"
            placeholder="organizerEmail"
          />
        </fieldset>

        {/* Event Type & Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 col-span-2">
          <div>
            <legend>Event Type</legend>
            <select
              defaultValue="Event Type"
              name="eventType"
              className="select w-full"
            >
              <option disabled={true}>Event Type</option>
              <option>Talent Fusion Night</option>
              <option>College Colors Day</option>
              <option>Technology Conference</option>
              <option>Career Launchpad</option>
              <option>Blood for Life</option>
              <option>Clean & Care Campaign</option>
              <option>Tree for Tomorrow</option>
              <option>Inter-College Sports Fest</option>
              <option>Battle of Champions</option>
            </select>
          </div>
          <div>
            <legend>Event Date</legend>
            <DatePicker
              selected={selectedDate}
              name="eventDate"
              onChange={(data) => setSelectedDate(data)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              className="input w-full"
            />
          </div>
        </div>

        {/* Event Running Time */}
        <div>
          <legend>Event Running Time</legend>
          <input
            type="text"
            name="runningTime"
            className="input w-full"
            placeholder="10:00 AM - 4:00 PM"
          />
        </div>

        {/* Room Number */}
        <div>
          <legend>Room Number</legend>
          <input
            type="text"
            name="roomNumber"
            className="input w-full"
            placeholder="Room 205"
          />
        </div>

        {/* Speaker Name */}
        <div>
          <legend>Speaker Name</legend>
          <input
            type="text"
            name="speakerName"
            className="input w-full"
            placeholder="Dr. John Doe"
          />
        </div>

        {/* Speaker Designation */}
        <div>
          <legend>Speaker Designation</legend>
          <input
            type="text"
            name="speakerDesignation"
            className="input w-full"
            placeholder="Professor, Computer Science"
          />
        </div>

        {/* Topic */}
        <div>
          <legend>Topic</legend>
          <input
            type="text"
            name="topic"
            className="input w-full"
            placeholder="Future of AI in Education"
          />
        </div>

        {/* Seats */}
        <div>
          <legend>Seats</legend>
          <input
            type="text"
            name="seat"
            className="input w-full"
            placeholder="400 seats"
          />
        </div>

        {/* Event Description */}
        <fieldset className="fieldset col-span-2">
          <legend>Event Description</legend>
          <textarea
            name="description"
            className="textarea w-full"
            placeholder="Write a short description..."
          ></textarea>
        </fieldset>

        {/* Submit Button */}
        <input
          type="submit"
          className="btn btn-primary w-full col-span-2"
          value="Create Event"
        />
      </form>

    </div>
  );
};

export default CreateEvents;


// https://i.ibb.co.com/BHhcVNx6/chuttersnap-Q-Kdj-Kxnt-H8-unsplash.jpg
// https://i.ibb.co.com/MDFf98Wq/kazuo-ota-Fi4-Nl-Ki39-No-unsplash.jpg
// https://i.ibb.co.com/8LKgHfgH/tim-napier-TDVs-BPs-CG7c-unsplash.jpg