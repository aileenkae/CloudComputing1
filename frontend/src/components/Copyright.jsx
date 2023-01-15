import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// This function renders a copyright notice
export default function Copyright(props) {
    return (
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
