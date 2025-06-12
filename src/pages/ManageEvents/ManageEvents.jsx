import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ManageEvent from './ManageEvent';

const ManageEvents = () => {
    const myAddedEvents = useLoaderData()
    const [myEvents, setMyEvents] = useState(myAddedEvents?.data)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 px-8'>
                {
                    myEvents.map(event => <ManageEvent
                        key={event._id}
                        event={event}
                        myEvents={myEvents}
                        setMyEvents={setMyEvents}
                    ></ManageEvent>)
                }
            </div>
        </div>
    );
};

export default ManageEvents;