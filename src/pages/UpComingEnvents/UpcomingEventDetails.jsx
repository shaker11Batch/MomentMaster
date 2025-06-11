import React from 'react';
import { useLoaderData } from 'react-router';

const UpcomingEventDetails = () => {
   
    const details = useLoaderData()
    console.log(details.data)
    
    return (
        <div>

        </div>
    );
};

export default UpcomingEventDetails;