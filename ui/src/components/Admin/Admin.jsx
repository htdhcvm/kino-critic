import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './Admin.scss';

const Admin = () => {
    return (
        <div className="Admin">
            <form className="form">
                <div className="form-group">
                    <TextField id="standard-basic" label="Login" />
                </div>
                <div className="form-group">
                    <TextField id="standard-basic" label="Password" />
                </div>
                <Button variant="contained" color="primary">
                    Добавить манагера
                </Button>
                <Button variant="contained">Выйти</Button>
            </form>
        </div>
    );
};

export default Admin;
