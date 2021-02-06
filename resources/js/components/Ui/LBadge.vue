<template>
    <b-badge v-bind="{ variant }" v-on="$listeners">
        <slot />
    </b-badge>
</template>

<script>
export default {
    name: 'LBadge',
    props: ['variant'],
};
</script>
