import React from 'react';
import {Outlet} from "react-router-dom";

export const Unauthorised = () => {
    return (
        <div className = "bg-gray-100 min-w-screen min-h-screen flex items-top justify-center py-8">
            <div className="container flex items-top justify-center">
                <Outlet/>
            </div>
        </div>
    );
};