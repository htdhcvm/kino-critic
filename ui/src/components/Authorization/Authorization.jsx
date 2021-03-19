import React from 'react';

import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './Authorization.scss';

import BackgroupSignPages from '../BackgroupSignPages/BackgroupSignPages';

const Authorization = () => {
    const form = (
        <form className="sign-in-form">
            <Typography variant="h2">Sign in</Typography>

            <div className="form-group">
                <TextField
                    className="max-width"
                    id="outlined-basic"
                    label="Login"
                    variant="outlined"
                />
            </div>
            <div className="form-group">
                <TextField
                    className="max-width"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    type="password"
                />
            </div>
            <div className="form-group footer">
                <Button
                    className="max-width"
                    variant="contained"
                    color="secondary"
                >
                    Войти
                </Button>
                <Link to="/registration">Sign up</Link>
            </div>
        </form>
    );

    return (
        <div className="authorization">
            <BackgroupSignPages form={form} />
        </div>
    );
};

export default Authorization;
