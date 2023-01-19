import React from 'react';
// This component will be used to display the unauthorised layout 
export default function UnauthorisedLayout(props) {
    return (
        <div className = "bg-gray-100 min-w-screen min-h-screen flex items-top justify-center py-8">
            <div className="container flex items-top justify-center">
                {props.children}
            </div>
        </div>
    );
};