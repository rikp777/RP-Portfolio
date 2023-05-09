<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import {useRouter} from "vue-router";

const scrolled = ref(false);

const handleScroll = () => {
    const scrollPosition = window.scrollY;
    scrolled.value = scrollPosition > 500;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const showComponent = computed(() => {
    return scrolled.value;
});

const router = useRouter();
const menuItems = router.options.routes.filter((r) => r.meta?.title);
</script>

<template>
    <nav v-show="showComponent">
        <ul class="bg-gray-800 mx-auto rounded-2xl p-5">
            <li v-for="(item, index) in menuItems" :key="index" :class="{'mt-5': index > 0 }">
                <router-link :to="item.path" class="bg-gray-900 w-12 h-12 rounded-xl text-white flex items-center justify-center relative transition-all duration-400 mx-auto hover:btn-primary-gradient hover:cursor-pointer">
                    <span class="relative z-10">
                        <r-icon :icon="item.meta.icon" />
                    </span>
                </router-link>
            </li>
        </ul>
    </nav>

</template>

<style scoped>

</style>