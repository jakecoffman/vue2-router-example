import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/Home";
import Other from "@/components/Other";
import OtherPicked from "@/components/OtherPicked";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    {
      path: "/other",
      component: Other,
      children: [{ path: "/other/:id", component: OtherPicked }]
    }
  ]
});
