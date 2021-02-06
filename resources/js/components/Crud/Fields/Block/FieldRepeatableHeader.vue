<template>
    <div class="lit-block-header d-flex">
        <table class="form-control-expand">
            <l-tr>
                <l-td class="col-sm" v-if="!field.readonly">
                    <div
                        class="lit-draggable__dragbar lit-block__dragbar"
                        v-b-tooltip
                        :title="__('base.change_order').capitalize()"
                        v-if="sortable"
                    >
                        <i class="fas fa-grip-horizontal text-secondary"></i>
                    </div>
                </l-td>
                <lit-table-col
                    ref="cols"
                    v-for="(col, i) in preview"
                    :key="i"
                    :item="block"
                    :col="col"
                    :cols="preview"
                />
                <l-td class="col-sm text-secondary pl-2" v-if="!field.readonly">
                    <l-button
                        variant="transparent"
                        v-b-tooltip
                        :title="__('base.item_delete', { item: 'Repeatable' })"
                        size="sm"
                        square
                        class="lit-block-delete"
                        @click="$emit('deleteItem')"
                    >
                        <lit-fa-icon :icon="deleteIcon" />
                    </l-button>
                </l-td>
                <l-td class="col-sm pl-2 pr-0" v-if="fields.length > 0">
                    <l-button
                        variant="outline-secondary"
                        v-b-tooltip
                        :title="__('crud.fields.block.expand')"
                        size="sm"
                        square
                        @click="$emit('toggleExpand')"
                    >
                        <lit-fa-icon
                            :icon="expand ? 'angle-up' : 'angle-down'"
                        />
                    </l-button>
                </l-td>
            </l-tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'FieldRepeatableHeader',
    props: {
        deleteIcon: {
            type: String,
            required: true,
        },
        sortable: {
            type: Boolean,
            required: true,
        },
        expand: {
            required: true,
            type: Boolean,
        },
        block: {
            required: true,
            type: Object,
        },
        field: {
            required: true,
            type: Object,
        },
        fields: {
            required: true,
            type: Array,
        },
        model: {
            required: true,
            type: Object,
        },
        preview: {
            type: Array,
            required: true,
        },
    },
    beforeMount() {
        this.$on('refresh', this.refresh);
    },
    methods: {
        /**
         * Pass refresh event to lit-table-col components.
         */
        refresh() {
            for (let i in this.$refs.cols) {
                this.$refs.cols[i].$emit('refresh');
            }
        },
    },
};
</script>

<style lang="scss">
@import '@lit-sass/_variables';

.lit-block {
    .lit-block-header {
        table {
            height: 100%;
            td {
                font-weight: 500;
                &:first-child {
                    width: 0;
                    padding: 0px;
                    position: relative;
                    div {
                        position: absolute;
                        top: 0;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 2.5rem;
                        left: -2.5rem;
                    }
                }
            }
        }
    }
}
</style>
