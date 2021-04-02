import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import './KinoPageVisitor.scss';

import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import KinoPage from '../KinoPage/KinoPage';

import { requestKinoData } from '@features/postSlice';
import { requestCommentsOnIdKinoFilm } from '@features/commentsSlice';

import Header from '../Header/Header';
import ItemComments from '../ItemComments/ItemComments';

const KinoPageVisitor = () => {
    let { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestKinoData(id));
        dispatch(requestCommentsOnIdKinoFilm(id));
    }, []);

    const title = useSelector(state => state.post.title);
    const photo = useSelector(state => state.post.photo);
    const review = useSelector(state => state.post.review);
    const estimate = useSelector(state => state.post.estimate);
    const aboutFilm = useSelector(state => state.post.aboutFilm);

    const comments = useSelector(state => state.comments);

    const formPage = (
        <>
            <Header />
            <div className="body-kino">
                <div className="photo">
                    <img
                        className="kino-image"
                        src={`data:image/jpeg;base64, ${photo}`}
                    />
                </div>
                <div className="main-content">
                    <Typography variant="h2" gutterBottom>
                        {title}
                    </Typography>

                    <div className="review">
                        <Typography variant="h5" gutterBottom>
                            Обзор
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {review}
                        </Typography>
                    </div>
                    <div className="about">
                        <Typography variant="h5" gutterBottom>
                            О фильме
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableBody>
                                    {Object.keys(aboutFilm).map(item => {
                                        return (
                                            <TableRow key={uuidv4()}>
                                                <TableCell
                                                    key={uuidv4()}
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {aboutFilm[item].analogue}
                                                </TableCell>
                                                <TableCell
                                                    key={uuidv4()}
                                                    align="right"
                                                >
                                                    {aboutFilm[item].value}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className="rating-setings">
                        <Typography variant="h5" gutterBottom>
                            Рейтинг фильма
                        </Typography>
                        <div className="body">
                            <div className="rating">
                                <Typography variant="h2">{estimate}</Typography>
                                {/* <Typography variant="subtitle1">
                                    {rating.views}
                                </Typography> */}
                            </div>
                        </div>
                    </div>
                    <div className="comments">
                        <Typography variant="h5" gutterBottom>
                            Комментарии
                        </Typography>

                        <div className="devider"></div>
                        <div className="list">
                            {comments.map(comment => (
                                <ItemComments
                                    key={uuidv4()}
                                    name={comment.userName}
                                    text={comment.text}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="rating">
                    <Typography variant="h2">{estimate}</Typography>
                    {/* <Typography variant="subtitle1">{rating.views}</Typography> */}
                </div>
            </div>
        </>
    );
    return (
        <div className="kinoPage">
            <KinoPage formPage={formPage} />
        </div>
    );
};

export default KinoPageVisitor;
