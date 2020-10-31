export default {
    SET_USER(state, user) {
        state.USER = user;
    },
    CLEAR_USER(state) {
        state.USER = null;
    },
    SET_SCHOOLBOY(state, schoolboy) {
        state.SCHOOLBOY = schoolboy;
    },
    CLEAR_SCHOOLBOY(state) {
        state.SCHOOLBOY = null;
    },
    SET_TEACHER(state, teacher) {
        state.TEACHER = teacher
    },
    SET_ACTIVE_TRY(state, taskTry) {
        state.ACTIVE_TRY = taskTry;
    },
    CLEAR_ACTIVE_TRY(state) {
        state.ACTIVE_TRY = {};
    },
};