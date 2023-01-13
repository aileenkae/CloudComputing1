import React from "react";

export function FormHeader(props) {
    return (
        <div className="w-full bg-white border-t-8 px-12 py-8 border-indigo-700 rounded-xl">
            <input
                type="text"
                className="question-field text-3xl"
                value={props.titleValue}
                onChange={(e) => props.onTitleChange(e.target.value)}
                placeholder="Formular Name"></input>
            <input
                type="text"
                className="question-field mt-4"
                value={props.descValue}
                onChange={(e) => props.onDescChange(e.target.value)}
                placeholder="Beschreibung"></input>
        </div>
    );
}