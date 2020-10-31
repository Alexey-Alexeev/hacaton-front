import { createGuid } from '@/utils/utils';

export default class TrySchoolboy {

    constructor(data = {}) {
        this.id = data.id || createGuid();
        this.taskId = data.taskId || null;
        this.schoolboyId = data.schoolboyId || null;
        this.code = data.code || null;
        this.input = data.input || null;
        this.output = data.output || null;
        this.result = data.result || null;
        this.tryNumber = data.tryNumber || null;
    }
}