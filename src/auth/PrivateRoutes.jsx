import React, {  useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()


    if (loading) {
        return <p className='text-3xl text-center my-9'>Loading ................</p>
    }

    if (!user) {
        return <Navigate to='/signIn' state={location.pathname}></Navigate>
    }
    return children
};

export default PrivateRoutes;