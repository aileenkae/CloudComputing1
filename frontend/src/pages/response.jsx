import React, {useState, useContext} from "react";
import Question from "../components/Question";

import axios from 'axios';
import {Button} from "@mui/material";

import {FormHeader} from "../components/FormHeader";
import {AddQuestionButton} from "../components/AddQuestionButton";
import userContext from "../context/userContext";
import uuid from "react-uuid";
import ErrorNotice from "../components/ErrorNotice";
import {useNavigate, useLocation} from 'react-router-dom';

export function Form() {
    const {userData} = useContext(userContext);
    const navigate = useNavigate()
    const location = useLocation()

    const [questions, setQuestions] = useState(location.state.questions)
    const [formTitle, setFormTitle] = useState(location.state.name);
    const [formDescription, setFormDescription] = useState(location.state.description)
    const [error, setError] = useState();



    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="flex flex-col items-center gap-5 justify-top">
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)}/>}

            <FormHeader
                titleValue={formTitle}
                descValue={formDescription}
                onTitleChange={(value) => setFormTitle(value)}
                onDescChange={(value) => setFormDescription(value)}/> {
                questions.map((question) => (
                    <Question
                        key={question._id}
                        question={question}
                        onDelete={(q) => deleteQuestion(q)}
                        onChange={(q) => editQuestion(q)}/>
                ))
            }

            <AddQuestionButton onClick={addQuestion}/>

            <Button id="submit" aria-haspopup="true" method="POST" onClick={handleSubmit}>
                Speichern
            </Button>
        </div>
    );
}