import { Accordion, AccordionSummary } from '@mui/material';
import React, { useState,useEffect } from 'react';
import Question_line from './question_line';
import Question_textbox from './question_textbox';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';



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
    );
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const [inputList, setInputList] = useState([]);
  
    const addSingleline = event => {
      setInputList(inputList.concat(<Question_line key={inputList.length} />));
    };

    const addMultileline = event => {
        setInputList(inputList.concat(<Question_textbox key={inputList.length} />));
      };
    


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
            {inputList}
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                Frage hizufügen
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}>
                <MenuItem onClick={addMultileline}>Multiline</MenuItem>
                <MenuItem onClick={addSingleline}>Singleline</MenuItem>
                <MenuItem onClick={handleClose}>Radiobutton</MenuItem>
            </Menu>
            <Button onClick={handleClick}>Löschen</Button>
        </div>
    
  )
}

export default Question