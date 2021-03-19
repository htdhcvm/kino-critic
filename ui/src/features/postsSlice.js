import axios from '@axios';

const getAllPosts = posts => {
    return { type: 'posts/getAll', payload: posts };
};
const initialState = [];

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case 'posts/getAll': {
            return [...state, ...action.payload];
        }

        default:
            return state;
    }
}

export async function requestGetAllPosts(dispatch, getState) {
    console.log('a');
    const response = await axios.get('/api/films');
    const data = response.data;

    dispatch(getAllPosts(data));
}
