import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import UserContext from "../context/userContext";

const AuthVerify = (props) => {
    const [userData, setUserData] = useState({token: undefined, user: undefined});

    let location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem("auth-token");

        if (!token && !['/login', '/register'].includes(location.pathname)) {
            localStorage.setItem("auth-token", "");
            token = "";
            navigate('/login')
        } else {
            axios
                .get("http://localhost:8000/me", {
                    headers: {
                        "x-auth-token": token
                    }
                })
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