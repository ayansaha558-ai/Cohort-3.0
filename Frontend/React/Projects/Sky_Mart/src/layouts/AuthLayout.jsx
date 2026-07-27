import React from "react";
import { Outlet } from "react-router";
import { AuthProvider } from "../context/AuthContext";
import { ToastContainer } from "react-toastify";

const AuthLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
