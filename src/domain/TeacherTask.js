import ClassSchoolboy from '@/domain/ClassSchoolboy';
import { createGuid } from "@/utils/utils";

export default class TeacherTask {

    constructor(data = {}) {
        this.id = data.id || createGuid();
        this.teacherId = data.teacherId || null;
        this.name = data.name || null;
        this.description = data.description || '';
        this.input = data.input || null;
        this.output = data.output || null;
        this.classSchoolboyList= data.classSchoolboyList && data.classSchoolboyList.length > 0
            ? data.classSchoolboyList.map(cl => new ClassSchoolboy(cl))
            : []
    }
}