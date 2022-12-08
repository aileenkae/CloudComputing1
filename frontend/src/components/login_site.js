import React from 'react'
import './login_site.css';
import AdbIcon from '@mui/icons-material/Description';
import Typography from '@mui/material/Typography';
import Authenticate from './authenticate';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div>
    <div style={{position:'sticky', padding: 5,  display:'flex', alignItems: 'center', backgroundColor:'#AADAB8', maxWidth:'xl'}} >
    <Link to='/home'><AdbIcon style={{ display:'flex', marginLeft: 10 , fontSize: "3rem", color:'#f4f4f9' }} /></Link>
      <Typography variant="h4"  component="a"   href="/"
          style={{ fontWeight: 700, letterSpacing: '.2rem',  color: '#f4f4f9',  textDecoration: 'none' }}   >
          Forms   Login
      </Typography>

    </div>
      <div class="Login">
        <Authenticate />
      </div>
    </div>


  )
}

export default Login
