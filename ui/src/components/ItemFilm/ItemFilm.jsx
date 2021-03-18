import React from 'react';

const ItemFilm = ({ image, title }) => {
    return (
        <div className="ItemFilm">
            <img src={image} />
            {title}
        </div>
    );
};

export default ItemFilm;
