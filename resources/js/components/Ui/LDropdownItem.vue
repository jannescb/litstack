<template>
    <b-dropdown-item v-bind="{ active }" v-on="$listeners">
        <slot />
    </b-dropdown-item>
</template>

<script>
export default {
    name: 'LDropdownItemButton',
    props: [
        'active',
        // ... -> read bootstrap vue docs
    ],
};
</script>
