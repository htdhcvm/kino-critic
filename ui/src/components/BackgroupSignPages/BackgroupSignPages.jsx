import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo-red.png';

const BackgroupSignPages = ({ form }) => {
    return (
        <div className="background">
            <Link to="/">
                <img className="logo" src={logo} />
            </Link>
            {form}
        </div>
    );
};

export default BackgroupSignPages;
