<template>
    <b-checkbox-group
        v-bind="{
            value,
            checked,
            optcheckedions,
            stacked,
        }"
        v-on="$listeners"
    >
        <slot />
    </b-checkbox-group>
</template>

<script>
export default {
    name: 'LCheckbox',
    props: ['value', 'checked', 'optcheckedions', 'stacked'],
};
</script>
