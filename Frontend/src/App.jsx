import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

import AddSupplier from "./SupplierComponent/AddSupplier";
import AllSupplier from "./SupplierComponent/AllSuppliers";
import SupplierHistory from "./SupplierComponent/SupplierHistory";
import AddCustomer from "./CustomerComponent/AddCustomer";
import AllCustomer from "./CustomerComponent/AllCustomers";
import CustomerDetails from "./CustomerComponent/CustomerDetails";
import First from "./First";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <First />,

    children: [
      {
        index: true,
        element: <AllSupplier />,
      },
      {
        path: "/AllSupplier",
        element: <AllSupplier />
      },
      {
        path: "/AddSupplier",
        element:<AddSupplier />,
      },
      {
        path: "/SupplierHistory",
        element:<SupplierHistory />,
      },
      {
        path: "/AllCustomer",
        element: <AllCustomer />,
      },
      {
        path: "/AddCustomer",
        element: <AddCustomer />,
      },
      {
        path: "/CustomerDetails",
        element: <CustomerDetails />
      }
    ]
  }
])



function App() {

  return <RouterProvider router={router} />

}

export default App
