<template src="./home-root.component.html"></template>

<script>
    import { isUserSignedGuard } from '../../guards/authentication.guard';

    export default {
        name: 'HomeRoot',
        beforeRouteEnter: isUserSignedGuard
    };
</script>

<style src="./home-root.component.css" scoped></style>