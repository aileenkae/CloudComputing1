import React from 'react';

// UnauthorisedLayout component provides a layout for pages that don't require user to be logged in
// It renders passed children within a container with a gray background

export default function UnauthorisedLayout(props) {
    return (
        <div className = "bg-gray-100 min-w-screen min-h-screen flex items-top justify-center py-8">
            <div className="container flex items-top justify-center">
                {props.children}
            </div>
        </div>
    );
};