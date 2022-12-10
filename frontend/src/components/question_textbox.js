import React from 'react'

function Question_textbox() {


  return (


                <div className='question_title' style={{                        
                width:'50%',
                margin:'auto'}}>
                    <div className='question_top' 
                    style={{
                        backgroundColor:'white',
                        marginTop:'30px',
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
                        fontSize:'18px',
                        fontWeight:'400',
                        lineHeight:'40px',
                        lineHeigth:'135%',
                        width:'100%',
                        border:'none',
                        outline:'none',
                        height: '35px'
                        }} 
                    placeholder='Frage'></input>
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
                    placeholder='Frage Beschreibung'></input>
                    <textarea className='question_textbox'rows='4' cols='50'
                    style={{
                        color:'black',
                        boxSizing:'border-box',
                        fontSize:'13px',
                        marginTop:'10px',
                        borderColor: '#D8E2DC',
                        color: '#979E9A',
                        width:'90%'
                    }}
                    >Antwort Text</textarea>       
                </div>    
            </div>

  )
}

export default Question_textbox