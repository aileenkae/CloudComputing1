import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import pages from './pages';
import AuthVerify from './common/AuthVerify';
import DefaultLayout from './layouts/default';

function App() {
    return (
        // BrowserRouter is a wrapper for the entire app that allows us to use the <Route> component to render different components based on the URL
        <BrowserRouter>
            <AuthVerify>
                <DefaultLayout>
                    <Routes>
                        <Route index="index" element={<pages.Home />}/>
                        <Route path="/form" element={<pages.Form />}/>
                        <Route path="/response/:id" element={<pages.Response />}/>
                        <Route path="/statistic/:id" element={<pages.Statistic />}/>
                        <Route path="/login" element={<pages.Login />}/>
                        <Route path="/register" element={<pages.Register />}/>
                    </Routes>
                </DefaultLayout>
            </AuthVerify>
        </BrowserRouter>
    );
}

export default App