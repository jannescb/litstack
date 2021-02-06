<template>
    <b-list-group-item v-bind="{ flush }" v-on="$listeners">
        <slot />
    </b-list-group-item>
</template>

<script>
export default {
    name: 'LListGroupItem',
    props: ['flush'],
};
</script>
