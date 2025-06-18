import axios from 'axios';
import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';



const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/'
})

const useAxiosSecure = () => {

    return axiosInstance
};

export default useAxiosSecure;