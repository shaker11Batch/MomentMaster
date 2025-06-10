import React from 'react';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    return (
        <div className=' min-h-screen'>
            <Banner />
            <h3 className="text-center text-4xl my-4 font-bold">Feature section</h3>
            <h3 className="text-center text-4xl my-4 font-bold">Gallery Section</h3>
            <h3 className="text-center text-4xl my-4 font-bold">Newsletter</h3>
            <h3 className="text-center text-4xl my-4 font-bold"></h3>
        </div>
    );
};

export default Home;