import React, { useState } from "react";
import Button from "@mui/material/Button";
// This component will be used to display a single line question (text input) 
export default function LineQuestion(props) {
    // This is the question object that will be used to store the question data
    const [question, setQuestion] = useState(props.question);
    // This function will be used to handle the change of the question text
    const handleChage = (event) => {
        setQuestion({
            _id: question._id,
            fieldType: question.fieldType,
            question: event.target.value,
            answer_variants: question.answer_variants
        })

        props.onChange(question)
    }

    return (
        <div className="w-full bg-white border-t-8 rounded-xl flex flex-col" style={{borderColor: '#00cc6d'}}>
            <div className="my-8 mx-12">
                <input
                    value={question.question}
                    onChange={handleChage}
                    type="text"
                    className="question-field border-b-2 border-gray-200"
                    placeholder="Frage"></input>
            </div>

            <div className="flex items-center justify-end">
                <Button onClick={() => props.onDelete(question)} className="text-red-700 m-2">
                    Löschen
                </Button>
            </div>
        </div>
    );
}