import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { Auth } from "../context/AuthContext";

const PublicProtected = () => {
  const { loggedIn } = useContext(Auth);

  if (loggedIn) {
    return <Navigate to="/main" replace />;
  }

  return <Outlet />;
};

export default PublicProtected;