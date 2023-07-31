import React from "react";
import "./TodoLayout.css";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
