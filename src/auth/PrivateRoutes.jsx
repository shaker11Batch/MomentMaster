import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()


    if (loading) {
        return <p className='text-3xl text-center my-9'><span className="loading loading-spinner text-primary">
        </span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
        </p>
    }

    if (!user) {
        return <Navigate to='/logIn' state={location.pathname}></Navigate>
    }
    return children
};

export default PrivateRoutes;