import './App.css';
import React from 'react';

import {Route, Routes, BrowserRouter} from 'react-router-dom';
import pages from './pages';
import layouts from './layouts';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<layouts.Default />}>
                    <Route index element={<pages.Home />}/>
                    <Route path="/login" element={<pages.Login/>}/>
                    <Route path="/form" element={<pages.Form/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App