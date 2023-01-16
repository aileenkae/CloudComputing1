import React, {useContext} from 'react';
import userContext from '../context/userContext';
import {Link, useNavigate} from 'react-router-dom';


export default function AuthOptions() {
    const {userData, setUserData} = useContext(userContext);
    const navigate = useNavigate();

    const logout = () => {
        setUserData({token: undefined, user: undefined})
        localStorage.setItem("auth-token", "");
        navigate('/login')
    };

    return (
        <div className="flex items-center justify-end">
            {
            userData.user
                ? (<button className='button' style={{backgroundColor: "#F5F5F5", color: '#00cc6d' }} onClick={logout}>Logout</button>)
                : (<>
                    <Link to='/login'>
                        <button className='button mr-2' style={{backgroundColor: "#F5F5F5", color: '#00cc6d'}} >Login</button>
                    </Link>
                    <Link to='/register'>
                        <button className='button' style={{backgroundColor: "#F5F5F5", color: '#00cc6d'}} >Register</button>
                    </Link>
                </>)
            }
        </div>
    )
}