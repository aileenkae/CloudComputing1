import './App.css';
import React, {useEffect, useState} from 'react';
import Question from './components/question';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {Home} from './components/Home_Site';
import {Login} from './components/login_site';


function App() {

 /* const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/123").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []) */


  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/form" element={<h1>Formular</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App