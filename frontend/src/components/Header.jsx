import * as React from 'react';
import AdbIcon from '@mui/icons-material/Description';
import SearchInput from './SearchInput';
import AuthOptions from './authOptions';
// This component will be used to display the header of the page (logo, search bar and login/register buttons)
export default function Header() {
    return (
        <div style={{position:'sticky', padding: 5,  display:'flex', backgroundColor:'#00cc6d', maxWidth:'xl'}}>
            <div className='container py-4 flex justify-between items-center'>
                <div>
                    <a className='text-white w-min flex items-center text-3xl' href="/">
                        <AdbIcon className='mr-2 text-gray-100 text-5xl'/>
                        HdMForms
                    </a>
                </div>

                <div className='flex-1 mx-48 flex justify-center items-center'>
                    {/*<SearchInput/>*/}
                </div>
                
                <AuthOptions />
                
            </div>
        </div>
    );
}