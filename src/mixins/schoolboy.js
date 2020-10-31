import { mapActions } from 'vuex';

export default {
    methods: {
        async getSchoolboy() {
            let userId = null;
            if (this.USER) {
                userId = this.USER.id;
            }
            else if (localStorage.getItem('userId') && localStorage.getItem('role') === 'SCHOOLBOY') {
                userId = localStorage.getItem('userId');
            }
            await this.GET_SCHOOLBOY(userId);
        },
        ...mapActions(['GET_SCHOOLBOY']),
    }
};