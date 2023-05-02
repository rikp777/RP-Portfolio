<template>
    <header class="lg:w-[560px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-gray-800">
        <nav class="hidden lg:block">
            <ul class="flex">
                <li>
                    <router-link to="/about" class="ml-2 mr-2 flex flex-col h-20 w-20 cursor-pointer items-center justify-center rounded-md hover:btn-primary-gradient btn-transition text-secondary-content bg-gray-900 font-semibold" href="./aboutOne.html">
                        <span class="text-xl mb-1">
                            <r-icon :icon="['fa-regular', 'fa-user']"></r-icon>
                        </span> About
                    </router-link>
                </li>
                <li>
                    <router-link to="/resume" class="ml-2 mr-2 flex flex-col h-20 w-20 cursor-pointer items-center justify-center rounded-md hover:btn-primary-gradient btn-transition text-secondary-content bg-gray-900 font-semibold">
                        <span class="text-xl mb-1">
                            <r-icon :icon="['fa-regular', 'fa-file-lines']"/>
                        </span>Resume
                    </router-link>
                </li>
                <li>
                    <router-link to="/play" class="ml-2 mr-2 flex flex-col h-20 w-20 cursor-pointer items-center justify-center rounded-md hover:btn-primary-gradient btn-transition text-secondary-content bg-gray-900 font-semibold">
                        <span class="text-xl mb-1">
                            <r-icon :icon="['fas', 'fa-play']" />
                        </span>Play
                    </router-link>
                </li>
                <li>
                    <router-link to="/blog" class="ml-2 mr-2 flex flex-col h-20 w-20 cursor-pointer items-center justify-center rounded-md hover:btn-primary-gradient btn-transition text-secondary-content bg-gray-900 font-semibold">
                        <span class="text-xl mb-1">
                            <r-icon :icon="['fa-brands', 'fa-blogger']" />
                        </span> Blogs
                    </router-link>
                </li>
                <li>
                    <router-link to="/contact" class="ml-2 mr-2 flex flex-col h-20 w-20 cursor-pointer items-center justify-center rounded-md hover:btn-primary-gradient btn-transition text-secondary-content bg-gray-900 font-semibold">
                        <span class="text-xl mb-1">
                            <r-icon :icon="['fa-solid', 'fa-address-book']" />
                        </span> Contact
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>

</template>

<script setup lang="ts">

</script>
