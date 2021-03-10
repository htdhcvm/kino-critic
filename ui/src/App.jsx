import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Authorization from './components/Authorization/Authorization';
import KinoList from './components/KinoList/KinoList';
import KinoPage from './components/KinoPage/KinoPage';
import Registration from './components/Registration/Registration';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/registration">
                    <Registration />
                </Route>
                <Route path="/kino-list">
                    <KinoList />
                </Route>
                <Route path="/kino-page">
                    <KinoPage />
                </Route>
                <Route path="/">
                    <Authorization />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
