import AuthenticationActionTypes from './authentication.action-types';
import AuthenticationMutationTypes from './authentication.mutation-types';

const axios = require('axios').default;

export default {
    [AuthenticationActionTypes.SIGN_IN]({ commit }, payload) {
        commit(AuthenticationMutationTypes.SIGN_IN, payload);
        axios.post('https://reqres.in/api/login', payload)
            .then((response) => {
                const data = {
                    user: payload,
                    token: response.data.token
                };
                commit(AuthenticationMutationTypes.SIGN_IN_SUCCESS, data);
            })
            .catch(error => commit(AuthenticationMutationTypes.SIGN_IN_FAILED, error));

    }
};