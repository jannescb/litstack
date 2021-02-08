<template>
    <popper
        trigger="clickToOpen"
        :options="{
            placement: 'top',
            modifiers: { offset: { offset: '0,10px' } },
        }"
    >
        <div class="p-4 bg-gray-dark-hover rounded-lg text-white"><slot /></div>

        <div slot="reference" class="inline-block text-white cursor-pointer">
            {{ dropbottom }}{{ text }} <slot name="button-content" />
        </div>
    </popper>
    <!-- <b-dropdown
        v-bind="{
            text,
            variant,
            size,
            right,
            noCaret,
            split,
            dropbottom,
            disabled,
        }"
        v-on="$listeners"
    >
        <slot />
    </b-dropdown> -->
    <!-- </popper> -->
</template>

<script>
export default {
    name: 'LDropdown',
    props: [
        'text',
        'variant',
        'size',
        'right',
        'noCaret',
        'split',
        'dropbottom',
        'disabled',
    ],
};
</script>
