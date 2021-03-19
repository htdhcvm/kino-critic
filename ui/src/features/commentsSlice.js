import axios from '@axios';

const initialState = [];

const getCommentsOnIdUser = comments => {
    return { type: 'comments/getComments', payload: comments };
};

export default function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case 'comments/getComments': {
            return [...action.payload];
        }

        default:
            return state;
    }
}

export function requestCommentsOnIdKinoFilm(id) {
    return async function requestCommentsOnIdKinoFilmThunk(dispatch, useState) {
        const response = await axios.get('/api/comments');
        const data = response.data;
        dispatch(getCommentsOnIdUser(data));
    };
}
