import { combineReducers } from 'redux';

import postReducer from './features/postSlice';
import postsReducer from './features/postsSlice';
import userReducer from './features/userSlice';
import commentsReducer from './features/commentsSlice';
import diarySlice from './features/diarySlice';

const rootReducer = combineReducers({
    post: postReducer,
    posts: postsReducer,
    user: userReducer,
    comments: commentsReducer,
    diarys: diarySlice,
});

export default rootReducer;
