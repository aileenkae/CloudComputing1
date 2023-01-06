import React from 'react';
import Delete from '@mui/icons-material/DeleteForeverOutlined';
import IconButton from '@mui/material/IconButton';
import FormPreviewIcon from '../images/form_preview_icon.png'

export function FormPreview() {
    return (
        <button className='w-full h-full bg-gray-200 hover:bg-white overflow-hidden transition rounded-xl flex items-center justify-between flex-col'>
            <div className='w-full h-full flex items-center justify-center'>
                <img className='w-1/3 mt-2' src={FormPreviewIcon} alt=""/>
            </div>

            <div className='bg-white w-full py-2 px-4 flex items-center justify-between'>
                <h3>Form title</h3>
                <IconButton size="small">
                    <Delete
                        title="Delete Form"
                        style={{
                            fontSize: 30,
                            borderRadius: '2px'
                        }}/>
                </IconButton>
            </div>

        </button>
    )
}