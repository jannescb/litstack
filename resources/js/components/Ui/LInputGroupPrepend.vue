<template>
    <b-input-group-prepend v-bind="{ isText }" v-on="$listeners">
        <slot />
    </b-input-group-prepend>
</template>

<script>
export default {
    name: 'LInputGroupPrepend',
    props: ['isText'],
};
</script>
