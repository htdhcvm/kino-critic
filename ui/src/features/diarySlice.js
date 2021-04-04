import { axiosInstanceUser } from '@axios';

const initialState = {
    favorites: [],
    bookmarks: [],
};

const getFavorites = favorites => {
    return { type: 'diary/getFavorites', payload: favorites };
};

const getBookmarks = bookmarks => {
    return { type: 'diary/getBookmarks', payload: bookmarks };
};

export default function diaryReducer(state = initialState, action) {
    switch (action.type) {
        case 'diary/getFavorites': {
            return { ...state, favorites: [...action.payload] };
        }
        case 'diary/getBookmarks': {
            return { ...state, bookmarks: [...action.payload] };
        }
        case 'diary/addNewFavorite': {
            return { ...state };
        }
        case 'diary/addNewBookmark': {
            return { ...state };
        }
        case 'diary/deleteFavorites': {
            return { ...state };
        }
        case 'diary/deleteBookmarks': {
            return { ...state };
        }

        default:
            return state;
    }
}

export function requestGetBookmarks(accessToken) {
    return async function requestGetBookmarksThunk(dispatch, getState) {
        const response = await axiosInstanceUser.get(
            `/api/getBookmarks/${accessToken}`,
        );

        dispatch(getBookmarks(response.data));
    };
}

export function requestGetFavorites(accessToken) {
    return async function requestGetFavoritesThunk(dispatch, getState) {
        const response = await axiosInstanceUser.get(
            `/api/getFavorites/${accessToken}`,
        );

        dispatch(getFavorites(response.data));
    };
}
