import React from 'react';

export default function UnauthorisedLayout(props) {
    return (
        <div className = "bg-gray-100 min-w-screen min-h-screen flex items-top justify-center py-8">
            <div className="container flex items-top justify-center">
                {props.children}
            </div>
        </div>
    );
};