import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Future from './Future';
import { fadeIn } from '../variants';

const Futures = () => {
    const [futures, setFutures] = useState([])

    useEffect(() => {

        axios.get('https://event-management-server-pied.vercel.app/futures')
            .then(res => {
                // console.log(res.data)
                setFutures(res?.data)
            })
    }, [])
    return (
        <>
            <h4 className="text-center text-2xl font-semibold text-red-600">Event</h4>
            <h3 className="text-4xl text-center font-bold mb-12 ">POPULAR EVENT</h3>

            <div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8'>
                {
                    futures.map(future => <Future
                        key={future._id}
                        future={future}
                    ></Future>)
                }
            </div>
        </>
    );
};

export default Futures;