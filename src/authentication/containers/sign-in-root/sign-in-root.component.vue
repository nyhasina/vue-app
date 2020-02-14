<template src="./sign-in-root.component.html">
</template>

<script>
    import { mapActions } from 'vuex';
    import SignInForm from '../../components/sign-in-form/sign-in-form.component';
    import AuthenticationActionTypes from '../../store/authentication.action-types';

    export default {
        name: 'SignInRoot',
        components: {
            SignInForm
        },
        methods: {
            ...mapActions([
                AuthenticationActionTypes.SIGN_IN
            ])
        }
    };
</script>

<style src="./sign-in-root.component.css" scoped></style>