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
import MQ from 'vue-match-media/src'
Vue.use(MQ)


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



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
   mq: {
    phone: '(max-width: 768px)',
    tablet: '(max-width: 1024px)',
    desktop: '(min-width: 1024px)'
   }
})
