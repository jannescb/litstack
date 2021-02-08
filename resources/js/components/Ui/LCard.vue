<template>
    <div v-on="$listeners" class="bg-white rounded-lg shadow p-8">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'LCard',
    props: ['noBody'],
};
</script>
