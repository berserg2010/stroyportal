import Vue from 'vue'
import Base from './Base.vue'
import { store } from './store';


Vue.config.productionTip = false


new Vue({
  store,
  render: (h) => h(Base),
}).$mount('#root')
