import React, { useState } from "react";
import Button from "@mui/material/Button";

//This component is a functional component that renders a line question, which is a question that allows the user to type in a single line of text as an answer
export default function LineQuestion(props) {
    //useState hook is used to keep track of the current question state
    const [question, setQuestion] = useState(props.question);

    //This function updates the question state and calls the onChange prop with the updated question
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
        <div className="w-full bg-white border-t-8 border-indigo-700 rounded-xl flex flex-col">
            <div className="my-8 mx-12">
                <input
                    /*input field that is used to display and edit the question text */
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