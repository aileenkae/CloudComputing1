/* 
1. The component receives a props object which contains all the properties that are passed to the component
2. The handleAnswerChange function is executed when the input field value changes. It then passes the new value to the parent component
3. The component returns a div element with a text input field and a button. The button is used to delete the current question item */

import React from "react";
import Button from "@mui/material/Button";
import ClearIcon from '@mui/icons-material/Clear';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function RadioButtonQuestionItem(props) {

    const handleAnswerChange = (event) => {
        let answer = props.answer
        answer.answer = event.target.value
        props.onAnswerChange(answer)
    }

    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
                <RadioButtonUncheckedIcon className="text-gray-400 mr-2" />
                <input
                    value={props.answer.answer}
                    type="text"
                    className="question-field"
                    placeholder="Frage Beschreibung"
                    onChange={handleAnswerChange}></input>
            </div>

            <Button onClick={props.onDelete}>
                <ClearIcon/>
            </Button>
        </div>
    );
}
