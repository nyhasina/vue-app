<template>
    <form>
        <form-field type="email" placeholder="E-mail address" v-model="email"></form-field>
        <form-field type="password" placeholder="Password" v-model="password"></form-field>
        <button @click.prevent="submit">Sign in</button>
        <router-link to="./sign-up">Have already an account ?</router-link>
    </form>
</template>

<script>
    export default {
        name: 'AuthenticationForm',
        data: () => ({
            email: '',
            password: ''
        }),
        methods: {
            submit: function () {
                const payload = {
                    email: this.$data.email,
                    password: this.$data.password
                };
                this.$emit('sign-in', payload);
            }
        }
    };
</script>

<style scoped>

</style>