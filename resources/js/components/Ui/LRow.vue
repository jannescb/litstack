<template>
    <b-row v-on="$listeners">
        <slot />
    </b-row>
</template>

<script>
export default {
    name: 'LRow',
    props: [],
};
</script>
