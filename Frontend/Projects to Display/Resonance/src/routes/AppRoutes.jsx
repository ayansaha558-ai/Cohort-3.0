import { createBrowserRouter, RouterProvider } from "react-router";
import PublicProtected from "./protected/PublicProtected";
import MainProtected from "./protected/MainProtected";
import AuthLayout from "../app/layouts/AuthLayout";
import MainLayout from "../app/layouts/MainLayout";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import Home from "../shared/ui/pages/Home";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            {
              index: true,
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
