import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import "../styles/layout.css";

const Layout = () => {
  return (
    <div className="bg-white">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
