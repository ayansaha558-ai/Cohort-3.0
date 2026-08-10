import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice";
import PublicProtected from "./Protected/PublicProtected";
import MainProtected from "./Protected/MainProtected";
import CartPage from "../pages/CartPage";

const AppRoutes = () => {
  let dispatch = useDispatch();

  let hydrateUser = () => {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      toast.error("UnAuthorised User");
      return;
    }

    console.log("Hydration Processed");

    dispatch(addUser(loggedInUser));
  };

  useEffect(() => {
    hydrateUser();
  }, []);

  const router = createBrowserRouter([
    {
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
      element: <MainProtected />,
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
              element: <Shop/>,
            },
            {
              path: "about",
              element: <About />,
            },
            {
              path: "cart",
              element: <CartPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
