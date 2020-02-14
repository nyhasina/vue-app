import Vue from 'vue';
import VueX from 'vuex';
import App from './app.component';
import { router } from './app.router';
import authenticationStore from './authentication/store/authentication.store';

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
