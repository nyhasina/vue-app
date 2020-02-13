<template>
    <div class="container">
        <sign-in-form></sign-in-form>
    </div>
</template>

<script>
    import SignInForm from '../components/sign-in-form';

    export default {
        name: 'SignInRoot',
        components: {
            SignInForm
        }
    };
</script>

<style scoped>

</style>