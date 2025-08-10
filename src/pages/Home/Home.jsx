import React from 'react';
import Banner from '../../components/Banner/Banner';
import Futures from '../../futures/Futures';
import NewsLatter from '../NewsLatter/NewsLatter';
import ComingEvent from '../../components/Banner/ComingEvent/ComingEvent';
import Services from '../Services/Services';
import Announcement from '../../admin/Announcement';
import Cont from '../../admin/Cont';

const Home = () => {
    return (
        <div className=' min-h-screen'>
            <Banner />
            <div className='max-w-7xl mx-auto'>
            <Futures />
                {/* <Services />
                <ComingEvent /> */}
             <Announcement></Announcement>
             <Cont></Cont>
                <NewsLatter />
            </div>

        </div>
    );
};

export default Home;