import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto bg-gray-800'>
    <ToastContainer/>
    <RouterProvider router={router} />
    </div>
  
  </React.StrictMode>,
)
