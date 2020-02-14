import VueX from 'vuex';
import authenticationStore from './authentication/store/authentication.store';

export const store = new VueX.Store({
    modules: {
        authentication: authenticationStore
    }
});
