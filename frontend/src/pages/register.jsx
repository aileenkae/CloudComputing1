import React, {useState, useContext} from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import userContext from '../context/userContext';
import axios from 'axios';
import ErrorNotice from '../components/ErrorNotice';
import {useNavigate} from 'react-router-dom';
import Link from '@mui/material/Link';

export function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirmation, setPasswordConfirmation] = useState();
    const [error, setError] = useState();
    const {setUserData} = useContext(userContext);
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const user = {
                name,
                email,
                password,
                passwordConfirmation
            };
            const response = await axios.post("http://localhost:8000/register", user);
            setUserData({token: response.data.token, user: response.data.user});
            localStorage.setItem("auth-token", response.data.token);
            navigate('/')
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
    };

    return (
        <div className='flex flex-col w-full items-center gap-4'>
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)}/>}

            <div className="bg-white rounded-xl px-12 py-8 h-min w-max">
                <form onSubmit={submit}>
                    <Typography className='text-center' component="h1" variant="h5">
                        Register
                    </Typography>

                    <div className='flex flex-col'>
                        <TextField
                            onChange={e => setName(e.target.value)}
                            margin="normal"
                            fullWidth="fullWidth"
                            required="required"
                            label="Name"
                            autoComplete="name"
                            autoFocus="autoFocus"/>
                        <TextField
                            onChange={e => setEmail(e.target.value)}
                            margin="normal"
                            fullWidth="fullWidth"
                            required="required"
                            label="Email Address"
                            autoComplete="email"
                            autoFocus="autoFocus"/>

                        <TextField
                            onChange={e => setPassword(e.target.value)}
                            margin="normal"
                            required="required"
                            fullWidth="fullWidth"
                            label="Password"
                            type="password"
                            autoComplete="current-password"/>

                        <TextField
                            onChange={e => setPasswordConfirmation(e.target.value)}
                            margin="normal"
                            required="required"
                            fullWidth="fullWidth"
                            label="Password confirmation"
                            type="password"
                            autoComplete="current-password"/>

                        <button className='button my-2' type="submit" style={{backgroundColor: '#00cc6d'}}>
                            Register
                        </button>

                        <div className="flex gap-12 items-center justify-between">
                            <Link href="/login" style={{color: '#00a357'}}>
                                Already have an account? Sign in
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
