import axios from 'axios';
import TrySchoolboy from "@/domain/TrySchoolboy";
import ClassSchoolboy from "@/domain/ClassSchoolboy";

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
    },
    async getClassList() {
        const response = await axios.get('class-schoolboy/');
        return response && response.data ? response.data.map(cl => new ClassSchoolboy(cl)) : [];
    },
    async saveTask(taskTeacher) {
        const response = await axios.post(`task/save`, taskTeacher);
        return response && response.data;
    },
};