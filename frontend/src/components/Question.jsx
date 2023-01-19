import React from "react";
import LineQuestion from "./LineQuestion"; // This is the single line question component (text input) that will be used to display the question
import RadioButtonQuestion from "./RadioButtonQuestion";
// This component will be used to display the question depending on the question type (multiline, singleline, radiobutton)
export default function Question(props) {
    // This switch statement will be used to display the question depending on the question type
    switch(props.question.fieldType) {
        case "multiline":
            return <LineQuestion
                question={props.question}
                onDelete={() => props.onDelete(props.question)}
                onChange={props.onChange}/>
        case "singleline":
            return <LineQuestion
                question={props.question}
                onDelete={() => props.onDelete(props.question)}
                onChange={props.onChange}/>
        case "radiobutton":
            return <RadioButtonQuestion
                question={props.question}
                onDelete={() => props.onDelete(props.question)}
                onChange={props.onChange}/>
        default:
            return <h1>Type not found</h1>
    }
}