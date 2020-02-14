import { camelCase, upperFirst } from 'lodash';
import Vue from 'vue';

const requireComponent = require.context(
    './components',
    true,
    /(.)+\.component\.(vue|js)/
);

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = upperFirst(
        camelCase(
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
