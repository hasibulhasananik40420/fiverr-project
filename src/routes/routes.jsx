import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Singup from "../pages/Singup/Singup";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            }, 
            
            {
                path: "/login",
                element: <Login />
            }, {
                path: "/sing-up",
                element: <Singup />
            },
            


        ]

    }
])

export default routes