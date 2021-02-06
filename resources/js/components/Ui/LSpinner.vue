<template>
    <b-spinner v-bind="{ variant, type, small, label }" v-on="$listeners">
        <slot />
    </b-spinner>
</template>

<script>
export default {
    name: 'LAlert',
    props: ['small', 'type', 'variant', 'label'],
};
</script>
