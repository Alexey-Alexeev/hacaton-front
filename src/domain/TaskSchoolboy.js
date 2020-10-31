import { createGuid } from '@/utils/utils';

export default class TaskSchoolboy {

    constructor(data = {}) {
        this.id = data.id || createGuid();
        this.name = data.name || null;
        this.description = data.description || null;
        this.input = data.input || null;
        this.output = data.output || null;
        this.bestResult = data.bestResult || 0;
    }
}