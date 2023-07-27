import React from "react";
import "./TodoLayout.css";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ul className="sideBar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/error">Error</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Layout;
