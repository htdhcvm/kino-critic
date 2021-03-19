import { combineReducers } from 'redux';

import postReducer from './features/postSlice';
import postsReducer from './features/postsSlice';
import userReducer from './features/userSlice';
import commentsReducer from './features/commentsSlice';

const rootReducer = combineReducers({
    post: postReducer,
    posts: postsReducer,
    user: userReducer,
    comments: commentsReducer,
});

export default rootReducer;
