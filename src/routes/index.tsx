import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '../App.scss';
import Home from "../views/Home";
import Customers from "../views/customers";
import NewCustomer from "../views/customers/new";
import EditCustomer from "../views/customers/edit";
import Products from "../views/products";
import NewProduct from "../views/products/new";
import EditProduct from "../views/products/edit";
import Navbar from "../components/Navbar";

const Routes = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home />},
    { path: "/clientes", element: <Customers />},
    { path: "/clientes/novo", element: <NewCustomer />},
    { path: "/clientes/:id", element: <EditCustomer />},
    { path: "/produtos", element: <Products />},
    { path: "/produtos/novo", element: <NewProduct />},
    { path: "/produtos/:id", element: <EditProduct />},
  ]);
  return (
    <div className="app">
      <div className="app-header">Campos Dealer</div>
      <div className="steps-container">
        <RouterProvider router={router} />
      </div>
      <Navbar />
    </div>
  );
}

export default Routes