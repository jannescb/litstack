<template>
    <b-form-checkbox v-bind="bindings" v-on="$listeners">
        <slot />
    </b-form-checkbox>
</template>

<script>
export default {
    name: 'LFormCheckbox',
    props: ['name', 'value', 'disabled', 'switch'],
    data() {
        return {
            bindings: {
                value: this.value,
                name: this.name,
                disabled: this.disabled,
                switch: this.switch,
            },
        };
    },
};
</script>
