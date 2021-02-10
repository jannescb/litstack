<template>
    <input
        class="w-full"
        v-bind="{
            readonly,
            value,
            type,
            placeholder,
            maxlength,
            required,
            autofocus,
            ariaDescribedby,
        }"
        @input="$emit('input', $event.target.value)"
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
