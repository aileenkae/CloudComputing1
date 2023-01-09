import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import Header from "../components/Header";
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
export const Default = () => {
    const [userData, setUserData] = useState({token: undefined, user: undefined});
	const navigate = useNavigate();

    useEffect(() => {
        const checkLoggedIn = async () => {
            let token = localStorage.getItem("auth-token");
            
            if (token === null) {
                localStorage.setItem("auth-token", "");
                token = "";
            }
            
            const tokenResponse = await axios.post(
                'http://localhost:8000/tokenIsValid',
                null,
                {
                    headers: {
                        "x-auth-token": token
                    }
                }
            );

            if (tokenResponse.data) {
                axios.get("http://localhost:8000/me", {
                    headers: {
                        "x-auth-token": token
                    }
                }).then(response => {
                    setUserData({token, user: response.data});
                });
            } else {
				navigate('/login')
			}
        }

        checkLoggedIn();
    }, []);

	if(userData.user) {
		return (
			<> <Header /> <div
				className="bg-gray-100 min-w-screen min-h-screen flex items-top justify-center py-8">
				<div className="container flex items-top justify-center">
					<Outlet/>
				</div>
			</div>
		</>
		);
	} else {
		return(
			<div className="flex items-center w-screen h-screen justify-center">
				<CircularProgress />
			</div>
		)
	}
};