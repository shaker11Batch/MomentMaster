import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';

const MainLayOut = () => {
    return (
        <div >
            <Navbar />
            <div className='max-w-screen mx-auto'>
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayOut;