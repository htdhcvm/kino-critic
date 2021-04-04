import React, { useEffect } from 'react';
const { v4: uuidv4 } = require('uuid');

import './Bookmarks.scss';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';

import { requestGetBookmarks } from '@features/diarySlice';
import { Link } from 'react-router-dom';

const Bookmarks = () => {
    const dispath = useDispatch();
    const accessToken = useSelector(state => state.user.user.accessToken);

    useEffect(() => {
        dispath(requestGetBookmarks(accessToken));
    }, []);

    const bookmarks = useSelector(state => state.diarys.bookmarks);

    return (
        <div className="Bookmarks">
            <Header />
            <h1>Bookmarks</h1>
            <div className="bookmarks-wrapper">
                {bookmarks.map(bookmarks => (
                    <Link to={`/kino-page/${bookmarks.id}`} key={uuidv4()}>
                        <div className="bookmark-item">
                            <img
                                src={`data:image/jpeg;base64, ${bookmarks.photo}`}
                            />
                            <p>{bookmarks.title}</p>
                            {bookmarks.owner}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Bookmarks;
