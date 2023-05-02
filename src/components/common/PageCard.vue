<template>
    <div class="mb-3 mt-14">
        <card-title :title="title" :sub-title="subTitle"/>
        <div class="lg:rounded-2xl" :class="{'bg-gray-800 my-3': bg}">
            <div :class="{'pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14': padding } ">
                <Transition name="fade">
                    <slot />
                </Transition>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import CardTitle from "./CardTitle.vue";

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    subTitle: {
        type: String,
        default: ''
    },
    bg: {
        type: Boolean,
        default: true
    },
    padding: {
        type: Boolean,
        default: true
    }
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>