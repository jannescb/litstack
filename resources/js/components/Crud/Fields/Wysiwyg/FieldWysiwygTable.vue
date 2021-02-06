<template>
    <b-dropdown
        ref="dropdown"
        class="dropdown-sm-square lit-color-palette"
        dropbottom
        no-caret
        :variant="isActive.table() ? 'primary' : 'transparent'"
        size="sm"
        @show="addTable"
    >
        <template v-slot:button-content>
            <lit-fa-icon icon="table" />
        </template>
        <div class="lit-color-palette-wrapper">
            <l-button
                size="sm"
                variant="outline-secondary"
                class="btn-square"
                @click="deleteTable"
            >
                <lit-fa-icon icon="trash" />
            </l-button>
            <l-button
                size="sm"
                variant="outline-secondary"
                class="btn-square"
                @click="addColumnAfter"
            >
                <lit-fa-icon icon="plus-square" />
            </l-button>
            <l-button
                size="sm"
                variant="outline-secondary"
                class="btn-square"
                @click="deleteColumn"
            >
                <lit-fa-icon icon="minus-square" />
            </l-button>

            <l-button
                size="sm"
                variant="outline-secondary"
                class="btn-square"
                @click="addRowAfter"
            >
                <lit-fa-icon icon="plus" />
            </l-button>
            <l-button
                size="sm"
                variant="outline-secondary"
                class="btn-square"
                @click="deleteRow"
            >
                <lit-fa-icon icon="minus" />
            </l-button>
        </div>
    </b-dropdown>
</template>

<script>
export default {
    name: 'FieldWysiwygTable',
    props: {
        isActive: {
            required: true,
        },
        commands: {
            required: true,
        },
        field: {
            required: true,
        },
    },
    watch: {
        // isActive() {
        //     this.checkTableIsActive();
        // }
    },
    mounted() {
        this.$nextTick(() => {
            this.checkTableIsActive();
        });
    },
    methods: {
        checkTableIsActive() {
            if (this.isActive.table()) {
                this.$refs.dropdown.show();
            } else {
                this.$refs.dropdown.hide();
            }
        },
        addTable(event) {
            if (this.isActive.table()) {
                return;
            }
            this.commands.createTable({
                rowsCount: 3,
                colsCount: 3,
                withHeaderRow: this.field.tableHasHeader,
            });
        },
        deleteTable(event) {
            this.commands.deleteTable();
        },
        addColumnAfter(event) {
            this.commands.addColumnAfter();
            this.$refs.dropdown.show();
        },
        deleteColumn(event) {
            this.commands.deleteColumn();
            this.$refs.dropdown.show();
        },
        addRowAfter(event) {
            this.commands.addRowAfter();
            this.$refs.dropdown.show();
        },
        deleteRow(event) {
            this.commands.deleteRow();
            this.$refs.dropdown.show();
        },
    },
};
</script>
