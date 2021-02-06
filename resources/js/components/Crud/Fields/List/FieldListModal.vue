<template>
    <l-modal :id="modalId" :size="field.modalSize" centered>
        <span slot="modal-title" v-html="_format(field.previewTitle, item)" />
        <l-row>
            <lit-field
                v-for="(itemField, key) in fields"
                :key="key"
                :field="itemField"
                :model-id="model.id"
                :model="item"
                v-on="$listeners"
            />
        </l-row>
        <template slot="modal-footer">
            <div class="d-flex justify-content-between w-100">
                <div>
                    <lit-crud-language />
                </div>
                <div>
                    <button
                        @click.prevent="$bvModal.hide(modalId)"
                        class="btn btn-secondary"
                    >
                        {{ __('base.close').capitalize() }}
                    </button>
                    <l-button
                        class="lit-save-button"
                        variant="primary"
                        v-bind:disabled="!canSave"
                        @click="Lit.bus.$emit('save')"
                    >
                        {{ __('base.save').capitalize() }}
                    </l-button>
                </div>
            </div>
        </template>
    </l-modal>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'FieldListModal',
    props: {
        item: {},
        field: {},
        model: {},
        modalId: {},
    },
    data() {
        return {
            fields: [],
        };
    },
    beforeMount() {
        this.formatRoutePrefixes();
    },
    methods: {
        formatRoutePrefixes() {
            let fields = Lit.clone(this.field.form.fields);
            for (let i in fields) {
                fields[i].params.list_item_id = this.item.id;

                if (!this.item.id) {
                    fields[i].route_prefix += '/store';
                    fields[i].params.parent_id = this.item.parent_id;
                }
            }

            this.fields = fields;
        },
    },

    computed: {
        ...mapGetters(['canSave']),
    },
};
</script>
