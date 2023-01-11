import {createWebHistory, createRouter} from "vue-router";
import NewsView from "../view/NewsView";
import AskView from "../view/AskView";
import JobsView from "../view/JobsView";

const routes = [
  {
    path: "/",
    redirect: "/news",
  },
  {
    path: "/news",
    component: NewsView,
  },
  {
    path: "/ask",
    component: AskView,
  },
  {
    path: "/jobs",
    component: JobsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
