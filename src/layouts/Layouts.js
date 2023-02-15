import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layouts() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layouts;
