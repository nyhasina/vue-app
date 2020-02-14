import Vue from 'vue';
import VueRouter from 'vue-router';
import VueX from 'vuex';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueX);

require('./shared/shared.module');
require('./app.module');
