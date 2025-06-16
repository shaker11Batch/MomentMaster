import axios from "axios";
import { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const axiosInstance = axios.create({
    base: 'http://localhost:3000',
    withCredentials: true
})




const useAxios = () => {
const {user} = use(AuthContext)
    // const token  =localStorage.getItem("token")
    const token = user?.accessToken
    axiosInstance.interceptors.request.use(config =>{
        config.headers.Authorization =`Bearer ${token}`

        return config
    })

    return axiosInstance
     
}

export default useAxios;