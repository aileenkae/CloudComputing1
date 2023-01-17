import React from "react";
import uuid from "react-uuid";
export default function LineStatistic({question}) {
    return (
        <div className="scaffold" style={{borderColor: '#00cc6d'}}>
            <div className="flex flex-col">
                <h3 className="text-xl font-medium">{question.question}</h3>
                <span className="font-thin text-sm">
                    {question.responses.length + " Answers"} 
                </span>
            </div>
            <span className="w-full p-0.5 bg-gray-200 lg:w-1/3 mb-4"></span>

            <div className="flex flex-col gap-2">
                {
                    question
                        .responses
                        .map(response => {
                            return (
                                <div
                                    key={uuid()}
                                    className="bg-gray-200 hover:bg-gray-300 transition rounded p-2 cursor-pointer">
                                    {response.answer}
                                </div>
                            )
                        })
                }
            </div>
        </div>
    );
}