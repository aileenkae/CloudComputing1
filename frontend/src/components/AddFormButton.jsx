import React from 'react';
import {Link} from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

export function AddFormButton() {
    // This is the form that will be passed to the form page
    const form = {
        name: '',
        description: '',
        questions: [],
        isEditing: false
    }

    return (
        // This is the button that will be used to create a new form
        <Link to='/form' state={form}>
            <button className='w-full h-full bg-gray-200 hover:bg-white transition p-4 rounded-xl'>
                <p className='text-xl'>Create New Form</p>
                <AddIcon className='text-9xl' style={{color: '#00cc6d'}} ></AddIcon>
            </button>
        </Link>
    )
}