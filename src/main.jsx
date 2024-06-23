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
import AuthProvider from './AuthProvider/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PrivetRouter from './PrivetRouter/PrivetRouter';

const queryClient = new QueryClient()

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
        element: <PrivetRouter><Payment></Payment></PrivetRouter>
      },
      {
        path: '/employee-list',
        element: <PrivetRouter><Employee></Employee></PrivetRouter>,
        loader: () => fetch('https://em-espial-server.vercel.app/register')
      },
      {
        path: '/all-employee-list',
        element: <PrivetRouter><AllEmployee></AllEmployee></PrivetRouter>,
        loader: () => fetch('https://em-espial-server.vercel.app/register')
      },
      {
        path: '/progress',
        element: <Progress></Progress>
      },
      {
        path: '/details/:id',
        element: <EmployeeDetails></EmployeeDetails>,
        loader: ({ params }) => fetch(`https://em-espial-server.vercel.app/register/${params.id}`)
      },
      {
        path: '/work-sheet',
        element: <PrivetRouter><Dashboard></Dashboard></PrivetRouter>,
        loader: () => fetch('https://em-espial-server.vercel.app/work-sheet')
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
