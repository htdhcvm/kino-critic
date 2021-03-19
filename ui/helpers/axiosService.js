import axios from 'axios';

const url =
    process.env.NODE_ENV === 'client'
        ? 'http://localhost:3001'
        : 'http://localhost:3000';

const axiosInstance = axios.create({
    baseURL: url,
    timeout: 3000,
});

export default axiosInstance;
