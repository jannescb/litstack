<template>
    <lit-col :width="width">
        <l-card class="lit-crud-card">
            <h6
                v-if="title"
                v-html="title"
                class="mb-4"
                style="font-size: 1.125rem;"
            />
            <l-row>
                <slot />
            </l-row>
        </l-card>
    </lit-col>
</template>

<script>
export default {
    name: 'WrapperCard',
    props: {
        title: {
            type: String,
        },
        width: {
            type: Number,
            default() {
                return 12;
            },
        },
    },
};
</script>
<style lang="scss">
.crud-card-secondary .lit-crud-card {
    background: transparent;
    border: 1px solid #e0e9f1;
}
</style>
