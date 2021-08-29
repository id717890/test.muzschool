import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { SET_CONFIG, SET_LOCALE_ACTION } from './store/types'
// import testConfig from './data/testRus'  // Пример конфига №1 (Rus)
import testConfig from './data/testRus2' // Пример конфига №2 (Rus)
// import testConfig from './data/testBrit' // Пример конфига №3 (Brit)

import i18n from './plugins/i18n'
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/app.scss'

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
  created() {
    // TODO здесь в идеале нужно вызывать метод API и получать с сервера JSON конфиг компонента
    // для подсовывания другого конфига в import раскоментировать любой из примеров
    this.$store.commit(SET_CONFIG, testConfig)
    this.$store.dispatch(SET_LOCALE_ACTION, 'en')
  },
}).$mount('#app')
