import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

import './KinoPageUser.scss';
import KinoPage from '../KinoPage/KinoPage';

import {
    requestKinoData,
    requestEstimateFilm,
    requestGetDiarysStatus,
    requestAddBookmarks,
    requestAddFavorites,
    requestDeleteBookmarks,
    requestDeleteFavorites,
} from '@features/postSlice';

import {
    requestCommentsOnIdKinoFilm,
    requestAddCommentOnId,
} from '@features/commentsSlice';

import Header from '../Header/Header';
import ItemComments from '../ItemComments/ItemComments';

const KinoPageUser = (...rest) => {
    let { id } = useParams();
    const [textComment, setTextComment] = useState('');
    const [valueEstimate, setValueEstimate] = useState('');

    const dispatch = useDispatch();

    const title = useSelector(state => state.post.title);
    const photo = useSelector(state => state.post.photo);
    const review = useSelector(state => state.post.review);
    const estimate = useSelector(state => state.post.estimate);
    const aboutFilm = useSelector(state => state.post.aboutFilm);

    const favoriteState = useSelector(
        state => state.post.diaryesState.favorite,
    );

    const bookmarkState = useSelector(
        state => state.post.diaryesState.bookmark,
    );

    const comments = useSelector(state => state.comments);

    const accessToken = useSelector(state => state.user.user.accessToken);

    useEffect(() => {
        dispatch(requestKinoData(id));
        dispatch(requestCommentsOnIdKinoFilm(id));
        dispatch(requestGetDiarysStatus(accessToken, id));
    }, []);

    const handleAddComment = () => {
        if (textComment.trim().length > 0)
            dispatch(requestAddCommentOnId(id, textComment, accessToken));
    };

    const handleEstimateFilm = () => {
        if (valueEstimate.trim().length > 0)
            dispatch(requestEstimateFilm(id, valueEstimate, accessToken));
    };

    const handleDeleteFavorite = () => {
        dispatch(requestDeleteFavorites(accessToken, id));
    };

    const handleDeleteBookmark = () => {
        dispatch(requestDeleteBookmarks(accessToken, id));
    };

    const handleAddFavorite = () => {
        dispatch(requestAddFavorites(accessToken, id));
    };

    const handleAddBookmark = () => {
        dispatch(requestAddBookmarks(accessToken, id));
    };

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
                    <div className="actionDiaris">
                        <div className="item">
                            {favoriteState === undefined ? (
                                <CircularProgress />
                            ) : favoriteState ? (
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleDeleteFavorite}
                                >
                                    Удалить фаворита
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleAddFavorite}
                                >
                                    Добавить фаворита
                                </Button>
                            )}
                        </div>
                        <div className="item">
                            {bookmarkState === undefined ? (
                                <CircularProgress />
                            ) : bookmarkState ? (
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleDeleteBookmark}
                                >
                                    Удалить заметку
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleAddBookmark}
                                >
                                    Добавить заметку
                                </Button>
                            )}
                        </div>
                    </div>

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
                            <div className="star">
                                <TextField
                                    id="outlined-basic"
                                    label="Оценка"
                                    variant="outlined"
                                    type="number"
                                    onChange={e =>
                                        setValueEstimate(e.target.value)
                                    }
                                />
                                <Button
                                    className="estimate"
                                    variant="contained"
                                    color="primary"
                                    onClick={handleEstimateFilm}
                                >
                                    Оценить
                                </Button>
                            </div>
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
                        <div className="body-comments">
                            <textarea
                                onChange={e => setTextComment(e.target.value)}
                                placeholder="Текст комментария сюда пиши"
                            ></textarea>
                            <Button
                                className="max-width"
                                variant="contained"
                                color="secondary"
                                onClick={handleAddComment}
                            >
                                Написать
                            </Button>
                        </div>

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
                </div>
            </div>
        </>
    );

    return (
        <div className="KinoPageUser">
            <KinoPage formPage={formPage} />
        </div>
    );
};

export default KinoPageUser;
{
    /*  */
}

// Добавить в заметку
// Добавить в фабориты
