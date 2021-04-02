import React from 'react';

import { Link } from 'react-router-dom';

const ItemFilm = ({ image, title, id }) => {
    return (
        <Link to={`/kino-page/${id}`}>
            <div className="ItemFilm">
                <img src={`data:image/jpeg;base64, ${image}`} />
                {title}
            </div>
        </Link>
    );
};

export default ItemFilm;
