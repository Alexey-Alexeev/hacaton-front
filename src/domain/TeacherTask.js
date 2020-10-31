import ClassSchoolboy from '@/domain/ClassSchoolboy';

export default class TeacherTask {

    constructor(data = {}) {
        this.id = data.id || null;
        this.teacherId = data.teacherId || null;
        this.name = data.name || null;
        this.description = data.description || null;
        this.input = data.input || null;
        this.output = data.output || null;
        this.classSchoolboyList= data.classSchoolboyList && data.classSchoolboyList.length > 0
            ? data.classSchoolboyList.map(cl => new ClassSchoolboy(cl))
            : []
    }
}