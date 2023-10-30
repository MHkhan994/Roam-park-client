import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Homepage/Home";
import Shop from "../Pages/Shop/Shop";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            }
        ]
    }
])