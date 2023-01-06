import React from "react";
import {Outlet} from "react-router-dom";
import ResponsiveAppBar from '../components/header';

export const Default = () => {
  return (
    <>
        <ResponsiveAppBar/>
        <div className="container bg-gray-100 w-screen h-screen">
          <Outlet />
        </div>
    </>
  );
};