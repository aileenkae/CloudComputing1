import React from 'react';
import Delete from '@mui/icons-material/DeleteForeverOutlined';
import IconButton from '@mui/material/IconButton';
import FormPreviewIcon from '../images/form_preview_icon.png'
import {Link} from 'react-router-dom';

export function FormPreview(props) {
    return (
        <div
            className='w-full h-full bg-gray-200 hover:bg-white overflow-hidden transition rounded-xl flex items-center justify-between flex-col'>
            <Link to={`/form`} state={{...props.form, isEditing: true}}>
                <div className='w-full h-full py-8 flex items-center justify-center'>
                    <img className='w-1/3 mt-2' src={FormPreviewIcon} alt=""/>
                </div>
            </Link>

            <div className='bg-white w-full py-2 px-4 flex items-center justify-between'>
                <Link to={`/form`} state={props.form}>
                    <h3>{props.form.name}</h3>
                </Link>

                <IconButton size="small" onClick={props.onDelete}>
                    <Delete
                        title="Delete Form"
                        style={{
                            fontSize: 30,
                            borderRadius: '2px'
                        }}/>
                </IconButton>
            </div>
        </div>
    )
}