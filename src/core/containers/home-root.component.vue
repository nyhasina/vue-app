<template>
    <router-view></router-view>
</template>

<script>
    import { isUserSignedGuard } from '../guards/authentication.guard';

    export default {
        name: 'HomeRoot',
        beforeRouteEnter: isUserSignedGuard
    };
</script>

<style scoped>

</style>