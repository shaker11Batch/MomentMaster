import React from 'react';
import { useLoaderData } from 'react-router';
import UpCommingEvent from './UpCommingEvent';
import Search from './Search';

const UpComingEvents = () => {
    const events = useLoaderData()
    console.log(events)
    return (
        <div>
            <h2>Upcoming Events is here</h2>
            <Search></Search>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 px-8'>
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