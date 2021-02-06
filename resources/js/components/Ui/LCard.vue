<template>
    <b-card v-bind="{ noBody }" v-on="$listeners">
        <slot />
    </b-card>
</template>

<script>
export default {
    name: 'LCol',
    props: ['noBody'],
};
</script>
