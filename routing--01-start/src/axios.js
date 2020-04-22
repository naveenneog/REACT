import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://jsonplaceholder.typicode.com'
    baseURL: 'http://localhost:8080/'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;