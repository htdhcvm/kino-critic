import React, { useEffect, useState } from 'react';

import './Authorization.scss';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

import { Link, Redirect } from 'react-router-dom';

import BackgroupSignPages from '../BackgroupSignPages/BackgroupSignPages';
import { useDispatch, useSelector } from 'react-redux';
import { requestAuthorization } from '@features/userSlice';

import { requestClearPosts } from '@features/postsSlice';

const Authorization = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);

    const authState = useSelector(state => state.user.authState);
    const errorText = useSelector(state => state.user.errorText);

    const dispatch = useDispatch();

    const handleAuthForm = () => {
        if ((login.trim().length > 0) & (password.trim().length > 0)) {
            dispatch(requestAuthorization(login, password));
        }
    };

    useEffect(() => {
        dispatch(requestClearPosts);
    }, [authState]);

    // useEffect(() => {
    //     if (errorText) setShowError(true);
    //     setTimeout(() => {
    //         setShowError(false);
    //     }, 3000);
    // }, [errorText]);

    const form = (
        <form className="sign-in-form">
            <Typography variant="h2">Sign in</Typography>

            <div className="form-group">
                <TextField
                    className="max-width"
                    label="Login"
                    onChange={e => setLogin(e.target.value)}
                    variant="outlined"
                />
            </div>
            <div className="form-group">
                <TextField
                    className="max-width"
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    variant="outlined"
                    type="password"
                />
            </div>
            <div className="form-group footer">
                <Button
                    className="max-width"
                    variant="contained"
                    color="secondary"
                    onClick={handleAuthForm}
                >
                    Войти
                </Button>
                <Link to="/registration">Sign up</Link>
                {showError ? (
                    <Alert className="erorrMessage" severity="error">
                        {errorText}
                    </Alert>
                ) : null}
            </div>
        </form>
    );

    return (
        <div className="authorization">
            {authState ? <Redirect to="/" /> : null}
            <BackgroupSignPages form={form} />
        </div>
    );
};

export default Authorization;
