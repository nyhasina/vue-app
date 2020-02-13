import AuthenticationMutationTypes from './authentication.mutation-types';

export default {
    [AuthenticationMutationTypes.SIGN_IN](state) {
        state.signingIn = true;
        state.signedIn = false;
    },
    [AuthenticationMutationTypes.SIGN_IN_FAILED](state, error) {
        state.signingIn = false;
        state.signedIn = false;
        state.signInError = error;
    },
    [AuthenticationMutationTypes.SIGN_IN_SUCCESS](state, { user, token }) {
        state.user = user;
        state.token = token;
        state.signingIn = false;
        state.signedIn = true;
    }
};