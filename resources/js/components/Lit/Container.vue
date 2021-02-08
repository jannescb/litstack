<template>
    <!-- TODO: make fluid expand withs -->
    <div
        class="block mx-auto"
        :class="{
            'w-full px-10': expand,
            'max-w-7xl px-10': !expand,
        }"
    >
        <slot />
    </div>
</template>

<script>
export default {
    name: 'Container',
    props: {
        expand: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
