<template>
    <b-form-input
        v-bind="{ placeholder, size, value, trim, min, max, number, disabled }"
        v-on="$listeners"
    />
</template>

<script>
export default {
    name: 'LFormInput',
    props: [
        'placeholder',
        'value',
        'trim',
        'size',
        'min',
        'max',
        'step',
        'number',
        'disabled',
    ],
};
</script>
