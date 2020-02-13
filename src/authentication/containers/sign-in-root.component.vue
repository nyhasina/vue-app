<template>
    <div class="container">
        <sign-in-form v-on:sign-in="signIn"></sign-in-form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import SignInForm from '../components/sign-in-form.component';
    import AuthenticationActionTypes from '../store/authentication.action-types';

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

<style scoped>

</style>