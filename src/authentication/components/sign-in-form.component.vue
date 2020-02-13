<template>
    <form>
        <form-field type="email" placeholder="E-mail address"></form-field>
        <form-field type="password" placeholder="Password"></form-field>
        <button>Sign in</button>
        <router-link to="./sign-up">Have already an account ?</router-link>
    </form>
</template>

<script>
    export default {
        name: 'AuthenticationForm'
    };
</script>

<style scoped>

</style>