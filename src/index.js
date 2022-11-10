import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'antd/dist/antd.min.css';
import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./pages/List";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/",
    element: <List></List>,
  },
  {
    path: "create",
    element: <Create></Create>,
  },
  {
    path: "update",
    element: <Update></Update>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
