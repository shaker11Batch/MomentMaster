import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../pages/Home/Home";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import CreateEvents from "../pages/CreateEvents/CreateEvents";
import UpComingEvents from "../pages/UpComingEnvents/UpComingEvents";
import axios from "axios";
import UpcomingEventDetails from "../pages/UpComingEnvents/UpcomingEventDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayOut,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/createEvents',
                element: <CreateEvents />
            },
            {
                path: '/upComingEvents',
                loader: () => axios.get('http://localhost:3000/events'),
                element: <UpComingEvents />
            },
            {
                path: '/upComingEvents/:id',
                loader: ({ params }) => axios.get(`http://localhost:3000/upcomingEvent/${params.id}`),
                element: <UpcomingEventDetails />
            },
            {
                path: '/logIn',
                Component: Login
            },
            {
                path: '/signUp',
                Component: SignUp
            },

        ]
    }
])