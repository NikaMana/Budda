import Vue from 'vue'
import routes from "@/router/routes";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
    next();
});

export default router;