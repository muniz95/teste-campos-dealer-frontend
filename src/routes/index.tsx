import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '../App.scss';
import Home from "../views/Home";
import Customers from "../views/customers";
import NewCustomer from "../views/customers/new";
import EditCustomer from "../views/customers/edit";

const Routes = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home />},
    { path: "/clientes", element: <Customers />},
    { path: "/clientes/novo", element: <NewCustomer />},
    { path: "/clientes/:id", element: <EditCustomer />},
  ]);
  return (
    <div className="app">
      <div className="app-header">Campos Dealer</div>
      <div className="steps-container">
        <RouterProvider router={router} />
      </div>
      <nav>
        <ul>
          <li>
            <a href={`/clientes`}>Clientes</a>
          </li>
          <li>
            <a href={`/produtos`}>Produtos</a>
          </li>
          <li>
            <a href={`/vendas`}>Vendas</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Routes