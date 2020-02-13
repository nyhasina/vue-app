import AuthenticationActionTypes from './authentication.action-types';
import AuthenticationMutationTypes from './authentication.mutation-types';

export default {
    [AuthenticationActionTypes.SIGN_IN]({ commit }, payload) {
        commit(AuthenticationMutationTypes.SIGN_IN, payload);
    },
};