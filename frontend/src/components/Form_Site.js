import React from 'react';
import Question from './question';
import AdbIcon from '@mui/icons-material/Description';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

export function Form() {
  return (
    <div>
        <div style={{position:'sticky', padding: 5,  display:'flex', alignItems: 'center', backgroundColor:'#AADAB8', maxWidth:'xl'}} >
            <Link to='/home'><AdbIcon style={{ display:'flex', marginLeft: 10 , fontSize: "3rem", color:'#f4f4f9' }} />
            <Typography variant="h4"  component="a"   href="/"
            style={{ fontWeight: 700, letterSpacing: '.2rem',  color: '#f4f4f9',  textDecoration: 'none' }}   >
            Form
            </Typography>
            </Link>
        </div>
    <Question/>
    </div>
  );
}

export default Form