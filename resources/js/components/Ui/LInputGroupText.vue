<template>
    <b-input-group-text v-on="$listeners">
        <slot />
    </b-input-group-text>
</template>

<script>
export default {
    name: 'LInputGroupText',
    props: [],
};
</script>
