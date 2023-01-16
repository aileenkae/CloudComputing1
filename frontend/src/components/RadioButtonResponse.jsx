import React, {useState} from "react";
import {FormControl, RadioGroup, FormControlLabel, Radio} from "@mui/material";

export default function SingleLineResponse(props) {
    const [answer, setAnswer] = useState(props.answer);

    const handleChage = (event) => {
        answer.answer_id = event.target.value
        
        setAnswer({
            _id: answer._id,
            form_id: answer.form_id,
            question_id: answer.question_id,
            answer_id: answer.answer_id,
            type: answer.type,
            answer: null
        })

        props.onChange(answer)
    }

    return (
        <div
            className="w-full bg-white border-t-8 border-indigo-700 rounded-xl min-h-content flex flex-col py-8 px-12">
            <h1 className="text-4xl font-bold mb-4">{props.question.question}</h1>

            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={answer.answer_id}
                    onChange={handleChage}
                >
                    {
                        props.question.answer_variants.map(av => {
                            return(
                                <FormControlLabel key={av._id} value={av._id} control={<Radio />} label={av.answer + av._id} />
                            )
                        })
                    }
                </RadioGroup>
            </FormControl>
        </div>
    );
}