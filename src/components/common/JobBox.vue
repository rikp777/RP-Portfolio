<template>
    <div v-if="job" :class="job.color" class="lg:rounded-2xl">
        <div class="relative bg-gray-950 lg:rounded-t-2xl">
            <a :href="job.url" target="_blank" rel="noreferrer">
                <div v-show="job.src">
                    <img class="h-24 object-contain max-w-[50%] p-3 mx-auto hover:scale-125  transition duration-500 ease-in-out transform  "  :src="job.src" :alt="job.name">
                </div>
            </a>
            <div class="badge badge-primary top-3 right-3 absolute text-xs font-bold text-gray-900" v-if="!job.profession">non prof</div>
        </div>

        <div class="box">
            <h2 class="text-xl dark:text-white" v-show="!job.src">{{ job.name}}</h2>
            <span class="date_duration">{{job.totalDuration}}</span>

            <div class="relative font-medium m-2" v-show="job.description">
                <svg class="absolute top-0 left-0 transform -translate-x-4 h-8 w-8 text-gray-900" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p class="relative">
                    {{ job.description }}
                </p>
            </div>


            <div class="box" v-for="(position, index) in job.positions" :key="index" :class="position.color">

                <h3>{{position.title}}</h3>
                <small>{{position.type}}</small> |
                <span class="date_duration">{{position.duration}}</span>

                <p>{{position.description}}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {PropType} from "vue";

export interface IPosition {
    type: string;
    title: string;
    description: string;
    color: string;
    startAt: string;
    endAt: string;
    duration: string;
    technologies?: string[];
}

export interface IJob {
    id: string;
    name: string;
    src: string;
    url: string;
    color: string;
    description: string;
    positions: IPosition[];
    totalDuration: string;
    profession: boolean;
}

const props = defineProps({
    job: {
        type: Object as PropType<IJob>,
        required: true
    }
});
</script>

<style scoped>

</style>