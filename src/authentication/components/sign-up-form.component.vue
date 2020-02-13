<template>
    <form>
        <input type="text" placeholder="E-mail address">
        <input type="password" placeholder="Password">
        <input type="password" placeholder="Confirm password">
        <button>Sign up</button>
        <router-link to="./sign-in">Don't have an account ?</router-link>
    </form>
</template>

<script>
    export default {
        name: 'SignUpForm'
    };
</script>

<style scoped>

</style>