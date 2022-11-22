import './App.css';
import React, {useEffect, useState} from 'react';
import Footer from './components/footer';


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

      {(typeof backendData.test === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.test.map((tests,i) => (
          <p key={i}>{tests}</p>
        ))
      )}

      <Footer/>

    </div>
  )
}

export default App