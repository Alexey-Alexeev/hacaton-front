export default [
    {
        path: '/',
        name: 'login',
        component: () => import('../pages/login/Login'),
    },
    {
        path: '/schoolboy',
        name: 'schoolboy',
        component: () => import('../pages/schoolboy/task-list/TaskList'),
    },
    {
        path: '/schoolboy/task/:id',
        name: 'schoolboy-task',
        component: () => import('../pages/schoolboy/task-execute/TaskLayout'),
    },
]