import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './KinoList.scss';

import ItemFilm from '../ItemFilm/ItemFilm';
import Header from '../Header/Header';

import { requestGetAllPosts } from '@features/postsSlice';

const KinoList = () => {
    const dispatch = useDispatch();

    const posts = useSelector(state => state.posts);
    const isAuth = useSelector(state => state.user.authState);

    useEffect(() => {
        return dispatch(requestGetAllPosts);
    }, [isAuth]);

    return (
        <div className="kinoList">
            <Header />
            <div className="list">
                {posts.map(post => (
                    <ItemFilm
                        image={post.film.photo}
                        title={post.film.title}
                        key={post.film.id}
                        id={post.film.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default KinoList;
