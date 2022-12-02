import React from 'react';

function home_site() {
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
    <Question/>

  </div>
  )
}

export default home_site