<template src="./sign-in-form.component.html">
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

<style src="./sign-in-form.component.css" scoped></style>