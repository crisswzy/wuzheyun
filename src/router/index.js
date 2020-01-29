import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/posts",
    name: "posts",
    component: () => import(/* webpackChunkName: "posts" */ "../views/Posts.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/post/:title",
    name: "post",
    component: () => import(/* webpackChunkName: "post" */ "../views/Post.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
