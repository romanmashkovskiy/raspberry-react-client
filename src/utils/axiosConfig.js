import axios from 'axios';
import toast from './toast';

export const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
});

export const setupAxiosInterceptors = store => {
    axiosClient.interceptors.request.use(config => {
        const token = localStorage.getItem('authToken');

        if (token !== null) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    }, (err) => {
        return Promise.reject(err);
    });

    axiosClient.interceptors.response.use(response => response, err => {
        if (err.response.status === 401) {
            toast.error('Session expired');
            // store.dispatch(logoutOnExpired());
        }

        return Promise.reject(err);
    });
};