import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';


const CreateAnnouncement = () => {
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
  
      axios.post('http://localhost:3000/announcement', data)
        .then(res => {
          console.log(res.data)
          toast("Wow you successfully create event!")
          navigate('/')
        }).catch(err => {
          console.log(err)
        })
    }
  
  
    return (
  
      <div className='max-w-7xl mx-auto'>
        <h3 className="text-4xl font-bold text-center my-8">Create Announcement</h3>
  
        <form
          onSubmit={handleCreateEvent}
          className="pl-4 pr-4 md:pl-0 md:pr-0 grid grid-cols-1 md:grid-cols-2 gap-6 "
        >
          {/* Event Title */}
          <div>
            <legend>Announcement Title</legend>
            <input
              type="text"
              className="input w-full"
              name="title"
              placeholder="My awesome page"
            />
          </div>
  
          {/* Event Photo */}
          <div>
            <legend>Announcement Photo</legend>
            <input
              type="text"
              name="thumbnail"
              className="input w-full"
              placeholder="https://example.com/photo.jpg"
            />
          </div>
  
          {/* Event Location */}
          <div>
            <legend>Announcement Location</legend>
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
              <legend>Announcement Type</legend>
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
              
              </select>
            </div>
            <div>
              <legend>Announcement Date</legend>
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
  
  export default CreateAnnouncement;