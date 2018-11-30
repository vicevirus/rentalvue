// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import * as VueGoogleMaps from "vue2-google-maps"
import Vuetify from 'vuetify'
import VueStripeCheckout from 'vue-stripe-checkout';

Vue.use(VueStripeCheckout, 'pk_test_7LrVtQ76r54ZOhMHhNYR5zpY')

Vue.use(Vuetify)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBlHIftHg90UMkPATgRgukuoeBFMcdkR5Q",
    libraries: "places" // necessary for places input
  }
})


Vue.use(ElementUI)

Vue.use(BootstrapVue)

Vue.use(SuiVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
