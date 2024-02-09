import {createRouter, createWebHistory} from "vue-router"
import AnalyticsView from "../views/AnalyticsView.vue";
import ChatView from "../views/ChatView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'analytics',
            component: AnalyticsView
        },
        {
            path: "/chat",
            name: 'chat',
            component: ChatView
        }
    ]
})

export default router