<template>
    <b-dropdown
        v-bind="{
            text,
            variant,
            size,
            right,
            noCaret,
            split,
            dropbottom,
            disabled,
        }"
        v-on="$listeners"
    >
        <slot />
    </b-dropdown>
</template>

<script>
export default {
    name: 'LDropdown',
    props: [
        'text',
        'variant',
        'size',
        'right',
        'noCaret',
        'split',
        'dropbottom',
        'disabled',
    ],
};
</script>
