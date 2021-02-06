<template>
    <b-input
        v-bind="{
            readonly,
            value,
            type,
            placeholder,
            maxlength,
            required,
            autofocus,
            state,
            ariaDescribedby,
        }"
        v-on="$listeners"
    />
</template>

<script>
export default {
    name: 'LInput',
    props: [
        'readonly',
        'value',
        'type',
        'placeholder',
        'maxlength',
        'required',
        'autofocus',
        'state',
        'ariaDescribedby',
    ],
};
</script>
