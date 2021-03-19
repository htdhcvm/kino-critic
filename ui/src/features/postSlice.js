import axios from '@axios';

const initialState = {
    title: {},
    review: {},
    rating: {},
};

const getPost = post => {
    return { type: 'post/getPost', payload: post };
};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case 'post/getPost': {
            return {
                ...state,
                title: {
                    ...action.payload.title,
                },
                review: {
                    ...action.payload.review,
                },
                rating: {
                    ...action.payload.rating,
                },
            };
        }

        default:
            return state;
    }
}

export function requestKinoData(id) {
    return async function requestKinoDataThunk(dispatch, useState) {
        const response = await axios.get('/api/film');
        const data = response.data;
        dispatch(getPost(data));
    };
}
