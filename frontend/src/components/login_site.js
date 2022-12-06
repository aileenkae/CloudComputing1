import React from 'react'
import AdbIcon from '@mui/icons-material/Description';
import Typography from '@mui/material/Typography';

export function Login() {
  return (

    <div style={{position:'sticky', padding: 5,  display:'flex', alignItems: 'center', backgroundColor:'#AADAB8', maxWidth:'xl'}} >
      <AdbIcon style={{ display:'flex', marginLeft: 10 , fontSize: "3rem", color:'#f4f4f9' }} />
      <Typography variant="h4"  component="a"   href="/"
          style={{ fontWeight: 700, letterSpacing: '.2rem',  color: '#f4f4f9',  textDecoration: 'none' }}   >
          Forms   Login
      </Typography>


    </div>


  )
}

export default Login
