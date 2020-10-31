export default [
    {
        path: '/',
        name: 'login',
        component: () => import('../pages/login/Login'),
    },
    {
        path: '/schoolboy',
        name: 'schoolboy',
        component: () => import('../pages/schoolboy/TaskLayout'),
    },
]