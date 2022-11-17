import { createBrowserRouter } from "react-router-dom"
import Main from "../../layout/Main"
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import Home from "../../pages/Home/Home/Home"
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";

const router = createBrowserRouter([
{
    path: '/', 
    element: <Main></Main>,
    children: [
        {
            path: '/', 
            element: <Home></Home>
        }, 
        {
            path: '/login', 
            element: <Login></Login>
        }, 
        {
            path:'/appointment',
            element: <Appointment></Appointment>

        },
        {
            path: '/signup',
            element: <Signup></Signup>

        }
    ],
    
},
{
    path:'/dashboard',
    element: <Dashboard></Dashboard>
}
])

export default router; 