import { Accordion, AccordionSummary } from '@mui/material';
import React, { useState,useEffect } from 'react';
import Question_line from './question_line';
import Question_textbox from './question_textbox';


function Question() {
    const[questions, setQuestions] = useState(
        [{questionText: 'Testfrage?',
        questionType:'radio',
        options : [
            {optionText: "Test1"},
            {optionText: 'Test2'}
        ],
        open: true,
        required: false}]
    )

    /*function questionsUI() {
        return questions.map((ques,i) => (
            <Accordion expanded={ques.open} className={ques[i].open ? 'add border' : ''}>
                <AccordionSummary 
                    aria-controls='panel1a-content'
                    id="panel1a-header"
                    elevation={1} style={{width:'100%'}}>

                </AccordionSummary>
            </Accordion>
        ))
    }*/
  return (
    <div>

        <div className="question_box" 
        style={{
            backgroundColor:'#f4f4f9',
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
                        placeholder="Formular Name"></input>
                        <input type='text' className='question_desc'
                        style={{
                            color:'black',
                            boxSizing:'border-box',
                            fontSize:'13px',
                            fontWeight:'400',
                            lineHeight:'40px',
                            marginTop:'10px',
                            width:'100%',
                            border:'none',
                            outline:'none',
                            height: '35px'
                        }}  
                        placeholder='Beschreibung'></input>

                        

                    </div>
                </div>

                {/*questionsUI()*/}
            </div>
            <Question_line/>
            <Question_textbox/>
        </div>
    </div>
  )
}

export default Question