import React from "react";
import Button from "@mui/material/Button";

export default function SingleLineQuestion(props) {
    const handleChage = (event) => {
        let question = props.question
        question.question = event.target.value
        props.onChange(question)
    }

    return (
        <div className="bg-white border-t-8 border-indigo-700 rounded-xl flex flex-col">
            <div className="my-8 mx-12">
                <input
                    onChange={handleChage}
                    type="text"
                    className="question-field border-b-2 border-gray-200"
                    placeholder="Frage"></input>
            </div>

            <div className="flex items-center justify-end">
                <Button onClick={() => props.onDelete(props.question)} className="text-red-700 m-2">
                    Löschen
                </Button>
            </div>
        </div>
    );
}