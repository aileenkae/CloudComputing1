import React from 'react'
import "./body.css"
import Delete from '@mui/icons-material/DeleteForeverOutlined';
import AddIcon from '@mui/icons-material/Add';


function Body() {
  return (
    <div className='mainbody' style={{backgroundColor: '#f4f4f9' , paddingBottom: '250px', paddingTop: '250px' }} > 
      <div className='box'>      
        <div >
          <span style={{fontSize:40, color:"#202124", alignItems: 'center'}}> Your Forms </span>
        </div>
                
        
        <button className='forms'> 
        <p>Create New Form</p>
        <AddIcon style={{backgroundColor: '#aadab9'}}> </AddIcon>
        </button>
        
        <button className='forms'>   
        <p>Form #1</p>
        <Delete style={{color: "black", padding:'3px', marginRight: '3px', borderRadius: '2px'}}></Delete>
              
        </button>
        <button className='forms'> 
        <p>Form #2</p>
          <Delete style={{color: "black", padding:'3px', marginRight: '3px', borderRadius: '2px'}}></Delete>
        </button>
        
        </div>
              
    </div>
        
  );
  
}

export default Body;