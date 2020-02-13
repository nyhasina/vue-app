<template>
    <div class="form-field">
        <label :for="id" v-if="!placeholder && label">{{ label }}</label>
        <input :type="type" :placeholder="placeholder" :id="id" :value="value"
               v-on:input="$emit('input', $event.target.value)">
    </div>
</template>

<script>
    const uuid = function () {
        return 'xxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

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

<style scoped>
</style>