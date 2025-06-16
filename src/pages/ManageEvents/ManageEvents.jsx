import React, { use, useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import ManageEvent from './ManageEvent';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import useAxios from '../../hooks/useAxios';

const ManageEvents = () => {
    // const myAddedEvents = useLoaderData()
    const { user } = useContext(AuthContext)
    
    // console.log(user?.accessToken)
    const [myEvents, setMyEvents] = useState([])
    console.log(myEvents)
   
    useEffect(() => {
        const token = user?.accessToken
        axios(`http://localhost:3000/myEvent/${user?.email}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
            
        }
        )
            .then(res => {
                console.log(res)
                setMyEvents(res?.data)
            })
    }, [user])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 px-8'>
              
                {
                    myEvents?.map(event => <ManageEvent
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