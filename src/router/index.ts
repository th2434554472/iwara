import {createRouter, createWebHashHistory} from "vue-router";
import routes from "./routes";

let router = createRouter({
    history: createWebHashHistory(),
    routes,
    // 滚动行为
    scrollBehavior(){
        return {
            top: 0,
            left: 0
        }
    }
})

export default router;