import React from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import ProductDetail from "../pages/ProductDetail"
import ProtectedRoute from "./ProtectedRoute";
import PublicProtected from "./PublicProtected";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicProtected />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
    ],
  },
  {
    path: "main",
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "shop",
            element: <Shop />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path:"detail/:id",
            element:<ProductDetail/>
          },
          // {
          //   path:"cart",
          //   element:<Cart/>
          // }
        ],
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
