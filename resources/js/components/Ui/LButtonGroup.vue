<template>
    <b-button-group
        v-bind="{ variant, size, split, text, splitVariant, href, disabled }"
        v-on="$listeners"
    >
        <slot />
    </b-button-group>
</template>

<script>
export default {
    name: 'LButtonGroup',
    props: [
        'variant',
        'size',
        'split',
        'splitVariant',
        'href',
        'disabled',
        'text',
    ],
};
</script>
