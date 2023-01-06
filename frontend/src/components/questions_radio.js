import React, { useState,useEffect } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Question_Radio() {
 
    const listEntries = ["Option1", "Option2","Option3","Option4"]
    
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
          setValue(event.currenttarget.value);
    };

  return (
    <div>
        <div className="question_box" 
        style={{
            backgroundColor:'#EAFBED',
            height:'100%',
            paddingBottom:'30px'}}>
            <br/>
            <div className='question_part' 
            style={{
                margin:'auto',
                width:'50%'
            }}>
                <div className='question_title'>
                    <div className='question_top' 
                    style={{
                        backgroundColor:'white',
                        borderTopWidth: '8px',
                        borderRadius: '8px',
                        paddingTop: '30px',
                        paddingLeft: '25px',
                        paddingBottom: '30px'
                    }}>
                        <input type='text' className='question_name' 
                        style={{
                            color:'black',
                            boxSizing:'border-box',
                            fontSize:'32px',
                            fontWeight:'400',
                            lineHeight:'40px',
                            lineHeigth:'135%',
                            width:'100%',
                            border:'none',
                            outline:'none',
                            height: '35px'
                        }} 
                        placeholder="Titel"></input>
                        <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}
                                >
                                    {
                                    listEntries.map((el, idx) => {
                                        return (
                                            <FormControlLabel value={value} control={<Radio />} label={el} />
                                        );
                                    })
                                }
                                </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Question_Radio