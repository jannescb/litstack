<template>
    <b-container v-bind="{ target, delay }" v-on="$listeners">
        <slot />
    </b-container>
</template>

<script>
export default {
    name: 'LTooltip',
    props: ['target', 'delay'],
};
</script>
