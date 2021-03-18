import React from 'react';

import './Header.scss';

import logo from '../../../assets/logo/logo-red.png';
import { Link } from 'react-router-dom';

import './Header';

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img className="logo" src={logo} />
            </Link>
            <Link to="/authorization">Войти</Link>
        </div>
    );
};

export default Header;
