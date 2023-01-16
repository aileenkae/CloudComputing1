import React from "react";

export function ResponseHeader(props) {
    return (
        <div className="w-full bg-white border-t-8 px-12 py-8 border-indigo-700 rounded-xl">
            <h3 className="text-3xl font-bold">{props.title}</h3>
            <p className="mt-2">{props.description}</p>
        </div>
    );
}