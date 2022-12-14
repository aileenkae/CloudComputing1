import React, {useId} from 'react'
import Delete from '@mui/icons-material/DeleteForeverOutlined';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {Link, useNavigate} from 'react-router-dom';
import uuid from 'react-uuid'

function ResponsiveAppBarBODY() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const navigate = useNavigate();
  const CreateNewForm = () => {
   
    const id_form = uuid();
    navigate('/form/' + id_form);
  }


     
  

{/*function Body() { */}

  return (
    <div style={{backgroundColor: '#f4f4f9' , paddingBottom: '100px', paddingTop: '100px' }} > 
      <Typography style={{fontSize:50, fontWeight:700, color:'#aadab8', alignContent:'center', marginLeft:600, marginBottom:60 }}> Your Forms </Typography>  
      
      <div style={{ marginLeft:200,  marginRight: 200, display:'flex' , flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} > 
        
        <button onClick={CreateNewForm} style={{height: '250px', width: '300px', cursor:'pointer'}}> 
        <p style={{fontSize: 20}}>Create New Form</p>
        <AddIcon style={{fontSize:200, color:'#aadab8' }}> </AddIcon>
        </button>
        
        
        <button style={{height: '250px', width: '300px', cursor:'pointer'}}>   
        <p style={{fontSize: 20}}>Form #1</p>
        <IconButton onClick={handleOpenNavMenu}  size="large" aria-label="account of current user"  aria-controls="menu-appbar" aria-haspopup="true" color="inherit" style={{marginTop:100, marginLeft:200}} >  
        <Delete title="Delete Form" style={{fontSize: 30, borderRadius: '2px'}} /> </IconButton>
        </button>

        <button style={{height: '250px', width: '300px', cursor:'pointer'}}> 
        <p style={{fontSize: 20}}>Form #2</p>
        <IconButton onClick={handleOpenNavMenu}  size="large" aria-label="account of current user"  aria-controls="menu-appbar" aria-haspopup="true" color="inherit" style={{marginTop:100, marginLeft:200}} >  
        <Delete style={{fontSize: 30, borderRadius: '2px'}} /> </IconButton>
        </button>
        
      </div>
              
    </div>
        
  );
  
}

export default ResponsiveAppBarBODY;