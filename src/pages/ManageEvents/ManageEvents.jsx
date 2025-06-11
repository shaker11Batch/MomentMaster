import React from 'react';
import { useLoaderData } from 'react-router';
import ManageEvent from './ManageEvent';

const ManageEvents = () => {
    const myEvents = useLoaderData()
    console.log(myEvents)
    return (
        <div>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 px-8'>
                {
                    myEvents?.data?.map(event => <ManageEvent
                        key={event._id}
                        event={event}
                    ></ManageEvent>)
                }
            </div>
        </div>
    );
};

export default ManageEvents;