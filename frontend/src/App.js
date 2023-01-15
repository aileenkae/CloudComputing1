import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import pages from './pages';
import AuthVerify from './common/AuthVerify';
import DefaultLayout from './layouts/default';

// set routes for different pages
function App() {
    return (
        <BrowserRouter>
            <AuthVerify>
                <DefaultLayout>
                    <Routes>
                        <Route index="index" element={<pages.Home />}/>
                        <Route path="/form" element={<pages.Form />}/>
                        <Route path="/response/:id" element={<pages.Response />}/>
                        <Route path="/login" element={<pages.Login />}/>
                        <Route path="/register" element={<pages.Register />}/>
                    </Routes>
                </DefaultLayout>
            </AuthVerify>
        </BrowserRouter>
    );
}

export default App