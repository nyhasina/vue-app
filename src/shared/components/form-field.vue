<template>
    <div class="form-field">
        <label :for="id" v-if="!placeholder && label">{{ label }}</label>
        <input :type="type" :placeholder="placeholder" :id="id">
    </div>
</template>

<script>
    export default {
        name: 'form-field',
        props: {
            id: {
                type: String,
                default: function () {
                    return 'xxxx'.replace(/[xy]/g, function(c) {
                        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                    });
                }
            },
            type: {
                type: String,
                default: 'text'
            },
            placeholder: String,
            label: String
        }
    };
</script>

<style scoped>
</style>