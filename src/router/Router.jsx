import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../pages/Home/Home";

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

        ]
    }
])