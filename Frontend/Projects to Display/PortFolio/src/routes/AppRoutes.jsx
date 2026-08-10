import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import About from "../components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;