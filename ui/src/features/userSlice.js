import { axiosInstanceVisitor } from '@axios';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

const initialState = {
    user: {
        login: '',
        accessToken: '',
    },
    errorText: '',
    authState: false,
};

const authorization = ({ login, accessToken }) => {
    return { type: 'user/authorization', payload: { login, accessToken } };
};

const authorizationError = () => {
    return {
        type: 'user/authorizationError',
        payload: 'Login or password is wrong',
    };
};

const registration = login => {
    return {
        type: 'user/registration',
        payload: login,
    };
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'user/authorization': {
            return {
                ...state,
                user: {
                    ...state.user,
                    login: action.payload.login,
                    accessToken: action.payload.accessToken,
                },
                authState: true,
                errorText: '',
            };
        }

        case 'user/authorizationError': {
            return {
                ...state,
                errorText: action.payload,
                authState: false,
            };
        }

        case 'user/registration': {
            return {
                ...state,
                user: {
                    ...state.user,
                    login: action.payload,
                },
            };
        }
        default:
            return state;
    }
}

export function requestAuthorization(login, password) {
    return async function requestAuthorizationThunk(dispatch, getState) {
        try {
            const fp = await FingerprintJS.load();
            const result = await fp.get();
            const visitorId = result.visitorId;

            const response = await axiosInstanceVisitor.post(
                '/auth/login',
                {
                    login,
                    password,
                    fingerprint: visitorId,
                },
                { withCredentials: true },
            );
            dispatch(
                authorization({
                    login,
                    accessToken: response.data.accessToken,
                }),
            );
        } catch (error) {
            dispatch(authorizationError());
        }
    };
}

export function requestRegistration(login, password) {
    return async function requestRegistrationThunk(dispatch, getState) {
        try {
            const response = await axiosInstanceVisitor.post(
                '/api/registration',
                {
                    login,
                    password,
                },
            );

            console.log(response);
            if (response.data === 'OK') {
                dispatch(registration(login));
            }
        } catch (error) {
            console.log(error);
        }
    };
}
