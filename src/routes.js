import { createWebHistory ,createRouter} from "vue-router";
import Home from './components/Home.vue'
import login from './components/login.vue'
import Profile from "./Profile.vue";

const routes =[
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'login',
        path:'/login',
        component:login
    },
    {
        name:'profile',
        path:'/profile/:name',
        component:Profile
    }
];

const router =createRouter({
    history: createWebHistory(),
    routes
});
export default router;