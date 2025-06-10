import axios from 'axios';

const backendUrl = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
    baseURL: `${backendUrl}/api`,
    withCredentials: true,
});

export default api;
