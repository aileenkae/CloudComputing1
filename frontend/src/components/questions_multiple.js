import * as React from 'react'



function MultipleChoice() {

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
    
                            <div
                            style={{
                                paddingTop: '20px',
                            }}>
                                
                                <input id="Option1" type="radio" name="option1" value="opt1"/>
                                <label for="Option1"></label>
                                <input for="Option1" type='text' style ={{border:'none'}} placeholder="Option1"/><br/>
                                <input id="Option2" type="radio" name="option2" value="opt2" />
                                <input for="Option2" type='text' style ={{border:'none'}} placeholder="Option2"/><br/>
                                <input id="Option3" type="radio" name="option3" value="opt3" />
                                <input for="Option3" type='text' style ={{border:'none'}} placeholder="Option3"/><br/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MultipleChoice
