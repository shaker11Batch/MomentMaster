import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../pages/Home/Home";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";

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
                path: '/about',
                element: <p>this is the testing about page</p>
            },
            {
                path: '/logIn',
                Component: Login
            },
            {
                path: '/signUp',
                Component: SignUp
            }

        ]
    }
])