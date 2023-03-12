import axios from 'axios';

import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from 'shared/const/localStorage';

export const $api = axios.create({
    baseURL: __API__,
    withCredentials: true,
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = `Bearer ${localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY)}` || '';
    }
    return config;
});
