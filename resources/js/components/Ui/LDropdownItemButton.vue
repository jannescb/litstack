<template>
    <b-dropdown-item-button v-bind="{ active }" v-on="$listeners">
        <slot />
    </b-dropdown-item-button>
</template>

<script>
export default {
    name: 'LDropdownItem',
    props: ['active'],
};
</script>
