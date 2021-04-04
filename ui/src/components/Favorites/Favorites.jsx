import React, { useEffect } from 'react';
const { v4: uuidv4 } = require('uuid');

import './Favorites.scss';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';

import { requestGetFavorites } from '@features/diarySlice';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const dispath = useDispatch();
    const accessToken = useSelector(state => state.user.user.accessToken);

    useEffect(() => {
        dispath(requestGetFavorites(accessToken));
    }, []);

    const favorites = useSelector(state => state.diarys.favorites);

    return (
        <div className="Favorites">
            <Header />
            <h1>Favorites</h1>
            <div className="favorites-wrapper">
                {favorites.map(favorite => (
                    <Link to={`/kino-page/${favorite.id}`} key={uuidv4()}>
                        <div className="favorite-item">
                            <img
                                src={`data:image/jpeg;base64, ${favorite.photo}`}
                            />
                            <p>{favorite.title}</p>
                            {favorite.owner}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

// <Link to={`/kino-page/${id}`}>

export default Favorites;
