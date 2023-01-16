import React from "react";
import LineQuestion from "./LineQuestion";
import RadioButtonQuestion from "./RadioButtonQuestion";

//This component is a higher order component that receives a question object and based on the fieldType property of the question, it will render the appropriate component
export default function Question(props) {
    //The switch statement checks the fieldType property of the question object and renders the appropriate component.
    switch(props.question.fieldType) {
        //If the fieldType is "multiline" or "singleline", it will render a LineQuestion component
        case "multiline":
            return <LineQuestion
                question={props.question}
                onDelete={() => props.onDelete(props.question)}
                onChange={props.onChange}/>
        //If the fieldType is "radiobutton" it will render a RadioButtonQuestion component
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
        //If the fieldType is not one of the above, it will not render anything.
    }
}