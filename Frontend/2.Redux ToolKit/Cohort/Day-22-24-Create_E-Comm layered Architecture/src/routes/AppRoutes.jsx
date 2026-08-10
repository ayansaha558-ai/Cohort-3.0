import { createBrowserRouter, RouterProvider, Routes } from "react-router";
import PublicProtected from "./protected/PublicProtected";
import MainProtected from "./protected/MainProtected";
import AuthLayout from "../app/layouts/AuthLayout";
import MainLayout from "../app/layouts/MainLayout";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import HomePage from "../shared/ui/pages/HomePage";
import ProductsPage from "../features/products/ui/pages/ProductsPage";
import CartPage from "../features/cart/ui/pages/CartPage";
import OrderPage from "../features/orders/ui/pages/OrderPage";
import { useEffect } from "react";
import { hydrateUser } from "../features/auth/api/authApi";
import { useDispatch } from "react-redux";
// import { addUser, removeUser } from "../features/auth/state/authSlice";
import { hydrateUserAction } from "../features/auth/hooks/useAuthAction";
import About from "../shared/ui/pages/About"

const AppRoutes = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {

        dispatch(hydrateUserAction());
      } catch (error) {
        console.log("error from hydrateUser", error);
      }
    })();
  }, []);

  let router = createBrowserRouter([
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
              path: "registerPage",
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
              element: <HomePage />,
            },
            {
              path: "productsPage",
              element: <ProductsPage />,
            },
            {
              path: "orderPage",
              element: <OrderPage />,
            },
            {
              path: "cartPage",
              element: <CartPage />,
            },
            {
              path:"aboutPage",
              element:<About/>
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
