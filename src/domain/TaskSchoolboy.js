import { createGuid } from '@/utils/utils';

export default class TaskSchoolboy {

    constructor(data = {}) {
        this.id = data.id || createGuid();
        this.name = data.name || null;
        this.description = data.description || null;
        this.bestResult = data.bestResult || null;
    }
}