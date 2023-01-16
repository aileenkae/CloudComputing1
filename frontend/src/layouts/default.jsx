import React, {useContext} from 'react';
import Header from "../components/Header";
import CircularProgress from '@mui/material/CircularProgress';
import userContext from '../context/userContext';
import { useLocation } from 'react-router-dom';

export default function DefaultLayout(props) {
    const location = useLocation();
    const {userData} = useContext(userContext);

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