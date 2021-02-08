<template>
    <div>
        <div
            v-if="isTitle"
            class="text-blue-mid uppercase text-sm px-4 pb-4 pt-6"
        >
            {{ item.title }}
        </div>

        <div v-else-if="isSection" class="border-b border-gray-mid pb-4">
            <lit-nav-item
                v-for="(i, index) in item"
                :item="i"
                :key="index"
                v-if="!(i instanceof String) && i !== null"
            />
        </div>
        <template v-else>
            <component :is="item.component" v-if="hasComponent" />
            <component
                :is="tagType"
                :href="link"
                @click="visible = !visible"
                class="flex justify-between items-center px-4 py-4 text-blue-dark text-base hover:bg-gray-light-hover"
                :class="{
                    'bg-gray-light border-r-4 border-blue-mid': active,
                }"
                v-else
            >
                <div>
                    <span v-html="item.icon" class="text-gray-dark pr-2"></span>
                    <span v-html="item.title" />
                </div>
                <div :class="{ active: visible }" v-if="hasChildren">
                    <lit-fa-icon
                        icon="chevron-right"
                        class="float-right text-sm"
                    />
                </div>
            </component>
            <b-collapse v-if="hasChildren" v-model="visible">
                <div class="py-3 bg-gray-light shadow-inner">
                    <lit-nav-item
                        v-for="(item, index) in item.children"
                        :item="item"
                        :key="index"
                    />
                </div>
            </b-collapse>
        </template>
    </div>
</template>

<script>
export default {
    name: 'NavItem',
    props: {
        item: {
            type: [Array, Object, String],
        },
    },
    data() {
        return {
            visible: false,
            active: false,
        };
    },
    mounted() {
        // make children visible
        if (this.hasChildren) {
            for (let i = 0; i < this.item.children.length; i++) {
                if (this.isActive(this.item.children[i])) {
                    this.visible = true;
                }
            }
        }

        // set active state
        if (this.hasLink) {
            this.active = this.isActive(this.item);
        }
    },
    methods: {
        isActive(item) {
            const currentLink = window.location.pathname;
            if (item.link == Lit.baseURL) {
                return currentLink == item.link;
            }
            if (Lit.baseURL.includes(currentLink)) {
                return currentLink.includes(item.link);
            }
            return currentLink.includes(item.link);
        },
    },
    computed: {
        link() {
            return this.hasChildren ? '#' : this.item.link;
        },
        hasLink() {
            return this.item.hasOwnProperty('link');
        },
        hasChildren() {
            return this.item.hasOwnProperty('children');
        },
        hasComponent() {
            return this.item.hasOwnProperty('component');
        },
        isSection() {
            return Array.isArray(this.item) || !('type' in this.item);
        },
        isTitle() {
            return this.item.type === 'title';
        },
        tagType() {
            return this.hasLink ? 'a' : 'div';
        },
    },
};
</script>
