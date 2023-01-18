import React, {useState, useContext, useEffect} from "react";

import axios from 'axios';
import {Button, CircularProgress} from "@mui/material";

import userContext from "../context/userContext";
import ErrorNotice from "../components/ErrorNotice";
import {useNavigate, useParams} from 'react-router-dom';
import {ResponseHeader} from "../components/ResponseHeader";
import ResponseItem from "../components/ResponseItem";

export function Response(props) {
    const {userData} = useContext(userContext);
    const navigate = useNavigate()
    const params = useParams()
    const [answers, setAnswers] = useState([]);
    const [form, setForm] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const getForm = async () => {
            const formResponse = await axios.get(
                'https://hdm-rest-api-yzluwpqwsa-ey.a.run.app/statistic/' + params.id,
                {
                    headers: {
                        "x-auth-token": userData.token
                    }
                }
            )

            setForm(formResponse.data)
        }

        getForm();
    }, [userData, params]);

    const addAnswer = (answer) => {
        setAnswers((prevState) => {
            if (prevState.filter(a => a.form_id === answer.form_id && a.question_id === answer.question_id).length > 0) {
                return prevState;
            }

            return [...prevState, answer];
        })
    }

    const editAnswer = (answer) => {
        let index = answers.indexOf(
            answers.filter(a => a.form_id === answer.form_id && a.question_id === answer.question_id)[0]
        )

        answers[index] = answer
        setAnswers(answers)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            axios.post('https://hdm-rest-api-yzluwpqwsa-ey.a.run.app/responses', answers, {
                headers: {
                    "x-auth-token": userData.token
                }
            }).then(response => {
                navigate('/')
            }).catch(err => {
                err.response.data.msg && setError(err.response.data.msg)
            })
        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
    };

    if (form) {
        return (
            <div className="px-12 w-full flex flex-col items-center gap-5 justify-top">
                {error && <ErrorNotice message={error} clearError={() => setError(undefined)}/>}
                <ResponseHeader title={form.name} description={form.description}/>
                {
                    form.questions.map((question) => (
                        <ResponseItem
                            key={question._id}
                            question={question}
                            onChange={(a) => editAnswer(a)}
                            addAnswer={(a) => addAnswer(a)}
                        />
                    ))
                }

                <Button id="submit" aria-haspopup="true" method="POST" onClick={handleSubmit}>
                    Speichern
                </Button>
            </div>
        );
    } else {
        return (
            <div className="flex items-center w-screen h-screen justify-center">
                <CircularProgress/>
            </div>
        )
    }
}