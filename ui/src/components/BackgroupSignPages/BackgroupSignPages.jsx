import React from 'react';
import logo from '../../../assets/logo/logo-red.png';

import backgroun from '../../../assets/background.jpg';

const BackgroupSignPages = ({ form }) => {
    return (
        <div className="background">
            <img className="logo" src={logo} />
            {form}
        </div>
    );
};

export default BackgroupSignPages;
