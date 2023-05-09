<template>
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li class="mb-10 ml-4"  v-for="(item, index) in positions"
            :key="index">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-tertiary-content">{{item.startAt}}</time>
            <h3 class="text-lg font-semibold text-primary dark:text-white">{{item.title}}</h3>
            <p class="mb-4 text-base font-normal text-secondary-content dark:text-gray-400">{{item.description}}</p>
        </li>

    </ol>

</template>

<script setup lang="ts">

const props = defineProps<{
    positions: any
}>();


</script>

<style scoped>
.timeline-graph {
    width: 100%;
    height: 400px;
}
</style>