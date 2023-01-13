import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import FormPreviewIcon from '../images/form_preview_icon.png' 
import { Link } from 'react-router-dom';
export default function FormItem(props) {
    return (
        <Card className='w-full'>
            <CardActionArea>
                <div className='w-full h-full py-8 flex items-center justify-center'>
                    <img className='w-1/3 mt-2' src={FormPreviewIcon} alt=""/>
                </div>
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
                <Button size="small" color='primary'>
                    Edit
                </Button>
                <Link to={`/response/${props.form._id}`}>
                    <Button size="small" color='primary'>
                        Answer
                    </Button>
                </Link>
                <Button size="small" onClick={props.onDelete} className='text-red-700'>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}