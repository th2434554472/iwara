import { defineStore } from "pinia";
import routes from '@/router/routes'

const useUserStore = defineStore('user',{
    state: () => {
        return {
            menuRoutes: routes
        }
    }
})

export default useUserStore;