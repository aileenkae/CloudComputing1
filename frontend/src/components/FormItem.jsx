import * as React from 'react';
import {Card, CardActionArea, CardActions, IconButton, CardContent, Typography} from '@mui/material';
import FormPreviewIcon from '../images/form_preview_icon.png' 
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from "@mui/icons-material/ModeEdit"
import IosShareIcon from "@mui/icons-material/IosShare"

export default function FormItem(props) {
    return (
        <Card className='w-full'>
            <CardActionArea>
                <Link to="/form" state={{...props.form, isEditing: true}}>
                    <div className='w-full h-full py-8 flex items-center justify-center'>
                        <img className='w-1/3 mt-2' src={FormPreviewIcon} alt=""/>
                    </div>
                </Link>
                <CardContent>
                    <Typography gutterBottom="gutterBottom" variant="h5" component="div">
                        {props.form.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.form.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className='flex items-center justify-between'>
                <Link to="/form" state={{...props.form, isEditing: true}}>
                    <IconButton>
                        <ModeEditIcon />
                    </IconButton>
                </Link>
                <IconButton onClick={() => {navigator.clipboard.writeText("http://localhost:3000/response/" + props.form._id)}}>
                    <IosShareIcon />
                </IconButton>
                <Link to={`/statistic/${props.form._id}`}>
                    <IconButton>
                        <VisibilityIcon />
                    </IconButton>
                </Link>
                <IconButton onClick={props.onDelete} className='text-red-700'>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}