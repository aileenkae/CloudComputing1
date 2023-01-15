import React, {useContext} from 'react';
import userContext from '../context/userContext';
import {Link, useNavigate} from 'react-router-dom';

// This returns the login button, register button or a logout button depending on the user's authentication status
export default function AuthOptions() {
    // access the userData and setUserData functions from the userContext
    const {userData, setUserData} = useContext(userContext);
    const navigate = useNavigate();

    // function to logout the user
    const logout = () => {
        setUserData({token: undefined, user: undefined})
        localStorage.setItem("auth-token", "");
        navigate('/login')
    };

    return (
        <div className="flex items-center justify-end">
            {
            // if the user is logged in, render a logout button
            userData.user
                ? (<button className='button' onClick={logout}>Logout</button>)
                // if the user is not logged in, render a login and register button
                : (<>
                    <Link to='/login'>
                        <button className='button mr-2'>Login</button>
                    </Link>
                    <Link to='/register'>
                        <button className='button'>Register</button>
                    </Link>
                </>)
            }
        </div>
    )
}