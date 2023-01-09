import React from "react";
import SingleLineQuestion from "./SingleLineQuestion";
import MultiLineQuestion from "./MultiLineQuestion";
import RadioButtonQuestion from "./RadioButtonQuestion";

export default function Question(props) {
    if (props.question.type === "multiline") {
        return <MultiLineQuestion
            question={props.question}
            onDelete={() => props.onDelete(props.question)}
            onChange={props.onChange}/>
    } else if (props.question.type === "singleline") {
        return <SingleLineQuestion
            question={props.question}
            onDelete={() => props.onDelete(props.question)}
            onChange={props.onChange}/>
    } else if (props.question.type === 'radiobutton') {
        return <RadioButtonQuestion
            question={props.question}
            onDelete={() => props.onDelete(props.question)}
            onChange={props.onChange}/>
    }
}