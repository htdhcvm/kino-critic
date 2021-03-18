import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './Manager.scss';

const Manager = () => {
    return (
        <div className="Manager">
            <form>
                <div className="title">
                    <TextField id="standard-basic" label="Заголовок" />
                </div>
                <div className="review">
                    <TextField id="standard-basic" label="Обзор" />
                </div>
                <div className="year">
                    <TextField id="standard-basic" label="Год" />
                </div>
                <div className="city">
                    <TextField id="standard-basic" label="Город" />
                </div>
                <div className="genre">
                    <TextField id="standard-basic" label="Жанр" />
                </div>
                <div className="slogan">
                    <TextField id="standard-basic" label="Слоган" />
                </div>
                <div className="director">
                    <TextField id="standard-basic" label="Режисер" />
                </div>
                <div className="scenario">
                    <TextField id="standard-basic" label="Сценарий" />
                </div>
                <div className="producer">
                    <TextField id="standard-basic" label="Продюсер" />
                </div>
                <div className="operator">
                    <TextField id="standard-basic" label="Оператор" />
                </div>
                <div className="composer">
                    <TextField id="standard-basic" label="Композитор" />
                </div>
                <div className="painter">
                    <TextField id="standard-basic" label="Художник" />
                </div>
                <div className="mounting">
                    <TextField id="standard-basic" label="Монтаж" />
                </div>
                <div className="budget">
                    <TextField id="standard-basic" label="Бюджет" />
                </div>
                <div className="feesUs">
                    <TextField id="standard-basic" label="Сборы в США" />
                </div>
                <div className="feesWorld">
                    <TextField id="standard-basic" label="Сборы в мире" />
                </div>
                <div className="watchers">
                    <TextField id="standard-basic" label="Зрители" />
                </div>
                <div className="premiereRf">
                    <TextField id="standard-basic" label="Премьера в России" />
                </div>
                <div className="premiereWorld">
                    <TextField id="standard-basic" label="Премьера в мире" />
                </div>
                <div className="releaseRf">
                    <TextField id="standard-basic" label="Ре-релиз" />
                </div>
                <div className="releaseDvd">
                    <TextField id="standard-basic" label="Релиз на DVD" />
                </div>
                <div className="age">
                    <TextField id="standard-basic" label="Возраст" />
                </div>
                <div className="reitingMPAA">
                    <TextField id="standard-basic" label="Рейтинг MPAA" />
                </div>
                <div className="time">
                    <TextField id="standard-basic" label="Время" />
                </div>
                <div className="photo">
                    <input type="file" />
                </div>
                <Button variant="contained" color="primary">
                    Добавить манагера
                </Button>
            </form>
        </div>
    );
};

export default Manager;
