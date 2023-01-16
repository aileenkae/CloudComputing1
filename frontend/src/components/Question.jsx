import React from "react";
import LineQuestion from "./LineQuestion";
import RadioButtonQuestion from "./RadioButtonQuestion";

export default function Question(props) {
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