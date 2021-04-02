import React, { useState, useEffect } from 'react';

import './Registration.scss';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

import { Link } from 'react-router-dom';

import BackgroupSignPages from '../BackgroupSignPages/BackgroupSignPages';
import { useDispatch, useSelector } from 'react-redux';

import { requestRegistration, requestAuthorization } from '@features/userSlice';
import { requestClearPosts } from '@features/postsSlice';

const Registration = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');

    const [localError, setLocalError] = useState('');

    const dispatch = useDispatch();

    const authState = useSelector(state => state.user.authState);
    const loginUser = useSelector(state => state.user.user.login);

    useEffect(() => {
        dispatch(requestClearPosts);
    }, [authState]);

    // useEffect(() => {
    //     if (loginUser) {
    //         dispatch(requestAuthorization(login, password));
    //     }
    // }, [loginUser]);

    const handleRegistration = async () => {
        if (
            (login.trim().length > 0) &
            (password.trim().length > 0) &
            (repeat.trim().length > 0)
        ) {
            if (password === repeat) {
                dispatch(requestRegistration(login, password));
            } else {
                setLocalError('Passwords not equal');
            }
        } else {
            setLocalError('Field is empty');
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setLocalError('');
        }, 3000);
    }, [localError]);

    const form = (
        <form className="sign-up-form">
            <Typography variant="h2">Sign up</Typography>
            <div className="form-group">
                <TextField
                    onChange={e => setLogin(e.target.value)}
                    className="max-width"
                    label="Login"
                    variant="outlined"
                />
            </div>
            <div className="form-group">
                <TextField
                    onChange={e => setPassword(e.target.value)}
                    className="max-width"
                    label="Password"
                    variant="outlined"
                    type="password"
                />
            </div>
            <div className="form-group">
                <TextField
                    onChange={e => setRepeat(e.target.value)}
                    className="max-width"
                    label="Confirm password"
                    variant="outlined"
                    type="password"
                />
            </div>
            <div className="form-group footer">
                <Button
                    className="max-width"
                    variant="contained"
                    color="secondary"
                    onClick={handleRegistration}
                >
                    Зарегистрироваться
                </Button>
                <Link to="/authorization">Sign in</Link>
                {localError ? (
                    <Alert className="erorrMessage" severity="error">
                        {localError}
                    </Alert>
                ) : null}
            </div>
        </form>
    );

    return (
        <div className="registration">
            {authState ? <Redirect to="/" /> : null}
            <BackgroupSignPages form={form} />
        </div>
    );
};

export default Registration;
