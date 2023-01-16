import React from "react";
import LineStatistic from "./LineStatistic";
import RadioButtonStatistic from "./RadioButtonStatistic";

export default function StatisticItem({ question }) {
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