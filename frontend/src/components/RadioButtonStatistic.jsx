import React from "react";
import PieChart from './PieChart'

export default function RadioButtonStatistic({question}) {
    return (
        <div className="scaffold" style={{borderColor: '#00cc6d'}}>
            <div className="flex flex-col">
                <h3 className="text-xl font-medium">{question.question}</h3>
                <span className="font-thin text-sm">{question.responses.length + " Answers"}</span>
            </div>
            <span className="w-full p-0.5 bg-gray-200 lg:w-1/3 mb-4"></span>
            <div className="w-72 mt-6">
                <PieChart question={question}/>
            </div>
        </div>
    );
}