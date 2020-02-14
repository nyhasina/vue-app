<template src="./form-field.component.html">
</template>

<script>
    import uuid from '../../helpers/uuid.helper';

    const props = {
        id: {
            type: String,
            default: uuid
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: String,
        label: String,
        value: String
    };

    export default {
        name: 'form-field',
        props
    };
</script>

<style src="./form-field.component.css" scoped>
</style>