import axios from 'axios';
import { BACKEND_BASE_URL } from '../constants/constants';

const APIs = {
    getReport: function (startDate, endDate) {
        const endpoint = new URL('report', BACKEND_BASE_URL);
        endpoint.searchParams.append('startDate', startDate);
        endpoint.searchParams.append('endDate', endDate);
        return axios.get(endpoint);
    },
    getApp: function () {
        const endpoint = new URL('apps', BACKEND_BASE_URL);
        return axios.get(endpoint);
    },
};

export default APIs;
