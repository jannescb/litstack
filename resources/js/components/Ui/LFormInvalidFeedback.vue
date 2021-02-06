<template>
    <b-form-invalid-feedback v-bind="{ state }" v-on="$listeners">
        <slot />
    </b-form-invalid-feedback>
</template>

<script>
export default {
    name: 'LFormInvalidFeedback',
    props: ['state'],
};
</script>
