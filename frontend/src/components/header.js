import * as React from 'react';
//import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
//import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
//import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
//import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Description';
import SearchIcon from '@mui/icons-material/Search';


//const pages = ['Home', 'Formular'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div style={{position:'sticky', padding: 5,  display:'flex', backgroundColor:'#AADAB8', maxWidth:'xl'}} >
      <AdbIcon style={{ display:'flex', marginLeft: 10 , fontSize: "3rem", color:'#f4f4f9' }} />
      <Typography variant="h4"  component="a"   href="/"
          style={{ fontWeight: 700, letterSpacing: '.2rem',  color: '#f4f4f9',  textDecoration: 'none' }}   >
          Forms
      </Typography>

          
      <div style={{position:'sticky', display:'flex', flexDirection:'row', width: 400, height: 45, alignItems:'center', backgroundColor: '#f4f4f9', borderRadius:5, marginLeft: 400 }}> 
        <IconButton ><SearchIcon /></IconButton>
        <input type="text" name="search" placeholder='Search' style={{border:'none', height:40, background:'transparent', outline:'none', widh:'100%'}} />
      </div>
          
  
   {/*   <IconButton onClick={handleOpenNavMenu}  size="large" aria-label="account of current user"  aria-controls="menu-appbar" aria-haspopup="true" color="inherit" > 
       <MenuIcon />  </IconButton>

       <Menu id="menu-appbar"  anchorEl={anchorElNav} anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}
          keepMounted
          transformOrigin={{vertical: 'top',horizontal: 'left',}}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: 'block', md: 'none' }}} >
          {/*pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          )) 
        </Menu> 
        
       {<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))
          </Box> }
           */}


         <Box sx={{ flexGrow: 0, marginLeft: 60, cursor:'pointer' }}>
         <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            
            <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{vertical: 'top',horizontal: 'right'}}
              keepMounted   transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}> 
                {settings.map((setting) => (
                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                 </MenuItem>  ))}
            </Menu>
          </Box>
            
         
         
      
    </div>
  );
}
export default ResponsiveAppBar;