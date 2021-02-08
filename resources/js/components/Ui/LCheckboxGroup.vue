<template>
    <div>
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
    </div>
</template>

<script>
export default {
    name: 'LCheckboxGroup',
    props: ['value', 'checked', 'optcheckedions', 'stacked'],
};
</script>
