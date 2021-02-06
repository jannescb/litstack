<template>
    <l-modal
        :id="modalId"
        :title="
            __('base.item_remove', {
                item: __('base.item_item', { item: field.title }),
            })
        "
    >
        {{
            __('crud.fields.list.messages.confirm_delete', {
                item: field.title,
            })
        }}

        <template v-if="item.children.length > 0">
            {{ __('crud.fields.list.messages.confirm_delete_info') }}
        </template>

        <template v-slot:modal-footer>
            <l-button
                variant="secondary"
                size="sm"
                class="float-right"
                @click="
                    $emit('canceled');
                    $bvModal.hide(`modal-${field.id}-${relation.id}`);
                "
            >
                {{ __('base.cancel').capitalize() }}
            </l-button>
            <a
                href="#"
                @click.prevent="
                    $emit('deleteItem', item);
                    $bvModal.hide(`modal-${field.id}-${relation.id}`);
                "
                class="lit-trash btn btn-danger btn-sm"
            >
                <lit-fa-icon icon="trash" />
                {{ __('base.delete').capitalize() }}
            </a>
        </template>
    </l-modal>
</template>

<script>
export default {
    name: 'FieldListModalConfirmDelete',
    props: {
        item: {},
        field: {},
        model: {},
        modalId: {},
    },
};
</script>
