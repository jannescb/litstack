<template>
    <b-overlay
        v-bind="{ show, rounded, opacity, spinnerVariant, spinnerType }"
        v-on="$listeners"
    >
        <slot />
    </b-overlay>
</template>

<script>
export default {
    name: 'LOverlay',
    props: ['show', 'rounded', 'opacity', 'spinnerVariant', 'spinnerType'],
};
</script>
