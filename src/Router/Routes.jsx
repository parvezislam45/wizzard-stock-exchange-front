import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Dashboard from "../Authentication/Dashboard";
import UserProfile from "../Authentication/UserProfile";
import Documentation from "../Pages/Home/Documentation";
import Payment from "../../Payment/Payment";
import Wallet from "../Wallet/Wallet";
import Customer from "../CustomerSuport/Customer";




 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children :[
        {
            path : '/',
            element : <Home/>
        },
        {
            path : 'login',
            element : <Login/>
        },
        {
            path : 'register',
            element : <Register/>
        },
        {
          path : 'dashboard',
          element : <Dashboard/>
      },
        {
          path : 'profile',
          element : <UserProfile/>
      },
      {
        path : 'documentation',
        element : <Documentation/>
      },
      {
        path : 'dashboard/payment',
        element : <Payment/>
      },
      {
        path : 'dashboard/wallet',
        element : <Wallet/>
      },
      {
        path : 'help-center',
        element :<Customer/>
      }
      ]
    },
  ]);