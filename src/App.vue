<script setup lang="ts">
import NavBar from "./components/navigation/NavBar.vue";
import MeCard from "./components/Me/MeCard.vue";
import {onMounted, ref} from "vue";

import TheLogo from "./components/logos/TheLogo.vue";

const mobileMenuOpen = ref(false);

onMounted(() => {
    // localStorage.theme = localStorage.theme ? localStorage.theme : 'light';
    // themeChange(false)
});
</script>

<template>
    <div class="bg-gray-900 relative min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
        <div class="md:w-4/5 mx-auto">
            <div class="w-full flex justify-between px-4 py-5">
                <a href="/">
                    <the-logo></the-logo>
<!--                    <img class="h-[26px] lg:h-[32px]" src="./images/logo/logo.png" alt="logo">-->
                </a>
                <div class="flex items-center">
                    <!-- dark and light mode toggle -->
                    <button type="button" class="ml-2 flex w-10 h-10 cursor-pointer justify-center items-center rounded-full bg-stone-100 text-primary-content hover:bg-primary btn-transition">
                        <r-icon :icon="['fa-solid', 'fa-moon']" />
                        <r-icon :icon="['fa-solid', 'fa-sun']" class="hidden" />
                    </button>
                    <!-- mobile toggle button -->
                    <button type="button" class="ml-2 flex w-10 h-10 cursor-pointer justify-center items-center rounded-full bg-stone-100 text-primary-content hover:bg-primary btn-transition lg:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
                        <r-icon :icon="['fa-solid', 'fa-bars']" />
                        <r-icon :icon="['fa-solid', 'fa-xmark']" class="hidden" />
                    </button>
                </div>
            </div>
        </div>
        <nav id="navbar" class="lg:hidden" v-if="mobileMenuOpen">
            <ul class="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
                <li>
                    <a class="flex cursor-pointer items-center px-3 py-2 font-semibold text-primary-content hover:text-primary" href="./aboutOne.html">
                    <span class="mr-2 text-xl">
                        <r-icon :icon="['fa-regular', 'fa-user']"></r-icon>
                    </span> About
                    </a>
                </li>
                <li>
                    <a class="flex cursor-pointer items-center px-3 py-2 font-semibold text-primary-content hover:text-primary" href="./resumeOne.html">
                    <span class="mr-2 text-xl">
                        <r-icon :icon="['fa-regular', 'fa-file-lines']"/>
                    </span> Resume
                    </a>
                </li>
                <li>
                    <a class="flex cursor-pointer items-center px-3 py-2 font-semibold text-primary-content hover:text-primary" href="./portfiloOne.html">
                    <span class="mr-2 text-xl">
                        <r-icon :icon="['fas', 'fa-play']" />
                    </span> Works
                    </a>
                </li>
                <li>
                    <a class="flex cursor-pointer items-center px-3 py-2 font-semibold text-primary-content hover:text-primary" href="./blogOne.html">
                    <span class="mr-2 text-xl">
                        <r-icon :icon="['fa-brands', 'fa-blogger']" />
                    </span> Blogs
                    </a>
                </li>
                <li>
                    <a class="flex cursor-pointer items-center px-3 py-2 font-semibold text-primary-content hover:text-primary" href="./contactOne.html">
                    <span class="mr-2 text-xl">
                        <r-icon :icon="['fa-solid', 'fa-address-book']" />
                    </span> Contact
                    </a>
                </li>
            </ul>
        </nav>
        <div class="md:w-4/5 mx-auto grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
            <me-card />

            <!-- Content-->
            <div class="col-span-12 lg:col-span-8">
                <nav-bar />
                <div>

                        <router-view />
                        <footer class="overflow-hidden rounded-b-2xl" style="background: transparent">
                            <p class="text-center py-6 text-gray-lite dark:text-color-910"> © 2022 All Rights Reserved </p>
                        </footer>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-homeBg {
    background-image: linear-gradient(
        to bottom right,
        #283c86 0%,
        #45a247 25%,
        #76b852 50%,
        #45a247 75%,
        #283c86 100%
    );
    background-size: cover;
    background-position: center;
}
.bg-homeBg-light {
    background-image: linear-gradient(
        to bottom right,
        #cccccc 0%,
        #d3d3d3 25%,
        #e0e0e0 50%,
        #d3d3d3 75%,
        #cccccc 100%
    );
    background-size: cover;
    background-position: center;
}
</style>


