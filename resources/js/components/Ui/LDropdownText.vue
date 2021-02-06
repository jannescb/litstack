<template>
    <b-dropdown-text v-on="$listeners">
        <slot />
    </b-dropdown-text>
</template>

<script>
export default {
    name: 'LDropdownText',
    props: [],
};
</script>
