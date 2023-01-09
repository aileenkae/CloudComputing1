import React from "react";
import Button from "@mui/material/Button";

export default function MultiLineQuestion(props) {
    const handleChage = (event) => {
        let question = props.question
        question.question = event.target.value
        props.onChange(question)
    }

    return (
        <div className="bg-white border-t-8 border-indigo-700 rounded-xl flex flex-col">
            <div className="my-8 mx-12">
                <textarea
                    onChange={handleChage}
                    type="text"
                    className="question-field w-full border-b-2 border-gray-200"
                    placeholder="Frage"></textarea>
            </div>

            <div className="flex items-center justify-end">
                <Button onClick={() => props.onDelete(props.question)} className="text-red-700 m-2">
                    Löschen
                </Button>
            </div>
        </div>
    );
}