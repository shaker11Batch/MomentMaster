import React from 'react';
import { useLoaderData } from 'react-router';
import UpCommingEvent from './UpCommingEvent';

const UpComingEvents = () => {
    const events = useLoaderData()
   
    return (
        <div>
            <h2>Upcoming Events is here</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
                {
                    events?.data?.map(event => <UpCommingEvent
                        key={event._id}
                        event={event}
                    ></UpCommingEvent>)
                }
            </div>
        </div>
    );
};

export default UpComingEvents;