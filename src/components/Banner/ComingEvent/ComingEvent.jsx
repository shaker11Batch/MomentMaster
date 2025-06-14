import React from 'react';
import filedClean from '../../../assets/cleaning.jpg'
const ComingEvent = () => {
  return (
    <div className='flex flex-col md:flex-row my-16 px-4 md:px-40 gap-16 w-full mx-auto items-center'>
      <div className=''>
        <img src={filedClean} alt="" className='md:max-w-sm w-[300px] rounded-4xl' />
      </div>
      <div className='md:max-w-1/2'>
        <h3 className="text-4xl font-bold">College cleaning</h3>
        <p className="py-6">
          Join our college road cleaning event to help keep our campus and surrounding areas clean and green. Promote awareness, teamwork, and community responsibility through active student participation.
        </p>
      </div>
    </div>


  );
};

export default ComingEvent;