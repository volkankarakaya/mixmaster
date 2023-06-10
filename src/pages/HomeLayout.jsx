import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomeLayout;
