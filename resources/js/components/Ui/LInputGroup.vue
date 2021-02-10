<template>
    <div
        v-bind="{
            size,
            label,
            state,
            labelFor,
        }"
        v-on="$listeners"
        class="border border-gray-mid rounded-lg flex"
        :class="{
            'h-8': size == 'sm',
            'h-12': size == 'md',
            'h-16': size == 'lg',
        }"
    >
        <slot />
    </div>
</template>

<script>
export default {
    name: 'LInputGroup',
    props: ['size', 'state', 'label', 'labelFor'],
};
</script>
