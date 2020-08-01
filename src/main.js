import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from  '@/store'
import vuetify from '@/plugins/vuetify'
import VueFbCustomerChat from 'vue-fb-customer-chat'
import VueFullpage from 'fullpage-vue' 


Vue.use(VueFbCustomerChat, {
  page_id: '106304557778712', //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})

Vue.use(VueFullpage)

Vue.config.productionTip = false

import 'fullpage-vue/src/fullpage.css'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app")
