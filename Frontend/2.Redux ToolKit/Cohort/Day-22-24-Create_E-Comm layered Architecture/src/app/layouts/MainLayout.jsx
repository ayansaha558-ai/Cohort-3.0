import React from "react";
import { Outlet } from "react-router";
import NavBar from "../../shared/ui/components/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
