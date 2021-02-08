<template>
    <b-list-group-item v-bind="{ href, active }" v-on="$listeners">
        <slot />
    </b-list-group-item>
</template>

<script>
export default {
    name: 'LListGroupItem',
    props: ['href', 'active'],
};
</script>
