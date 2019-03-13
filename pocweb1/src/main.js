// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/store'
import VueI18n from 'vue-i18n'
import messages from './locales/all.json';
import VModal from 'vue-js-modal'
 
Vue.use(VModal);
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: ['en', 'es'],
  fallbackLocale:'en',
  messages
})

Vue.prototype.bus = new Vue();
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
