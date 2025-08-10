import { useEffect, useState } from "react";
import {
  FaBullhorn,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMicrophone,
  FaClock,
  FaEnvelope,
  FaPhone,
  FaTicketAlt,
  FaLink,
} from "react-icons/fa";


const Announcement = () => {
  const [announcements, setAnnouncement] = useState([])
  useEffect(()=>{
  fetch("http://localhost:3000/announcement")
  .then(res=>res.json())
  .then(data =>{
    setAnnouncement(data)
  })
  },[])
  return (
    <div className="min-h-screen bg-base-200 p-6">

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold flex justify-center items-center gap-3">
          <FaBullhorn className="text-primary" />
          Event Announcements
        </h1>
        <p className="text-gray-500 mt-2">
          Stay updated with the latest event news and details.
        </p>
      </div>


      <div className="space-y-8 max-w-5xl mx-auto">
        {announcements?.map((item) => (
          <div
            key={item.id}
            className="card lg:card-side bg-base-100 shadow-xl hover:shadow-2xl transition"
          >
            <figure className="lg:w-1/3">
              <img
                src={item.speakerImage}
                alt={item.speaker}
                className="w-full h-64 object-cover"
              />
            </figure>

            <div className="card-body lg:w-2/3">
              <h2 className="card-title">
                {item.title}
                {item.isNew && <div className="badge badge-primary ml-2">NEW</div>}
              </h2>

              <div className="flex flex-wrap gap-4 mt-1 text-gray-600 text-sm">
                <p className="flex items-center gap-1">
                  <FaCalendarAlt /> {item.date}
                </p>
                <p className="flex items-center gap-1">
                  <FaClock /> {item.startTime} - {item.endTime}
                </p>
                <p className="flex items-center gap-1">
                  <FaTicketAlt /> Registration Deadline: {item.registrationDeadline}
                </p>
                <p className="flex items-center gap-1">
                  <FaMapMarkerAlt /> {item.location} ({item.room})
                </p>
                <p className="flex items-center gap-1">
                  <FaMicrophone /> Speaker: {item.speaker}
                </p>
              </div>

              <p className="mt-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
