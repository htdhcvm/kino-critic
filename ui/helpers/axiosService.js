import axios from 'axios';

const url =
    process.env.NODE_ENV === 'client'
        ? 'http://localhost:3001'
        : 'http://localhost:3000';

const axiosInstanceVisitor = axios.create({
    baseURL: url,
    timeout: 3000,
});

const axiosInstanceUser = axios.create({
    baseURL: url,
    timeout: 3000,
});

axiosInstanceUser.defaults.withCredentials = true;

export { axiosInstanceVisitor, axiosInstanceUser };
