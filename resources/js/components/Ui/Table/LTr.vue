<template>
    <b-tr v-on="$listeners">
        <slot />
    </b-tr>
</template>

<script>
export default {
    name: 'LTr',
    props: [],
};
</script>
