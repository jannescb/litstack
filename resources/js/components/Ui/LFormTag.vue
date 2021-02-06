<template>
    <b-form-tag v-bind="{ variant }" v-on="$listeners">
        <slot />
    </b-form-tag>
</template>

<script>
export default {
    name: 'LFormTag',
    props: ['variant'],
};
</script>
