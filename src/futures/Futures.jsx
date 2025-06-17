import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Future from './Future';
import { fadeIn } from '../variants';

const Futures = () => {
    const [futures, setFutures] = useState([])

    useEffect(() => {
      
        axios.get('http://localhost:3000/futures')
            .then(res => {
                // console.log(res.data)
                setFutures(res?.data)
            })
    }, [])
    return (
        <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8'>
            {
                futures.map(future => <Future
                    key={future._id}
                    future={future}
                ></Future>)
            }
        </div>
    );
};

export default Futures;