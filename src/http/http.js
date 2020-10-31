import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/';

export default {
    getUser(login, password) {
        return axios.get(`user/?login=${login}&password=${password}`);
    },

    getSchoolboy(userId) {
        return axios.get(`schoolboy/${userId}`);
    },

    getTeacher(userId) {
        return axios.get(`teacher/${userId}`);
    }
};