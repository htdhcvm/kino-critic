import React from 'react';
import { Link } from 'react-router-dom';

const NotMatch = ({ image, title }) => {
    return (
        <div className="NotMatch">
            <Link to="/">To main -></Link>
        </div>
    );
};

export default NotMatch;
