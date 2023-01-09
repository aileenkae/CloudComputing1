import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import UserContext from './context/userContext';
import pages from './pages';
import layouts from './layouts';

function App() {
    const [userData, setUserData] = useState({token: undefined, user: undefined});

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
            }
        }

        checkLoggedIn();
    }, []);

    return (
        <BrowserRouter>
            <UserContext.Provider
                value={{
                    userData,
                    setUserData
                }}>
                <Routes>
                    <Route path="/" element={<layouts.Default />}>
                        <Route index element={<pages.Home />}/>
                        <Route path="/form/new" element={<pages.Form />}/>
                        <Route path="/form/:id" element={<pages.FormEdit />}/>
                    </Route>
                    <Route path="/" element={<layouts.Unauthorised />}>
                        <Route path="/login" element={<pages.Login />}/>
                    </Route>
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App