import Vue from 'vue'
import Base from './Base.vue'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(Base),
}).$mount('#root')
