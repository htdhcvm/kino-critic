import { axiosInstanceVisitor, axiosInstanceUser } from '@axios';

const getAllPosts = posts => {
    return { type: 'posts/getAll', payload: posts };
};

const searchPosts = posts => {
    return { type: 'posts/searchPosts', payload: posts };
};

const clearPosts = () => {
    return {
        type: 'posts/clearPosts',
    };
};

const initialState = [];

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case 'posts/getAll': {
            return [...action.payload];
        }

        case 'posts/searchPosts': {
            return [...action.payload];
        }

        case 'posts/clearPosts': {
            return [];
        }

        default:
            return state;
    }
}

export async function requestGetAllPosts(dispatch, getState) {
    const response = await axiosInstanceVisitor.get('/api/listFilms');
    dispatch(getAllPosts(response.data));
}

export function requestClearPosts(dispatch, getState) {
    dispatch(clearPosts());
}

export function requestSearchPosts(searchInput) {
    return async function requestSearchPostsThunk(dispatch, getState) {
        const response = await axiosInstanceVisitor.get(
            `/api/search/${searchInput}`,
        );

        console.log(response.data);
        dispatch(searchPosts(response.data));
    };
}

// axiosInstanceUser.get
