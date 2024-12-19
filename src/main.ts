import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import router from "@/router";
// 引入全局样式
import './styles/index.scss'
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components'
import pinia from './stores';

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn
})
app.use(globalComponent);
app.use(router)
app.use(pinia)
app.mount('#app')
