<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    subTitle: {
        type: String,
        default: ''
    },
})
</script>

<template>
    <div class="max-w-prose text-center mx-auto py-4" v-if="subTitle || title">
        <p
                class="text-xs leading-6 text-primary font-semibold tracking-wide lowercase"
                v-if="subTitle">
            {{ subTitle }}
        </p>
        <a
                :href="`https://github.com/rikp777`"
                target="_blank"
                rel="noreferrer"
                class="mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500"
                v-if="title">
            {{title}}
        </a>
    </div>
</template>

<style scoped>

</style>