<template>
    <lit-base-field
        :field="field"
        :model="model"
        :value="value"
        v-slot:default="{ state }"
        v-on="$listeners"
    >
        <l-input-group :size="field.size">
            <l-input-group-prepend is-text v-if="field.prepend">
                <span v-html="field.prepend"></span>
            </l-input-group-prepend>

            <l-input
                ref="input"
                class="form-control lit-field-input"
                :value="value"
                :placeholder="field.placeholder"
                :type="field.type"
                :maxlength="field.max"
                :required="field.required"
                :state="state"
                :autofocus="field.autofocus"
                v-bind:readonly="field.readonly"
                @input="$emit('input', $event)"
            />

            <l-input-group-append is-text v-if="field.append">
                <span v-html="field.append"></span>
            </l-input-group-append>
        </l-input-group>

        <slot />
    </lit-base-field>
</template>

<script>
export default {
    name: 'FieldInput',
    props: {
        /**
         * Field attributes.
         */
        field: {
            required: true,
            type: Object,
        },

        /**
         * Model.
         */
        model: {
            required: true,
            type: Object,
        },

        /**
         * Field value.
         */
        value: {
            required: true,
        },
    },
};
</script>
