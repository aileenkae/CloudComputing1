import React, {useState, useContext} from "react";
import Question from "../components/Question";

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import axios from 'axios';
import {Button} from "@mui/material";
import Tabs from '@mui/material/Tabs';

import {FormHeader} from "../components/FormHeader";
import {AddQuestionButton} from "../components/AddQuestionButton";
import userContext from "../context/userContext";

export function Form() {
    const {userData} = useContext(userContext);

    const [tabValue, setTabValue] = useState('questions');
    const [questions, setQuestions] = useState([])
    const [formTitle, setFormTitle] = useState('');
    const [formDescription, setFormDescription] = useState('')

    const addQuestion = (type) => {
        setQuestions((prevState) => {
            return [
                ...prevState, {
                    id: prevState.length + 1,
                    type: type,
                    question: '',
                    answers: []
                }
            ];
        });
    }

    const editQuestion = (editedQuestion) => {
        let index = questions.indexOf(
            questions.filter(q => q.id === editedQuestion.id)[0]
        )
        questions[index] = editedQuestion
        console.log(questions)
    }

    const chooseTab = (event, tab) => {
        setTabValue(tab);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = {
            name: formTitle,
            description: formDescription,
            questions: questions
        };

        axios.post('http://localhost:8000/forms', form, {
            headers: {
                "x-auth-token": userData.token
            }
        })
    };

    const deleteQuestion = (question) => {
        setQuestions(questions.filter((q) => q.id !== question.id))
    }

    return (
        <TabContext value={tabValue}>
            <div className="flex flex-col">
                <div className="bg-white rounded-xl">
                    <Tabs onChange={chooseTab} centered="centered">
                        <Tab label="Fragen" value="questions" centered="centered"/>
                        <Tab label="Antworten" value="answers" centered="centered"/>
                    </Tabs>
                </div>

                <div>
                    <TabPanel className="flex flex-col gap-8" value="questions">
                        <FormHeader
                            titleValue={formTitle}
                            descValue={formDescription}
                            onTitleChange={(value) => setFormTitle(value)}
                            onDescChange={(value) => setFormDescription(value)}/>

                        {
                            questions.map((question) => (
                                <Question
                                    question={question}
                                    onDelete={(q) => deleteQuestion(q)}
                                    onChange={(q) => editQuestion(q)}/>
                            ))
                        }

                        <AddQuestionButton onClick={addQuestion}/>

                        <Button id="submit" aria-haspopup="true" method="POST" onClick={handleSubmit}>
                            Speichern
                        </Button>
                    </TabPanel>
                    <TabPanel value="2" centered="centered"></TabPanel>
                </div>
            </div>
        </TabContext>
    );
}