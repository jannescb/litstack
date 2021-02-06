<template>
    <b-input-group
        v-bind="{
            size,
            label,
            state,
            labelFor,
        }"
        v-on="$listeners"
    >
        <slot />
    </b-input-group>
</template>

<script>
export default {
    name: 'LInputGroup',
    props: ['size', 'state', 'label', 'labelFor'],
};
</script>
