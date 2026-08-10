import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import CollectionPage from "../pages/CollectionPage";
import EditForm from "../components/EditForm";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "collection",
          element: <CollectionPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
