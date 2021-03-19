import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './KinoList.scss';

import ItemFilm from '../ItemFilm/ItemFilm';

import Header from '../Header/Header';
import img from '../../../assets/ezgif-3-f6d1d3a74aff.jpg';

import { requestGetAllPosts } from '@features/postsSlice';

const KinoList = () => {
    const dispatch = useDispatch();

    const posts = useSelector(state => state.posts);
    useEffect(() => {
        dispatch(requestGetAllPosts);
    }, []);

    // console.log(posts.map(() => {}));
    return (
        <div className="kinoList">
            <Header />
            <div className="list">
                {posts.map(post => (
                    <ItemFilm image={img} title={post.name} key={post.id} />
                ))}
            </div>
        </div>
    );
};

export default KinoList;
