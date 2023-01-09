import * as React from 'react';
import AdbIcon from '@mui/icons-material/Description';
import SearchInput from './SearchInput';
import AuthOptions from './authOptions';

export default function Header() {
    return (
        <div className='container py-4 flex justify-between items-center'>
            <div>
                <a className='text-black w-min flex items-center text-3xl' href="/">
                    <AdbIcon className='mr-2 text-indigo-700 text-5xl'/>
                    Forms
                </a>
            </div>

            <div className='flex-1 mx-48 flex justify-center items-center'>
                <SearchInput/>
            </div>

            <AuthOptions />
        </div>
    );
}