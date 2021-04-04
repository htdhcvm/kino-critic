import React, { useState } from 'react';

import './Header.scss';

import logo from '../../../assets/logo/logo-red.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { requestSearchPosts } from '@features/postsSlice';

const Header = () => {
    const [searchInput, setSearchInput] = useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();

    const isAuth = useSelector(state => state.user.authState);
    const loginUser = useSelector(state => state.user.user.login);

    const handleSearch = () => {
        if (searchInput.trim().length > 0)
            dispatch(requestSearchPosts(searchInput));
    };

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
            {!isAuth ? (
                <Link to="/authorization">Войти</Link>
            ) : (
                <>
                    <Button
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        {loginUser} <ArrowDropDownIcon />
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <Link to="/bookmarks">
                            <MenuItem onClick={handleClose}>
                                <BookmarkIcon className="icons-menu-list" />{' '}
                                bookmarks
                            </MenuItem>
                        </Link>
                        <Link to="/favorites">
                            <MenuItem onClick={handleClose}>
                                <FavoriteIcon className="icons-menu-list" />{' '}
                                Favorites
                            </MenuItem>
                        </Link>
                        <MenuItem onClick={handleClose}>
                            <ExitToAppIcon className="icons-menu-list" />
                            Logout
                        </MenuItem>
                    </Menu>
                </>
            )}
        </div>
    );
};

export default Header;
