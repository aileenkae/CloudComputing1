import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import UserContext from "../context/userContext";

// This function wraps the main app and verifies the user's authentication status
const AuthVerify = (props) => {
    // State to keep track of the user's token and data
    const [userData, setUserData] = useState({token: undefined, user: undefined});

    // Get the current location of the app
    let location = useLocation();
    let navigate = useNavigate();
    // check the user's auth status
    useEffect(() => {
        let token = localStorage.getItem("auth-token");

        if (!token && !['/login', '/register'].includes(location.pathname)) {
            // if the token is not present in local storage and the user is not on the login or register page
            localStorage.setItem("auth-token", "");
            token = "";
            navigate('/login')
        } else {
            // if the token is present in local storage
            axios
                .get("http://localhost:8000/me", {
                    headers: {
                        "x-auth-token": token
                    }
                })
                // then set the user data in state
                .then(response => {
                    setUserData({token, user: response.data});
                });
        }
    }, [location, navigate, props]);

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