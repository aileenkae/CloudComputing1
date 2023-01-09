import React from 'react';
import {Link} from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

export function AddFormButton() {
    return (
        <Link to='/form/new'>
            <button className='w-full h-full bg-gray-200 hover:bg-white transition p-4 rounded-xl'>
                <p className='text-xl'>Create New Form</p>
                <AddIcon className='text-indigo-700 text-9xl'></AddIcon>
            </button>
        </Link>
    )
}