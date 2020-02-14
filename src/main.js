import Vue from 'vue';
import VueRouter from 'vue-router';
import VueX from 'vuex';
import App from './app.component';
import { router } from './app.router';
import authenticationStore from './authentication/store/authentication.store';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueX);

require('./shared/shared.module');

const store = new VueX.Store({
    modules: {
        authentication: authenticationStore
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
