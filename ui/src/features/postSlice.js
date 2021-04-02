import { axiosInstanceVisitor, axiosInstanceUser } from '@axios';

const initialState = {
    title: '',
    photo: '',
    review: '',
    estimate: '',
    aboutFilm: {
        rating: {
            analogue: 'Рейтинг',
            value: '',
        },
        views: {
            analogue: 'Просмотры',
            value: '',
        },
        year: {
            analogue: 'Год',
            value: '',
        },
        city: {
            analogue: 'Город',
            value: '',
        },
        genre: {
            analogue: 'Жанр',
            value: '',
        },
        slogan: {
            analogue: 'Слоган',
            value: '',
        },
        director: {
            analogue: 'Директор',
            value: '',
        },
        scenario: {
            analogue: 'Сценарий',
            value: '',
        },
        producer: {
            analogue: 'Продюсер',
            value: '',
        },
        operator: {
            analogue: 'Оператор',
            value: '',
        },
        composer: {
            analogue: 'Композитор',
            value: '',
        },
        painter: {
            analogue: 'Художник',
            value: '',
        },
        mounting: {
            analogue: 'Монтаж',
            value: '',
        },
        budget: {
            analogue: 'Бюджет',
            value: '',
        },
        feesus: {
            analogue: 'Собрал в США',
            value: '',
        },
        feesworld: {
            analogue: 'Собрал в мире',
            value: '',
        },
        watchers: {
            analogue: 'Просмотров',
            value: '',
        },
        premiererf: {
            analogue: 'Премьера в РФ',
            value: '',
        },
        premiereworld: {
            analogue: 'Премьера в Мире',
            value: '',
        },
        releaserf: {
            analogue: 'Релиз в РФ',
            value: '',
        },
        releasedvd: {
            analogue: 'Релиз DVD',
            value: '',
        },
        age: {
            analogue: 'Допустимый возраст',
            value: '',
        },
        reitingmpaa: {
            analogue: 'Рейтинг MPAA',
            value: '',
        },
        time: {
            analogue: 'Время',
            value: '',
        },
    },
};

const getPost = post => {
    return { type: 'post/getPost', payload: post };
};

const updateEstimate = estimate => {
    return { type: 'post/updateEstimate', payload: estimate };
};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case 'post/updateEstimate': {
            return {
                ...state,
                estimate: +state.estimate + +action.payload,
            };
        }
        case 'post/getPost': {
            return {
                ...state,
                title: action.payload.title,
                photo: action.payload.photo,
                review: action.payload.review,
                estimate: action.payload.estimate,
                aboutFilm: {
                    ...state.aboutFilm,
                    rating: {
                        ...state.aboutFilm.rating,
                        analogue: 'Рейтинг',
                        value: action.payload.rating,
                    },
                    views: {
                        ...state.aboutFilm.views,
                        analogue: 'Просмотры',
                        value: action.payload.views,
                    },
                    year: {
                        ...state.aboutFilm.year,
                        analogue: 'Год',
                        value: action.payload.year,
                    },
                    city: {
                        ...state.aboutFilm.city,
                        analogue: 'Город',
                        value: action.payload.city,
                    },
                    genre: {
                        ...state.aboutFilm.genre,
                        analogue: 'Жанр',
                        value: action.payload.genre,
                    },
                    slogan: {
                        ...state.aboutFilm.slogan,
                        analogue: 'Слоган',
                        value: action.payload.slogan,
                    },
                    director: {
                        ...state.aboutFilm.director,
                        analogue: 'Директор',
                        value: action.payload.director,
                    },
                    scenario: {
                        ...state.aboutFilm.scenario,
                        analogue: 'Сценарий',
                        value: action.payload.scenario,
                    },
                    producer: {
                        ...state.aboutFilm.producer,
                        analogue: 'Продюсер',
                        value: action.payload.producer,
                    },
                    operator: {
                        ...state.aboutFilm.operator,
                        analogue: 'Оператор',
                        value: action.payload.operator,
                    },
                    composer: {
                        ...state.aboutFilm.composer,
                        analogue: 'Композитор',
                        value: action.payload.composer,
                    },
                    painter: {
                        ...state.aboutFilm.painter,
                        analogue: 'Художник',
                        value: action.payload.painter,
                    },
                    mounting: {
                        ...state.aboutFilm.mounting,
                        analogue: 'Монтаж',
                        value: action.payload.mounting,
                    },
                    budget: {
                        ...state.aboutFilm.budget,
                        analogue: 'Бюджет',
                        value: action.payload.budget,
                    },
                    feesus: {
                        ...state.aboutFilm.feesus,
                        analogue: 'Собрал в США',
                        value: action.payload.feesus,
                    },
                    feesworld: {
                        ...state.aboutFilm.feesworld,
                        analogue: 'Собрал в мире',
                        value: action.payload.feesworld,
                    },
                    watchers: {
                        ...state.aboutFilm.watchers,
                        analogue: 'Просмотров',
                        value: action.payload.watchers,
                    },
                    premiererf: {
                        ...state.aboutFilm.premiererf,
                        analogue: 'Премьера в РФ',
                        value: action.payload.premiererf,
                    },
                    premiereworld: {
                        ...state.aboutFilm.premiereworld,
                        analogue: 'Премьера в Мире',
                        value: action.payload.premiereworld,
                    },
                    releaserf: {
                        ...state.aboutFilm.releaserf,
                        analogue: 'Релиз в РФ',
                        value: action.payload.releaserf,
                    },
                    releasedvd: {
                        ...state.aboutFilm.releasedvd,
                        analogue: 'Релиз DVD',
                        value: action.payload.releasedvd,
                    },
                    age: {
                        ...state.aboutFilm.age,
                        analogue: 'Допустимый возраст',
                        value: action.payload.age,
                    },
                    reitingmpaa: {
                        ...state.aboutFilm.reitingmpaa,
                        analogue: 'Рейтинг MPAA',
                        value: action.payload.reitingmpaa,
                    },
                    time: {
                        ...state.aboutFilm.time,
                        analogue: 'Время',
                        value: action.payload.time,
                    },
                },
            };
        }

        default:
            return state;
    }
}

export function requestKinoData(id) {
    return async function requestKinoDataThunk(dispatch, useState) {
        const response = await axiosInstanceVisitor.get(
            `/api/getFilmPage/${id}`,
        );
        dispatch(getPost(response.data));
    };
}

export function requestEstimateFilm(id, estimate, accessToken) {
    return async function requestEstimateFilmThunk(dispatch, useState) {
        const response = await axiosInstanceUser.put('/api/estimateFilm', {
            estimate: estimate,
            id_film: id,
            accessToken: accessToken,
        });

        if (response.statusText === 'OK') dispatch(updateEstimate(estimate));
        console.log();
    };
}
