import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import Authorization from './components/Authorization/Authorization';
import KinoList from './components/KinoList/KinoList';
import Registration from './components/Registration/Registration';
import NotMatch from './components/NotMatch/NotMatch';
import SignInManager from './components/SignInManager/SignInManager';
import Admin from './components/Admin/Admin';
import Manager from './components/Manager/Manager';
import IsAuthRoute from './components/IsAuthRoute/IsAuthRoute';
import CheckOnAuth from './components/CheckOnAuth/CheckOnAuth';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/admin">
                    <Admin />
                </Route>
                <Route path="/manager">
                    <Manager />
                </Route>
                <Route path="/sign-in-for-manegers">
                    <SignInManager />
                </Route>
                {/* <Route path="/kino-page/:id" exact>
                    <KinoPage />
                </Route> */}
                <CheckOnAuth path="/kino-page/:id" exact />

                <IsAuthRoute path="/registration">
                    <Registration />
                </IsAuthRoute>
                <IsAuthRoute path="/authorization">
                    <Authorization />
                </IsAuthRoute>
                <Route path="/" exact>
                    <KinoList />
                </Route>
                <Route path="*">
                    <NotMatch />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
