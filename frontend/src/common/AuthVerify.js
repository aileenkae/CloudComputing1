import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import UserContext from "../context/userContext";
//AuthVerify is used to check if the user is logged in or not
const AuthVerify = (props) => {
    const [userData, setUserData] = useState({token: undefined, user: undefined});

    let location = useLocation();
    let navigate = useNavigate();
    //UseEffect is used to check if the user is logged in or not
    useEffect(() => {
        let token = localStorage.getItem("auth-token");
        //If the user is not logged in and the path is not login or register, redirect to login page
        if (!token && !['/login', '/register'].includes(location.pathname)) {
            localStorage.setItem("auth-token", "");
            token = "";
            navigate('/login')
        } else {
            axios //If the user is logged in, get the user data from the backend
                .get("https://hdm-rest-api-yzluwpqwsa-ey.a.run.app/me", {
                    headers: {
                        "x-auth-token": token
                    }
                })
                .then(response => {
                    setUserData({token, user: response.data});
                });
        }
    }, [location, navigate, props]);
    //Return the user data to the context
    return (
        <UserContext.Provider
            value={{
                userData,
                setUserData
            }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default AuthVerify;