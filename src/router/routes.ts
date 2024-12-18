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
    },
    {
        path: '/search',
        component: () => import('@/layout/index.vue'),
        name: 'search',
        children: [
            {
                path: '/search',
                component: () => import('@/views/search/index.vue'),
                meta: {
                    title: '搜索页',
                    icon: 'SearchFilled'
                }
            }
        ]
    }
]