<template>
    <div class="mb-4">
        <div class="mt-2 mb-2">
            <slot>
                <h3 v-if="title">
                    {{ title }}
                </h3>
            </slot>
        </div>
        <div class="flex justify-between">
            <div>
                <slot name="actions" />
            </div>

            <div>
                <slot name="actions-right" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: {
            type: String,
            default() {
                return '';
            },
        },
    },
};
</script>
