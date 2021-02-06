<template>
    <b-form-textarea
        v-bind="{
            placeholder,
            value,
            rows,
            maxlength,
            maxRows,
            state,
            readonly,
        }"
        v-on="$listeners"
    >
        <slot />
    </b-form-textarea>
</template>

<script>
export default {
    name: 'LFormTextarea',
    props: [
        'placeholder',
        'value',
        'maxRows',
        'rows',
        'maxlength',
        'state',
        'readonly',
    ],
};
</script>
