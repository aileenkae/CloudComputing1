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

    const editQuestion = (editedQuestion) => {
        let index = questions.indexOf(
            questions.filter(q => q._id === editedQuestion._id)[0]
        )
        questions[index] = editedQuestion
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            const form = {
                name: formTitle,
                description: formDescription,
                questions: questions
            };
    
            if (location.state.isEditing) {
                axios.put('https://hdm-rest-api-yzluwpqwsa-ey.a.run.app/forms/' + location.state._id, form, {
                    headers: {
                        "x-auth-token": userData.token
                    }
                }).then(response => {
                    navigate('/')
                }).catch(err => {
                    err.response.data.msg && setError(err.response.data.msg)
                })
            } else {
                axios.post('https://hdm-rest-api-yzluwpqwsa-ey.a.run.app/forms', form, {
                    headers: {
                        "x-auth-token": userData.token
                    }
                }).then(response => {
                    navigate('/')
                }).catch(err => {
                    err.response.data.msg && setError(err.response.data.msg)
                })
            }

        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
    };

    const deleteQuestion = (question) => {
        setQuestions(questions.filter((q) => q._id !== question._id))
    }

    return (
        <div className="w-full flex flex-col items-center gap-5 justify-top">
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

            <Button id="submit" aria-haspopup="true" method="POST" onClick={handleSubmit} style={{color: '#00a357'}}>
                Speichern
            </Button>
        </div>
    );
}