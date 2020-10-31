export default [
    {
        path: '/',
        name: 'login',
        component: () => import('../pages/login/Login'),
    },
    {
        path: '/schoolboy',
        name: 'schoolboy',
        component: () => import('../pages/schoolboy/task-list/SchoolboyTaskList'),
    },
    {
        path: '/schoolboy/task/:id',
        name: 'schoolboy-task',
        component: () => import('../pages/schoolboy/task-execute/TaskLayout'),
    },
    {
        path: '/teacher',
        name: 'teacher',
        component: () => import('../pages/teacher/task-list/TeacherTaskList')
    },
    {
        path: '/teacher/task/:id?',
        name: 'teacher-task',
        component: () => import('../pages/teacher/task-crud/TeacherTask'),
    },
]