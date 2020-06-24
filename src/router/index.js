import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contactus",
    name: "ContactUs",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactUs.vue")
  },
  {
    path: "/containers",
    name: "Containers",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Containers.vue")
  },
  {
    path: "/faqs",
    name: "FaQs",
    component: () => import(/* webpackChunkName: "about" */ "../views/FaQs.vue")
  },
  {
    path: "/serviceareas",
    name: "ServiceAreas",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ServiceAreas.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
