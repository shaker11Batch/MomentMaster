import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import JoinEvent from './JoinEvent';
import { Link } from 'react-router';

const UserJoined = () => {
    const { user } = use(AuthContext)
    const [userJoin, setUserJoined] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/myJoinedEvent/${user?.email}`)
            .then(res => {
                console.log(res?.data)
                setUserJoined(res?.data)
            }).catch(error => {
                console.log(error)

            })
    }, [user])

    return (
        <div>
       

            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                       <th className='hidden md:block'>SL</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Location</th>
                        <th className='hidden md:block'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        userJoin.map((join, index) => <tr>
                            <th className='hidden md:block'>
                                <label>
                                    {index+1}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={join.thumbnail}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{join?.title}</div>
                                       
                                    </div>
                                </div>
                            </td>
                            <td>
                                {join?.eventType}
                              
                              
                            </td>
                            <td>{join?.location}</td>
                            <th className='hidden md:block'>
                               
                               <button className="btn btn-ghost btn-xs">{join?.eventDate}</button>
                               
                            </th>
                        </tr>)
                    }

                </tbody>

            </table>
        </div>

    )
}




export default UserJoined;