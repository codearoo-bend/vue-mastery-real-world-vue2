import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about-us",
    name: "about",
    alias: "/about-me" /* another option instead of redirect,
     but keeps the alias URL instead of replacing it. */,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/about",
    redirect: { name: "about" }, // using the named route to redirect to.
    // alternatively, could be: redirect: "/about-us"
  },
];

const router = new VueRouter({
  routes,
});

export default router;
