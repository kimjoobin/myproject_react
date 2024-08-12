import axios, {AxiosInstance} from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:9200/api/V1.0',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default axiosInstance;