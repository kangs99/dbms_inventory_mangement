import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContext } from "./context/authContext";
import { useContext } from "react";
import Login from './login/Login';
import Register from './register/Register';
import Brands from './Brands';
import Data from './Data';
import Add from './Add';
import Update from './Update';



const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <div>
      {/* <Navbar />  */}
     <Brands />
    </div>,
  },
  {
    path: "/data/:brand",
    element: <div>
      {/* <Navbar /> */}
      <Data />
      </div>,
  },
  {
    path: "/add/:brand",
    element:<div> 
    {/* <Navbar /> */}
    <Add />
    </div>,
  },
  {
    path: "/update/:brand/:id",
    element: <div>
    {/* <Navbar /> */}
    <Update />
    </div>,
  },
  
 
]);



function App() {
  

  

  return (
    <div className='app'>
      <div className='container'>
      <RouterProvider router={router} />
      </div>
    </div>
  );
}


export default App;
