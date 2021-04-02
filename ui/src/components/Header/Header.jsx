import React, { useState } from 'react';

import './Header.scss';

import logo from '../../../assets/logo/logo-red.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './Header';

import { requestSearchPosts } from '@features/postsSlice';
const Header = () => {
    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();

    const isAuth = useSelector(state => state.user.authState);
    const loginUser = useSelector(state => state.user.user.login);

    const handleSearch = () => {
        if (searchInput.trim().length > 0)
            dispatch(requestSearchPosts(searchInput));
    };

    return (
        <div className="header">
            <Link to="/">
                <img className="logo" src={logo} />
            </Link>
            <Paper elevation={3} className="search-box">
                <InputBase
                    onChange={e => setSearchInput(e.target.value)}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'naked' }}
                />
                <SearchIcon className="searchIcon" onClick={handleSearch} />
            </Paper>
            {!isAuth ? <Link to="/authorization">Войти</Link> : loginUser}
        </div>
    );
};

export default Header;
