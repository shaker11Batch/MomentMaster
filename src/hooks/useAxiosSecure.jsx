import axios from 'axios';
import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';



const axiosInstance = axios.create({
    baseURL: 'https://event-management-server-pied.vercel.app/'
    // baseURL: 'https://event-management-server-pied.vercel.app/'
})

const useAxiosSecure = () => {

    return axiosInstance
};

export default useAxiosSecure;