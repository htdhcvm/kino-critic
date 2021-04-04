import React from 'react';

import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import KinoPageVisitor from '../KinoPageVisitor/KinoPageVisitor';
import KinoPageUser from '../KinoPageUser/KinoPageUser';

const CheckOnAuth = ({ ...rest }) => {
    const authState = useSelector(state => state.user.authState);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                !authState ? <KinoPageVisitor /> : <KinoPageUser />
            }
        />
    );
};

export default CheckOnAuth;
