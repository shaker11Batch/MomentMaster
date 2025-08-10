import React from 'react';
// import lawyers from '../../assets/lawyer.png'
import CountUp from 'react-countup';

const Cont = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-4xl mb-12 mx-4 md:mx-0 '>
            <div className=' border-2 rounded-4xl pb-4'>
                <img className='w-[150px]' src='' alt="" />
                <div className='text-start px-8'>
                   <div className='flex items-center font-bold text-5xl'>
                   <CountUp 
                   start={875.039}
                    end={199}
                    duration={10}></CountUp>
                    <p>+</p>
                   </div>
                    <p className='text-xl text-gray-600 '>total Lawyers</p>
                </div>
            </div>
            <div className=' border-2  rounded-4xl pb-4 '>
                <img className='w-[150px]' src='' alt="" />
                <div className='text-start px-8'>
                   <div className='flex items-center font-bold text-5xl'>
                   <CountUp
                     start={875.039} 
                    end={467}
                    duration={10}></CountUp>
                    <p>+</p>
                   </div>
                    <p className='text-xl text-gray-600 '>total reviews</p>
                </div>
            </div>
            <div className=' border-2  rounded-4xl pb-4 '>
                <img className='w-[150px]' src='' alt="" />
                <div className='text-start px-8'>
                   <div className='flex items-center font-bold text-5xl'>
                   <CountUp 
                   start={875.039}
                    end={1900}
                    duration={10}></CountUp>
                    <p>+</p>
                   </div>
                    <p className='text-xl text-gray-600 '>Cases Initiated</p>
                </div>
            </div>
            <div className=' border-2  rounded-4xl pb-4 '>
                <img className='w-[150px]' src='' alt="" />
                <div className='text-start px-8'>
                   <div className='flex items-center font-bold text-5xl'>
                   <CountUp 
                   start={875.039}n
                    end={300}
                    duration={10}></CountUp>
                    <p>+</p>
                   </div>
                    <p className='text-xl text-gray-600 '>Total Stuffs</p>
                </div>
            </div>
           
        

        </div>
    );
};

export default Cont;