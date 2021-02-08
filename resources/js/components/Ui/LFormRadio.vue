<template>
    <b-form-radio v-bind="{ checked }" v-on="$listeners">
        <slot />
    </b-form-radio>
</template>

<script>
export default {
    name: 'LFormRadio',
    props: ['checked'],
};
</script>
