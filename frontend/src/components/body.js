import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function Body() {
  return (
    <div className='template'>
        <AppBar position="static" style={{backgroundColor:'#f4f4f9', paddingBottom: 400}}>
             <span style={{fontSize:40, color:"#202124", marginLeft: 800}}> Start new Form </span>
          

        <Box
          sx={{
          display: 'flex',  flexWrap: 'wrap',
           '& > :not(style)': {   m: 1, width: 128, height: 128,        },
                }}
         >
         <Paper elevation={2}>Form1 </Paper>
         <Paper elevation={2}>Form2 </Paper>
         <Paper elevation={2}>Form3 </Paper>
        </Box>
        </AppBar>
              
    </div>

  );
  
}

export default Body;