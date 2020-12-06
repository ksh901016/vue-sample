import Vue from 'vue'
import VueRouter from 'vue-router'
import Error from "../views/error/Error"

Vue.use(VueRouter);

const routeFileList = require.context("./views", true, /\.js$/);
let routes = [];

routeFileList.keys().forEach(key => {
  let fileName = key.split('.js')[0];
  let filePath = `./views/${fileName.split('/')[1]}`;
  const routePath = require(`${filePath}`);
  routes = routes.concat(routePath.default);
});
routes.push({path: '*', component: Error});


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
