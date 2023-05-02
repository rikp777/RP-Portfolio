<template>
    <div>
        <div class="flex justify-center items-center">
            <div class="mt-4">
                <small class="text-primary" v-if="subText">{{ subText }}</small>
                <div class="flex items-center justify-center space-x-2 mt-2">
                    <div class="text-3xl text-primary" v-if="icon">
                        <r-icon :icon="icon" />
                    </div>
                    <h2 v-if="title">{{ title }}</h2>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-x-6 gap-y-6 mt-[30px]" :class="`md:grid-cols-${cols}`">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    subText: {
        type: String,
        required: true
    },
    icon : {
        type: String,
        required: true
    },
    cols: {
        type: Number,
        required: true,
        default: 2
    }
});

</script>

<style scoped>

</style>