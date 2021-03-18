import React from 'react';

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

import Header from '../Header/Header';
import ItemComments from '../ItemComments/ItemComments';

const KinoPage = () => {
    return (
        <div className="kinoPage">
            <Header />
            <div className="body-kino">
                <div className="photo">
                    <img src={img} />
                </div>
                <div className="main-content">
                    <Typography variant="h2" gutterBottom>
                        Большой куш
                    </Typography>

                    <div className="review">
                        <Typography variant="h5" gutterBottom>
                            Обзор
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Четырехпалый Френки должен был переправить краденый
                            алмаз из Англии в США своему боссу Эви, но, сделав
                            ставку на подпольный боксерский поединок, попадает в
                            круговорот весьма нежелательных событий. Вокруг него
                            и его груза разворачивается сложная интрига с
                            участием множества колоритных персонажей лондонского
                            дна — русского гангстера, троих незадачливых
                            грабителей, хитрого боксера и угрюмого громилы
                            грозного мафиози. Каждый норовит в одиночку сорвать
                            большой куш.
                        </Typography>
                    </div>
                    <div className="about">
                        <Typography variant="h5" gutterBottom>
                            О фильме
                        </Typography>

                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            name
                                        </TableCell>
                                        <TableCell align="right">
                                            calories
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            name
                                        </TableCell>
                                        <TableCell align="right">
                                            calories
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            name
                                        </TableCell>
                                        <TableCell align="right">
                                            calories
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            name
                                        </TableCell>
                                        <TableCell align="right">
                                            calories
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            name
                                        </TableCell>
                                        <TableCell align="right">
                                            calories
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            name
                                        </TableCell>
                                        <TableCell align="right">
                                            calories
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            name
                                        </TableCell>
                                        <TableCell align="right">
                                            calories
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            name
                                        </TableCell>
                                        <TableCell align="right">
                                            calories
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            name
                                        </TableCell>
                                        <TableCell align="right">
                                            calories
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            name
                                        </TableCell>
                                        <TableCell align="right">
                                            calories
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            name
                                        </TableCell>
                                        <TableCell align="right">
                                            calories
                                        </TableCell>
                                    </TableRow>
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
                                <Typography variant="h2">8.649</Typography>
                                <Typography variant="subtitle1">
                                    375 595
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
                            <ItemComments name="user_1" text="lorem lorem" />
                            <ItemComments name="user_2" text="lorem lorem" />
                            <ItemComments name="user_3" text="lorem lorem" />
                            <ItemComments name="user_4" text="lorem lorem" />
                        </div>
                    </div>
                </div>
                <div className="rating">
                    <Typography variant="h2">8.6</Typography>
                    <Typography variant="subtitle1">375к</Typography>
                </div>
            </div>
        </div>
    );
};

export default KinoPage;
