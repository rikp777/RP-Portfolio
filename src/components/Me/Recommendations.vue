<script setup lang="ts">
import PageCard from "../common/PageCard.vue";

const recommendations =  [
    {
        name: 'Saray Rond',
        designation: 'Psychologie student / gf',
        linkedin: 'https://www.linkedin.com/in/saray-r-672049212/',
        content: 'Als Rik ✨gemotiveerd✨ is, blijft hij aan een taak werken totdat die klaar is. ' +
            'Dat is een waardevolle skill om te hebben, aangezien sommige taken moeilijk of veel werk kunnen zijn. ' +
            'Ook is hij heel sterk op het gebied van communicatie met medestudenten. Bijvoorbeeld over hoe ze een bepaald doel moeten aanpakken, hij kan hen als het ware naar succes leiden. ' +
            'Dat maakt hem een echte teamplayer en dat is belangrijk in zijn vakgebied. 👨🏼💻'
    },
    {
        name: 'Jeanine Peeters',
        designation: 'Mams',
        content: 'Rik is een persoon waar je op kunt bouwen en die zijn werk serieus neemt. Hij stopt hier veel tijd en energie in. Hij maakt het eerst af, al duurt het tot in de late uurtjes. Rik is de kracht in zijn vak.'}
]
</script>

<template>
    <page-card title="Recommendations" sub-title="what do my mentors, friends & colleagues say" :bg="false" :padding="false">
        <div class="grid grid-cols-1 lg:gap-4 sm:grid-cols-2">
            <div v-for="(rec, index) in recommendations" :key="`rec-${index}`" class="relative h-full bg-gray-800 lg:rounded-lg shadow-lg text-base w-full">
                <blockquote class="relative">
                    <div class="lg:rounded-t-lg px-5 py-5 sm:px-8 sm:py-8y">
                        <div class="flex flex-row">
                            <a :href="rec.linkedin" target="_blank" rel="noreferrer">
                                <cite class="flex items-center rounded-b-lg not-italic">
                                    <div class="flex-shrink-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-full border border-hot-pink mr-4" v-show="rec.image">
                                        <img class="w-8 h-8 rounded-full bg-indigo-300" :src="rec.image" alt="Varun">
                                    </div>
                                    <span class="text-primary font-semibold py-2">
                                    <strong class="text-secondary-content font-semibold">{{ rec.name }}</strong>
                                    {{ rec.designation }}
                                  </span>
                                </cite>
                            </a>
                        </div>
                        <div class="relative text-sm text-secondary-content font-medium mt-4">
                            <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-900" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>
                            <p class="relative">
                                {{ rec.content }}
                            </p>
                        </div>
                    </div>
                </blockquote>
            </div>
        </div>
    </page-card>
</template>

<style scoped>

</style>