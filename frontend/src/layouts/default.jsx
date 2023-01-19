import React, {useContext} from 'react';
import Header from "../components/Header";
import CircularProgress from '@mui/material/CircularProgress';
import userContext from '../context/userContext';
import { useLocation } from 'react-router-dom';

// This component will be used to display the default layout in the frontend application
export default function DefaultLayout(props) {
    // This hook will be used to get the location of the current page
    const location = useLocation();
    const {userData} = useContext(userContext);
    // This if statement will be used to check if the user is logged in or not
    if (userData.user || ['/login', '/register'].includes(location.pathname)) {
        return (
            <> < Header /> <div
                className="bg-gray-100 min-w-screen min-h-screen flex items-top justify-center py-8">
                <div className="container flex items-top justify-center">
                    {props.children}
                </div>
            </div>
        </>
        );
    } else {
        return (
            <div className="flex items-center w-screen h-screen justify-center">
                <CircularProgress/>
            </div>
        )
    }
};