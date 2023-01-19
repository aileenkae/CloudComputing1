import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
// This component will be used to display the copyright
export default function Copyright(props) {
    return ( // This is the copyright
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="http://localhost:3000/home">
          HdMForms
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}
