import React from 'react'
import Delete from '@mui/icons-material/DeleteForeverOutlined';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

function ResponsiveAppBarBODY() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

{/*function Body() { */}
  return (
    <div style={{backgroundColor: '#f4f4f9' , paddingBottom: '200px', paddingTop: '150px' }} > 
      <Typography style={{fontSize:50, fontWeight:700, color:'#aadab8', alignContent:'center', marginLeft:700, marginBottom:70 }}> Your Forms </Typography>  
      
      <div style={{ marginLeft:200,  marginRight: 200, display:'flex' , flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} > 

        <button style={{height: '250px', width: '300px', cursor:'pointer'}}> 
        <p style={{fontSize: 20}}>Create New Form</p>
        <AddIcon style={{fontSize:150, color:'#aadab8' }}> </AddIcon>
        </button>
        
        <button style={{height: '250px', width: '300px', cursor:'pointer'}}>   
        <p style={{fontSize: 20}}>Form #1</p>
        <IconButton onClick={handleOpenNavMenu}  size="large" aria-label="account of current user"  aria-controls="menu-appbar" aria-haspopup="true" color="inherit" style={{marginTop:100, marginLeft:200}} >  
        <Delete style={{fontSize: 30, borderRadius: '2px'}} /> </IconButton>
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