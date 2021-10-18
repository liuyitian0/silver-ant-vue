import Vue from "vue";
import App from "./App";
import Vuex from "vuex";
import { TaskNode, TaskNodeStore } from "vue-task-node";
import "vue-task-node/dist/css/vnode.css";
Vue.use(TaskNode);
Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    TaskNodeStore
  }
});
/* eslint-disable no-new */
new Vue({
  store,
  render: h => h(App)
}).$mount("#app")
