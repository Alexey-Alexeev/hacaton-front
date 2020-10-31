import { createGuid } from '@/utils/utils';

export default class User {

    constructor(data = {}) {
        this.id = data.id || createGuid()
        this.login = data.login || null;
        this.role = ROLE[data.role] || null;
    }

}

const ROLE = {
    SCHOOLBOY: 'SCHOOLBOY',
    TEACHER: 'TEACHER',
};
