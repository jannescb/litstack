<template>
    <b-button
        :class="{
            'btn-square': square,
        }"
        v-bind="{ variant, size, href, disabled }"
        v-on="$listeners"
    >
        <slot />
    </b-button>
</template>

<script>
export default {
    name: 'LButton',
    props: ['variant', 'size', 'href', 'disabled', 'square'],
    computed: {
        class() {},
    },
};
</script>
