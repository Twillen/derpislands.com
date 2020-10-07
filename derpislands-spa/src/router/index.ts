import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import About from "../views/About.vue";
import Updates from "../views/Updates.vue";
import Videos from "../views/Videos.vue";
import Twitch from "../views/Twitch.vue";
import Events from "../views/Events.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "About",
    component: About
  },
  {
    path: "/updates",
    name: "Updates",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Updates
  },
  {
    path: "/events",
    name: "Events",
    component: Events
  },
  {
    path: "/videos",
    name: "Videos",
    component: Videos
  },
  {
    path: "/videos/twitch",
    name: "twitch",
    component: Twitch
  },
  {
    path: "/videos/twitch/:channelName",
    name: "twitch-user",
    props: true,
    component: Twitch
  }
];

const router = new VueRouter({
  mode: process.env.NODE_ENV === "production"?"history":"hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
