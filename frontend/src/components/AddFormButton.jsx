import React from 'react';
import {Link} from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

export function AddFormButton() {
    return (
        <Link to='/form'>
            <button className='w-full bg-gray-200 hover:bg-white transition p-4 rounded-lg'>
                <p className='text-xl'>Create New Form</p>
                <AddIcon
                    style={{
                        fontSize: 200,
                        color: '#aadab8'
                    }}></AddIcon>
            </button>
        </Link>
    )
}