import React, {useState, useContext, useEffect} from "react";

import axios from 'axios';
import {CircularProgress} from "@mui/material";

import userContext from "../context/userContext";
import ErrorNotice from "../components/ErrorNotice";
import {useParams} from 'react-router-dom';
import PieChart from "../components/ChartExample";

import uuid from "react-uuid";
import StatisticItem from "../components/StatisticItem";
export function Statistic(props) {
    const {userData} = useContext(userContext);
    const params = useParams()
    const [form, setForm] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const getForm = async () => {
            const formResponse = await axios.get(
                'http://localhost:8000/forms/' + params.id,
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
    } else {
        return (
            <div className="flex items-center w-screen h-screen justify-center">
                <CircularProgress/>
            </div>
        )
    }
}