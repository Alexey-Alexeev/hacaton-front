import axios from 'axios';
import TrySchoolboy from "@/domain/TrySchoolboy";

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
    },

    async getAllTries(schoolboyId, taskId) {
        const response = await axios.get(`try/${schoolboyId}?taskId=${taskId}`);
        if (response && response.data) {
            return response.data.map(tr => new TrySchoolboy(tr));
        }
    },
    async saveTry(trySchoolboy) {
        const response = await axios.post(`try/save`, trySchoolboy);
        if (response && response.data) {
            return new TrySchoolboy(response.data);
        }
    }
};