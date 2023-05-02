<script setup lang="ts">

import {onMounted, ref} from "vue";
import PageCard from "../common/PageCard.vue";

const introVisible = ref(true)

onMounted(() => {
    setTimeout(() => {
        introVisible.value = false
    }, 5200)
})
</script>

<template>
    <page-card>
        <div class="my-3">
            <nuxt-link to="/" class="group inline-flex hover:bg-black items-center text-white bg-gray-900 rounded-full p-0.5 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 tracking-wide bg-primary rounded-full">Always learning</span>
                <span class="ml-4 text-xs">take a look</span>
                <svg class="transition duration-500 transform block group-hover:rotate-180 hover-arrow ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </nuxt-link>
            <h1 class="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">
                <div data-aos="zoom-in-up" v-show="introVisible">
                    <small class="md:block">
                        <span class="text-secondary font-extralight">hey there i'm </span>  <br>
                        <span class="text-3xl">Rik Peeters</span>
                    </small>
                    <div>
                        <vue-writer class="text-primary" :array="['I build things for the web and...']" :type-speed="70" />
                    </div>
                </div>
                <div v-bind:class="{'hidden': introVisible, ' animate-fade':!introVisible }">
                    <span class="md:block text-primary-content">your friendly neighborhood</span>
                    <div>
                        <vue-writer class="text-primary" :array="['web-developer', 'software-engineer', 'programmer', 'cyber security specialist', 'encoder', 'data-analyst']" :type-speed="70"  />
                    </div>
                </div>
            </h1>
            <p class="mt-3 sm:mt-5 text-secondary-content" v-bind:class="{'hidden': introVisible, ' animate-fade':!introVisible }">
                Hey there it's me Rik Peeters 👋👀. I am a Software Engineer and Cyber Security specialist. On this website you can read all about projects and assignments I did during my studies. In doing so, you can read what my approach is to projects and my knowledge for these topics becomes clear.
            </p>
        </div>
    </page-card>
</template>

<style scoped>

</style>