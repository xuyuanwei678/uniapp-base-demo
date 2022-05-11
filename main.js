import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

//uview UI
import uView from "uview-ui";
Vue.use(uView);
//uview UI end

//uview store
import store from './store'
let vuexStore = require('./store/$u.mixin.js')
Vue.mixin(vuexStore)

//uview store end

const app = new Vue({
	store,
    ...App
})
app.$mount()

// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif