<template>
    <b-col v-bind="{ col, xs, sm, md, lg, xl }" v-on="$listeners">
        <slot />
    </b-col>
</template>

<script>
export default {
    name: 'LListGroup',
    props: ['col', 'xs', 'sm', 'md', 'lg', 'xl'],
};
</script>
