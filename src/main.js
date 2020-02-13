import { camelCase, upperFirst } from 'lodash';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import { coreRoutingModule } from './core/core-routing.module';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const requireComponent = require.context(
    './shared/components',
    false,
    /(.)+\.component\.(.)+/
);

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = upperFirst(
        camelCase(
            // Gets the file name regardless of folder depth
            fileName
                .split('/')
                .pop()
                .replace(/(\.\w+){2}$/, '')
        )
    );
    Vue.component(
        componentName,
        componentConfig.default || componentConfig
    );
});

new Vue({
    router: coreRoutingModule,
    render: h => h(App)
}).$mount('#app');

