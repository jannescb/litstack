<template>
    <b-checkbox
        v-bind="{
            ...bindings,
            value,
            name,
            disabled,
            indeterminate,
            uncheckedValue,
            checked,
        }"
        v-on="$listeners"
    >
        <slot />
    </b-checkbox>
</template>

<script>
export default {
    name: 'LCheckbox',
    props: [
        'name',
        'value',
        'disabled',
        'switch',
        'indeterminate',
        'uncheckedValue',
        'checked',
    ],
    data() {
        return {
            bindings: {
                switch: this.switch,
            },
        };
    },
};
</script>
