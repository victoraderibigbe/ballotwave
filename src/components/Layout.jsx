import React from "react";
import HomeHeader from "./HomeHeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <HomeHeader />
      <Outlet />
    </>
  );
};

export default Layout;
