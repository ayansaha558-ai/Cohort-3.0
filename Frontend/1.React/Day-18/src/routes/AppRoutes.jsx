import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Router } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import { getProduct } from "../apis/UserApi";


let About = lazy(() => import("../pages/About"));

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          loader:getProduct,
          hydrateFallbackElement: <h1>Loading User Data</h1>,
          element: (
            <Suspense fallback={<h1>Hoche load dara</h1>}>
              <About />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
