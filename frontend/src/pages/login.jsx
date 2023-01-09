import React, {useState, useContext} from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import userContext from '../context/userContext';
import axios from 'axios';
import ErrorNotice from '../components/ErrorNotice';
import { useNavigate } from 'react-router-dom';

export function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const {setUserData} = useContext(userContext);
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginUser = {
                email,
                password
            };
            const loginResponse = await axios.post(
                "http://localhost:8000/login",
                loginUser
            );
            setUserData({token: loginResponse.data.token, user: loginResponse.data.user});
            localStorage.setItem("auth-token", loginResponse.data.token);
            navigate('/')
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
    };

    return (
        <div className="bg-white rounded-xl px-12 py-8 h-min w-max">
            <form onSubmit={submit}>
                <Typography className='text-center' component="h1" variant="h5">
                    Sign in
                </Typography>

                {error && <ErrorNotice message={error} clearError={() => setError(undefined)}/>}

                <div className='flex flex-col'>
                    <TextField
                        onChange={e => setEmail(e.target.value)}
                        margin="normal"
                        fullWidth
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus/>

                    <TextField
                        onChange={e => setPassword(e.target.value)}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"/>

                    <FormControlLabel
                        control={<Checkbox value = "remember" color = "primary" />}
                        label="Remember me"/>

                    <button className='button my-2' type="submit">
                        Sign In
                    </button>

                    <div className="flex gap-12 items-center justify-between">
                        <Link href="#">
                            Forgot password?
                        </Link>

                        <Link href="#">
                            New here? Sign Up
                        </Link>
                    </div>
                </div>
            </form>

            {/* <GoogleLoginButton/> */}
        </div>
    )
}