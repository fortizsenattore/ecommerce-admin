import React from "react";
import NavbarTop from "./NavbarTop";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <NavbarTop />
      <Outlet />
    </>
  );
}

export default Home;
