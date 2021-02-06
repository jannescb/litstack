<template>
    <b-input-group-append v-bind="{ isText }" v-on="$listeners">
        <slot />
    </b-input-group-append>
</template>

<script>
export default {
    name: 'LInputGroupAppend',
    props: ['isText'],
};
</script>
