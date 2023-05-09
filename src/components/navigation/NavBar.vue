<template>
    <header class="lg:w-fit h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-gray-800">
        <nav class="hidden lg:block">
            <ul class="flex">
                <li v-for="(item, index) in menuItems" class="group">
                    <router-link :to="item.path" class="group-hover:btn-primary-gradient ml-2 mr-2 flex flex-col h-20 w-20 cursor-pointer items-center justify-center rounded-md btn-transition text-secondary-content bg-gray-900 font-semibold" href="./aboutOne.html">
                        <span class="text-xl mb-1" :class="item.meta.animation" >
                            <r-icon :icon="item.meta.icon"></r-icon>
                        </span>
                        {{item.meta.title}}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>

</template>

<script setup lang="ts">

import {useRouter} from "vue-router";

const router = useRouter();
const menuItems = router.options.routes.filter((r) => r.meta?.title);

</script>
