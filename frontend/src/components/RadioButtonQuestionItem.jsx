import React from "react";
import Button from "@mui/material/Button";
import ClearIcon from '@mui/icons-material/Clear';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
// This is the component that will be used to display the radio button question item (single answer) 
export default function RadioButtonQuestionItem(props) {
    // This function will be used to handle the change of the answer
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
                <ClearIcon style={{color: '#00a357'}}/>
            </Button>
        </div>
    );
}
