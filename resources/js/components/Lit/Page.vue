<template>
    <lit-container :expand="page.expand">
        <lit-page-navigation
            :back="goBack.route || false"
            :back-text="goBack.text || ''"
            :breadcrumb="page.breadcrumb || {}"
            :current="page.header.title"
        >
            <template :slot="slot" v-for="(part, slot) in page.navigation">
                <lit-base-component
                    v-for="(component, key) in part.components"
                    :component="component"
                    :key="`${slot}-${key}`"
                    v-bind="{ ...page.props, ...$attrs }"
                />
            </template>
        </lit-page-navigation>
        <lit-header>
            <h3
                class="flex justify-between items-baseline"
                v-html="page.header.title"
            />
            <template slot="actions">
                <lit-base-component
                    v-for="(component, key) in page.header.left.components"
                    v-bind="{ ...page.props, ...$attrs }"
                    :component="component"
                    :key="`header-left-${key}`"
                />
            </template>
            <template slot="actions-right">
                <lit-base-component
                    v-for="(component, key) in page.header.right.components"
                    v-bind="{ ...page.props, ...$attrs }"
                    :component="component"
                    :key="`header-right-${key}`"
                />
            </template>
        </lit-header>
        <l-row>
            <lit-base-component
                v-for="(component, key) in page.components"
                v-bind="{ ...page.props, ...$attrs }"
                :component="component"
                :key="key"
            />
        </l-row>
    </lit-container>
</template>

<script>
export default {
    name: 'Page',
    props: {
        page: {
            type: Object,
            require: true,
        },
    },
    computed: {
        goBack() {
            if (!this.page.back) {
                return {};
            }

            return this.page.back;
        },
    },
};
</script>
