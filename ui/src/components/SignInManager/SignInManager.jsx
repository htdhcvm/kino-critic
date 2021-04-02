import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import logo from '../../../assets/logo/logo-red.png';

import './SignInManager.scss';

const SignInManager = () => {
    return (
        <div className="SignInManager">
            <div className="wrapper">
                <img src={logo}></img>
                <form>
                    <div className="from-group">
                        <TextField
                            className="max-width"
                            label="Login"
                            variant="outlined"
                        />
                    </div>
                    <div className="from-group">
                        <TextField
                            className="max-width"
                            label="Password"
                            variant="outlined"
                            type="password"
                        />
                    </div>
                    <Button
                        className="max-width"
                        variant="contained"
                        color="secondary"
                    >
                        Войти
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SignInManager;
