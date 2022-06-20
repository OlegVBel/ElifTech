import Vue from "vue"
import Router from "vue-router"

import FirstPage from "./index"
import SecondPage from "./second-page"

Vue.use(Router);

let router = new Router({
  routes:[
    {
      path: "/",
      name: "first-page",
      component: FirstPage
    },
    {
      path: "/second-page",
      name: "second-page",
      component: SecondPage
    }
  ]
})

export default router;
