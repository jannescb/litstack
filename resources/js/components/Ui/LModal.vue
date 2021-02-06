<template>
    <b-modal v-bind="{ title, value, centered, size }" v-on="$listeners">
        <slot />
        <slot name="modal-title" slot="modal-title" />
        <slot name="modal-header" slot="modal-header" />
        <slot name="modal-footer" slot="modal-footer" />
    </b-modal>
</template>

<script>
export default {
    name: 'LModal',
    props: [
        'title',
        'value',
        'centered',
        'size', // Size is "full" for media modal
    ],
};
</script>
