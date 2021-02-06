<template>
    <b-tag v-bind="{ variant }" v-on="$listeners">
        <slot />
    </b-tag>
</template>

<script>
export default {
    name: 'LTag',
    props: ['variant'],
};
</script>
