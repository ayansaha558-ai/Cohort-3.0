import React from "react";
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const PublicProtected = () => {
  const { isAuthenticated } = useSelector((store) => store.auth);

  if (isAuthenticated) {
    return <Navigate to="/main" />;
  }

  return <Outlet />;
};

export default PublicProtected;