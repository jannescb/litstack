<template>
    <b-td v-on="$listeners">
        <slot />
    </b-td>
</template>

<script>
export default {
    name: 'LTd',
    props: [],
};
</script>
