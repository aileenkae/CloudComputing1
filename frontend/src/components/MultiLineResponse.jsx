import React, {useState} from "react";
import {TextField} from "@mui/material";
export default function SingleLineResponse(props) {
    const [answer, setAnswer] = useState(props.answer);

    const handleChage = (event) => {
        answer.answer = event.target.value

        setAnswer(
            {
                _id: answer._id,
                form_id: answer.form_id,
                question_id: answer.question_id,
                type: answer.type,
                answer: answer.answer,
                answer_id: null
            }
        )

        props.onChange(answer)
    }

    return (
        <div
            className="w-full bg-white border-t-8 border-indigo-700 rounded-xl min-h-content flex flex-col py-8 px-12">
            <h1 className="text-4xl font-bold mb-4">{props.question.question}</h1>
            <TextField
                minRows={2}
                multiline
                placeholder="Ihre antwort"
                value={answer.answer}
                onChange={handleChage}/>
        </div>
    );
}