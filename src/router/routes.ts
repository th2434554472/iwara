// 对外暴露路由配置
export const constantRoutes =  [
    {
        // 主页
        path: '/',
        component: () => import('@/layout/index.vue'),
        name: 'index',
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('@/views/home/index.vue'),
                name: 'home',
                meta: {
                    title: '首页',
                    icon: 'HomeFilled'
                }
            }
        ]
    }
]