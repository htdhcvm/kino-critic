import { axiosInstanceVisitor, axiosInstanceUser } from '@axios';
import axios from 'axios';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import jwt_decode from 'jwt-decode';

const initialState = [];

const getCommentsOnIdUser = comments => {
    return { type: 'comments/getComments', payload: comments };
};

const addComment = comment => {
    return { type: 'comments/addComment', payload: comment };
};

export default function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case 'comments/getComments': {
            return [...action.payload];
        }
        case 'comments/addComment': {
            return [...state, action.payload];
        }

        default:
            return state;
    }
}

export function requestCommentsOnIdKinoFilm(id) {
    return async function requestCommentsOnIdKinoFilmThunk(dispatch, useState) {
        const response = await axiosInstanceVisitor.get(
            `/api/getCommentsPost/${id}`,
        );

        console.log(response);
        dispatch(getCommentsOnIdUser(response.data));
    };
}

export function requestAddCommentOnId(id_kino, text_comment, accessToken) {
    return async function requestCommentsOnIdKinoFilmThunk(dispatch, useState) {
        const expireToken = jwt_decode(accessToken).exp;

        const currentTime = new Date().getTime();
        const tmp = '' + currentTime;

        const compareTime = +tmp.substring(0, tmp.length - 3);

        const fp = await FingerprintJS.load();
        const result = await fp.get();
        const visitorId = result.visitorId;

        if (expireToken < compareTime) {
            return axios.post('http://localhost:3005/refresh-tokens', {
                accessToken: accessToken,
                fingerPrint: visitorId,
            });
        } else {
            const response = await axiosInstanceUser.post(`/api/writeComment`, {
                accessToken,
                id_kino,
                text_comment,
            });

            console.log(response.data);
            dispatch(addComment(response.data));
        }
    };
}

// todo
