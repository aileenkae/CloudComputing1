import React from 'react';
import ResponsiveAppBar from './header';
import BottomNavigation from '@mui/material/BottomNavigation';
import Body from './body';


export function Home() {
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

export default Home