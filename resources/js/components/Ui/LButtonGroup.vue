<template>
    <div
        v-bind="{ size }"
        v-on="$listeners"
        class="flex ui-button-goup"
        :class="{ vertical }"
    >
        <slot />
    </div>
</template>

<script>
export default {
    name: 'LButtonGroup',
    props: ['size', 'vertical'],
};
</script>

<style lang="scss" scoped>
.ui-button-goup {
    & > button {
        &:not(:first-child):not(:last-child) {
            border-radius: none;
        }
    }
    &:not(.vertical) > button {
        &:first-child {
            @apply rounded-r-none;
        }
        &:last-child {
            @apply rounded-l-none;
        }
    }
    &.vertical > button {
        &:first-child {
            @apply rounded-b-none;
        }
        &:last-child {
            @apply rounded-t-none;
        }
    }
}
</style>
