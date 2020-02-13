import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import { coreRoutingModule } from './core/core-routing.module';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  router: coreRoutingModule,
  render: h => h(App)
}).$mount('#app');
