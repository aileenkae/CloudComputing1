import React, {useState, useContext, useEffect} from "react";

import axios from 'axios';
import {CircularProgress} from "@mui/material";

import userContext from "../context/userContext";
import ErrorNotice from "../components/ErrorNotice";
import {useParams} from 'react-router-dom';

import uuid from "react-uuid";
import StatisticItem from "../components/StatisticItem";
// This component will be used to display the statistic page in the frontend application
export function Statistic(props) {
    const {userData} = useContext(userContext);
    const params = useParams()
    const [form, setForm] = useState();
    const [error, setError] = useState();
    // This useEffect hook will be used to get the form from the backend
    useEffect(() => {
        const getForm = async () => {
            const formResponse = await axios.get(
                'https://hdm-rest-api-yzluwpqwsa-ey.a.run.app/forms/' + params.id,
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
    // IF the form is loaded, the statistic page will be displayed
    if (form) {
        return (
            <div className="px-12 w-full flex flex-col items-center gap-5 justify-top">
                {error && <ErrorNotice message={error} clearError={() => setError(undefined)}/>}

                {
                    form
                        .questions
                        .map(question => {
                            return (
                                <StatisticItem key={uuid()} question={question} />
                            )
                        })
                }
            </div>
        );
    } else { // If the form is not loaded, a loading indicator will be displayed
        return (
            <div className="flex items-center w-screen h-screen justify-center">
                <CircularProgress/>
            </div>
        )
    }
}