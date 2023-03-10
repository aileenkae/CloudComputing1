import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {Pie} from "react-chartjs-2";
import autocolors from 'chartjs-plugin-autocolors';
// This component will be used to display the pie chart
ChartJS.register(ArcElement, Tooltip, Legend, autocolors);
// This component will be used to display the pie chart for the question type "multiple choice"
function PieChart({question}) {
    return (
            <Pie
                className="w-full h-auto"
                data={{
                    labels: question.answer_variants.map(av => av.answer),
                    datasets: [
                        {
                            data: question.answer_variants.map(av => av.responses.length)
                        },
                    ]
                }}
                options={{
                    plugins: {
                        autocolors: {
                            mode: 'data'
                        }
                    }
                }}
            />
    );
}

export default PieChart;