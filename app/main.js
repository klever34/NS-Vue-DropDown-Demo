import Vue from 'nativescript-vue'
import App from './components/App'
import store from './store';
Vue.registerElement("DropDown", () => require("nativescript-drop-down").DropDown);

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
