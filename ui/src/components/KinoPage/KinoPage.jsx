import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './KinoPage.scss';

import img from '../../../assets/ezgif-3-f6d1d3a74aff.jpg';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { requestKinoData } from '@features/postSlice';
import { requestCommentsOnIdKinoFilm } from '@features/commentsSlice';

import Header from '../Header/Header';
import ItemComments from '../ItemComments/ItemComments';

const KinoPage = () => {
    let { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestKinoData(id));
        dispatch(requestCommentsOnIdKinoFilm(id));
    }, []);

    const title = useSelector(state => state.post.title);
    const review = useSelector(state => state.post.review);
    const rating = useSelector(state => state.post.rating);
    const comments = useSelector(state => state.comments);

    return (
        <div className="kinoPage">
            <Header />
            <div className="body-kino">
                <div className="photo">
                    <img src={img} />
                </div>
                <div className="main-content">
                    <Typography variant="h2" gutterBottom>
                        {title.title}
                    </Typography>

                    <div className="review">
                        <Typography variant="h5" gutterBottom>
                            Обзор
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {title.review}
                        </Typography>
                    </div>
                    <div className="about">
                        <Typography variant="h5" gutterBottom>
                            О фильме
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableBody>
                                    {Object.keys(review).map(item => {
                                        return (
                                            <TableRow key={uuidv4()}>
                                                <TableCell
                                                    key={uuidv4()}
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {review[item].analogue}
                                                </TableCell>
                                                <TableCell
                                                    key={uuidv4()}
                                                    align="right"
                                                >
                                                    {review[item].value}
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
                            <div className="star">stars</div>
                            <div className="rating">
                                <Typography variant="h2">
                                    {rating.rating}
                                </Typography>
                                <Typography variant="subtitle1">
                                    {rating.views}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className="comments">
                        <Typography variant="h5" gutterBottom>
                            Комментарии
                        </Typography>
                        <div className="body-comments">
                            <textarea placeholder="Текст комментария сюда пиши"></textarea>
                            <Button
                                className="max-width"
                                variant="contained"
                                color="secondary"
                            >
                                Написать
                            </Button>
                        </div>
                        <div className="devider"></div>
                        <div className="list">
                            {comments.map(comment => (
                                <ItemComments
                                    key={uuidv4()}
                                    name={comment.name}
                                    text={comment.text}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="rating">
                    <Typography variant="h2">{rating.rating}</Typography>
                    <Typography variant="subtitle1">{rating.views}</Typography>
                </div>
            </div>
        </div>
    );
};

export default KinoPage;
