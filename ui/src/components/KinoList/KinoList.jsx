import React, { useEffect } from 'react';

import './KinoList.scss';

import ItemFilm from '../ItemFilm/ItemFilm';

import Header from '../Header/Header';
import img from '../../../assets/ezgif-3-f6d1d3a74aff.jpg';

const KinoList = () => {
    return (
        <div className="kinoList">
            <Header />
            <div className="list">
                <ItemFilm image={img} title="title" />
                <ItemFilm image={img} title="title" />
                <ItemFilm image={img} title="title" />
                <ItemFilm image={img} title="title" />
                <ItemFilm image={img} title="title" />
                <ItemFilm image={img} title="title" />
                <ItemFilm image={img} title="title" />
                <ItemFilm image={img} title="title" />
                <ItemFilm image={img} title="title" />
                <ItemFilm image={img} title="title" />
                <ItemFilm image={img} title="title" />
                <ItemFilm image={img} title="title" />
                <ItemFilm image={img} title="title" />
                <ItemFilm image={img} title="title" />
                <ItemFilm image={img} title="title" />
            </div>
        </div>
    );
};

export default KinoList;
