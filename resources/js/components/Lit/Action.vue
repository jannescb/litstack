<template>
    <lit-base-component
        :component="wrapper"
        @click="runOrShowModal"
        style="position: relative;"
    >
        <l-spinner
            v-if="sendingEventRequest"
            small
            type="grow"
            style="
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                margin: auto;
            "
        />
        <lit-base-component
            :component="modal"
            v-if="modal"
            :id="modalId"
            @ok="runAction"
        >
            <span>{{ modal.props.message }}</span>
            <div class="row mt-2" v-if="modal.form">
                <lit-field
                    v-for="(field, key) in modal.form.fields"
                    :key="key"
                    :field="field"
                    :model-id="0"
                    :model="attributes"
                    :save="false"
                />
            </div>
        </lit-base-component>
    </lit-base-component>
</template>

<script>
export default {
    name: 'Action',
    props: {
        wrapper: {
            type: Object,
            required: true,
        },
        modal: {
            type: Object,
        },
        sendingEventRequest: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            modalId: this.uuidv4(),
            show: true,
            attributes: this.crud({
                attributes: {},
                translatable: true,
                cast: true,
            }),
        };
    },
    methods: {
        /**
         * Run.
         */
        runOrShowModal() {
            if (this.modal) {
                this.$bvModal.show(this.modalId);
            } else {
                this.runAction();
            }
        },

        runAction() {
            this.$emit('run', { attributes: this.attributes.attributes });
        },

        /**
         * A simple uuid using [Math.random].
         */
        uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
                /[xy]/g,
                function(c) {
                    var r = (Math.random() * 16) | 0,
                        v = c == 'x' ? r : (r & 0x3) | 0x8;
                    return v.toString(16);
                }
            );
        },
    },
};
</script>
