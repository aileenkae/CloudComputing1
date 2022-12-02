import './App.css';
import React, {useEffect, useState} from 'react';
import ResponsiveAppBar from './components/header';
import BottomNavigation from '@mui/material/BottomNavigation';
import Body from './components/body';
import Question from './components/question';


function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/123").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])


  return (

  )
}

export default App