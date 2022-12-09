import React from 'react';
import Question from './question';
import Question_Radio from './questions_radio'
import MultipleChoice from './questions_multiple';
import RadioV2 from './radio';
import AdbIcon from '@mui/icons-material/Description';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

export function Form() {
  return (
    <div>
        <div style={{position:'sticky', padding: 8,  display:'flex', alignItems: 'center', backgroundColor:'#AADAB8', maxWidth:'xl'}} >
            <Link to='/home'><AdbIcon style={{ display:'flex', marginLeft: 10 , fontSize: "3rem", color:'#f4f4f9' }} /></Link>
            <input type='text' className='form_name' 
                        style={{
                            color:'#f4f4f9',
                            boxSizing:'border-box',
                            marginLeft: '10px',
                            fontSize:'32px',
                            fontWeight:'400',
                            lineHeight:'40px',
                            lineHeigth:'135%',
                            width:'30%',
                            border:'none',
                            outline:'none',
                            height: '35px',
                            backgroundColor: '#AADAB8',
                        }} 
                        placeholder="Formular Name" defaultValue={'Unbekanntes Formular'}></input>
            
        </div>

            <Question/>
            <MultipleChoice/>
            <MultipleChoice/>
            <Question_Radio/>
            <RadioV2/>
    
    </div>
  );
}

export default Form