import React from "react";
import LineStatistic from "./LineStatistic";
import RadioButtonStatistic from "./RadioButtonStatistic";
// This component will be used to display the statistic depending on the question type (multiline, singleline, radiobutton) 
export default function StatisticItem({ question }) {
    // This switch statement will be used to display the statistic depending on the question type
    switch(question.fieldType) {
        case "radiobutton":
            return <RadioButtonStatistic question={question}/>
        case "singleline":
            return <LineStatistic question={question}/>
        case "multiline":
            return <LineStatistic question={question}/>
        default:
            return <h1>Type not found</h1>
    }
}