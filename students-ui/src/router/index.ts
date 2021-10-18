import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ListStudent from "../views/ListStudent.vue";
import CreateStudent from "../views/CreateStudent.vue";
import EditStudent from "../views/EditStudent.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "ListStudent",
    component: ListStudent,
  },
  {
    path: "/create",
    name: "CreateStudent",
    component: CreateStudent,
  },
  {
    path: "/edit/:id",
    name: "EditStudent",
    component: EditStudent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
