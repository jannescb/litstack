<template>
    <b-col v-bind="{ col, xs, sm, md, lg, xl }" v-on="$listeners">
        <slot />
    </b-col>
</template>

<script>
export default {
    name: 'LCol',
    props: ['col', 'xs', 'sm', 'md', 'lg', 'xl'],
};
</script>
