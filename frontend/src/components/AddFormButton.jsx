import React from 'react';
import {Link} from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

// This function returns the "Create New Form" button
export function AddFormButton() {
    // The initial state of the form
    const form = {
        name: '',
        description: '',
        questions: [],
        isEditing: false
    }

    return (
        // When the button is clicked, it navigates to the "/form" route and passes the form object as state
        <Link to='/form' state={form}>
            <button className='w-full h-full bg-gray-200 hover:bg-white transition p-4 rounded-xl'>
                <p className='text-xl'>Create New Form</p>
                <AddIcon className='text-indigo-700 text-9xl'></AddIcon>
            </button>
        </Link>
    )
}