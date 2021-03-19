import React from 'react';

import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

import './Registration.scss';

import BackgroupSignPages from '../BackgroupSignPages/BackgroupSignPages';

const Registration = () => {
    const form = (
        <form className="sign-up-form">
            <Typography variant="h2">Sign up</Typography>
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
            <div className="form-group">
                <TextField
                    className="max-width"
                    id="outlined-basic"
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
                >
                    Зарегистрироваться
                </Button>
                <Link to="/authorization">Sign in</Link>
            </div>
        </form>
    );

    return (
        <div className="registration">
            <BackgroupSignPages form={form} />
        </div>
    );
};

export default Registration;
