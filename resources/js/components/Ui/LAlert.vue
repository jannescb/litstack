<template>
    <b-alert v-bind="{ variant, show }" v-on="$listeners">
        <slot />
    </b-alert>
</template>

<script>
export default {
    name: 'LAlert',
    props: ['variant', 'show'],
};
</script>
