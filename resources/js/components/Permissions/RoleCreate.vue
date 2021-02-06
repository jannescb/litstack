<template>
    <l-button variant="primary" @click="visible = true">
        <lit-fa-icon icon="plus" />
        {{ __('base.item_add', { item: __('base.role') }).capitalizeAll() }}
        <l-modal
            v-model="visible"
            :title="
                __('base.item_add', { item: __('base.role') }).capitalizeAll()
            "
        >
            <l-form-group
                :label="__('permissions.role_name').capitalizeAll()"
                label-for="name"
                :state="nameState"
            >
                <l-form-input v-model="name" id="name" trim />
                <l-form-invalid-feedback :state="nameErrorState">
                    {{ error('name') }}
                </l-form-invalid-feedback>
            </l-form-group>
            <template v-slot:modal-footer>
                <div class="w-100">
                    <l-button
                        variant="primary"
                        size="sm"
                        class="float-right"
                        @click="storeRole"
                        :disabled="!nameState"
                    >
                        <lit-fa-icon icon="user-tag" />
                        {{
                            __('base.item_create', {
                                item: __('base.role'),
                            }).capitalizeAll()
                        }}
                        <l-spinner label="Loading..." small v-if="busy" />
                    </l-button>
                </div>
            </template>
        </l-modal>
    </l-button>
</template>
<script>
export default {
    name: 'RoleCreate',
    data() {
        return {
            visible: false,
            name: '',
            busy: false,
            errors: [],
        };
    },
    methods: {
        async storeRole() {
            this.busy = true;
            let response = null;
            try {
                response = await axios.post('/role', {
                    name: this.name,
                });
            } catch (e) {
                this.errors = e.response.data.errors;
                this.busy = false;
                return;
            }

            let role = response.data;

            window.location.reload();

            this.visible = false;

            this.$bvToast.toast(
                this.__('permissions.messages.added_role', {
                    role: role.name.capitalize(),
                }),
                {
                    variant: 'success',
                }
            );
            this.busy = false;
        },
        error(key) {
            if (this.errors.hasOwnProperty(key)) {
                return this.errors[key].join(', ');
            }
        },
    },
    computed: {
        nameState() {
            return this.name.length > 1;
        },
        nameErrorState() {
            return !this.errors.hasOwnProperty('name');
        },
    },
};
</script>
