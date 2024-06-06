import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Layout/Home/Home';
import Dashboard from './Layout/Dashboard/Dashboard';
import Contact from './Layout/Contact/Contact';
import Login from './Layout/Login/Login';
import Register from './Layout/Register/Register';
import Payment from './Layout/Payment/Payment';
import Employee from './Layout/Employee/Employee';
import AllEmployee from './Layout/Employee/AllEmployee';
import Progress from './Layout/Progress/Progress';
import EmployeeDetails from './Layout/Employee/EmployeeDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/work-sheet',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/contactUs',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/payment-history',
        element: <Payment></Payment>
      },
      {
        path: '/employee-list',
        element: <Employee></Employee>
      },
      {
        path: '/all-employee-list',
        element: <AllEmployee></AllEmployee>
      },
      {
        path: '/progress',
        element: <Progress></Progress>
      },
      {
        path: '/details',
        element: <EmployeeDetails></EmployeeDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
