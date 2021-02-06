<template>
    <b-container v-bind="{ fluid }" v-on="$listeners">
        <slot />
    </b-container>
</template>

<script>
export default {
    name: 'LContainer',
    props: ['fluid'],
};
</script>
