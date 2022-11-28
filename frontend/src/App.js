import './App.css';
import React, {useEffect, useState} from 'react';
import ResponsiveAppBar from './components/header';
import BottomNavigation from '@mui/material/BottomNavigation';
import Body from './components/body';


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
    <div>
      <ResponsiveAppBar/>
      {/*(typeof backendData.test === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.test.map((tests,i) => (
          <p key={i}>{tests}</p>
        ))
        )*/}

      <BottomNavigation/>
      <Body />

    </div>
  )
}

export default App