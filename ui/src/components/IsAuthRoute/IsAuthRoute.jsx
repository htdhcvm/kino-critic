import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const IsAuthRoute = ({ children, ...rest }) => {
    const authState = useSelector(state => state.user.authState);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                !authState ? children : <Redirect to="/" />
            }
        />
    );
};

export default IsAuthRoute;
