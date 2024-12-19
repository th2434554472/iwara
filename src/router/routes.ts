import Layout from '@/layout/index.vue';
import Home from '@/views/home/index.vue';
import Search from '@/views/search/index.vue';
import Link from '@/views/link/index.vue';
// 对外暴露路由配置
export default [
    {
        // 主页
        path: '/',
        component: Layout,
        name: 'index',
        redirect: '/home',
        meta: {
            title: Layout
        },
        children: [
            {
                path: '/home',
                component: Home,
                name: 'home',
                meta: {
                    title: '首页',
                    icon: 'HomeFilled',
                    hidden: false
                }
            },
            {
                path: '/search',
                component: Search,
                name: 'search',
                meta: {
                    title: '搜索页',
                    icon: 'SearchFilled',
                    hidden: false
                }
            },
            {
                path: '/link',
                component: Link,
                name: 'link',
                meta: {
                    title: 'リンクページ',
                    icon: 'SearchFilled',
                    hidden: false
                }
            }
        ]
    },
]