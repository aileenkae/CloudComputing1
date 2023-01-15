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

// This site is to respond to a form
export function Response() {
    const {userData} = useContext(userContext);
    const navigate = useNavigate()
    const location = useLocation()

    // track of the questions and form details
    const [questions, setQuestions] = useState(location.state.questions)
    const [formTitle, setFormTitle] = useState(location.state.name);
    const [formDescription, setFormDescription] = useState(location.state.description)
    const [error, setError] = useState();

    // add new question
    const addQuestion = (type) => {
        setQuestions((prevState) => {
            return [
                ...prevState, {
                    _id: uuid(),
                    fieldType: type,
                    question: '',
                    answer_variants: []
                }
            ];
        });
    }

    //edit an existing question 
    const editQuestion = (editedQuestion) => {
        let index = questions.indexOf(
            questions.filter(q => q._id === editedQuestion._id)[0]
        )
        questions[index] = editedQuestion
    }

    // handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    // delete a question
    const deleteQuestion = (question) => {
        setQuestions(questions.filter((q) => q._id !== question._id))
    }

    return (
        <div className="flex flex-col items-center gap-5 justify-top">
            {/* error message*/}
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)}/>}
            {/* Form header with title and description */}
            <FormHeader
                titleValue={formTitle}
                descValue={formDescription}
                onTitleChange={(value) => setFormTitle(value)}
                onDescChange={(value) => setFormDescription(value)}/> 
                {/* render Qestion */}
                {questions.map((question) => (
                    <Question
                        key={question._id}
                        question={question}
                        onDelete={(q) => deleteQuestion(q)}
                        onChange={(q) => editQuestion(q)}/>
                ))
            }
            {/* add question button */}
            <AddQuestionButton onClick={addQuestion}/>
            {/* submit button */}
            <Button id="submit" aria-haspopup="true" method="POST" onClick={handleSubmit}>
                Speichern
            </Button>
        </div>
    );
}