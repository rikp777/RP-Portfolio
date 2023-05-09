<script setup lang="ts">

import PageCard from "../common/PageCard.vue";
import {computed, onMounted} from "vue";
import EducationBox, {ISchool} from "../common/EducationBox.vue";
const educationAt = [
    {
        id: "c0471990-f7f9-4299-988a-ec39ec573a64",
        name: "Fontys university",
        src: "/images/studies/fontys-logo.png",
        url: "https://fontys.edu/",
        color: "bg-purple-800",
        description: "Fontys is one of the largest universities of applied sciences in the Netherlands and located in the most innovative region of our country and perhaps the whole of Europe. It is the most exciting possible place to be for anyone with an interest in technology, entrepreneurship and creativity. Students of more than 100 nationalities study at one of our campuses.",
        routes: [
            {
                type: "Minor",
                name: "Cyber Security",
                description: "In this cyber security semester you can specialize further as a cyber security professional. The focus in the semester is on your personal security specialization and on cyber security related innovation through research and development. ",
                url: "https://fontys.edu/education/programmes/minor-cyber-security/",
                src: "/images/studies/cyber-security.png",
                color: "bg-purple-700",
                startAt: "01-09-2021",
                endAt: "01-02-2022"
            },
            {
                type: "Bachelor",
                name: "Software Engineering",
                description: "Software Engineering is about the process of making and improving software systems, from the initial idea to implementation and management of the system. You’ll learn how to produce high-quality software systems instead of spaghetti-code with bugs in it. The type of system to develop, the operating system to develop for and the environment to develop in do not play a role, as a software engineer is qualified for all of them. ",
                url: "https://fontys.edu/education/programmes/bachelor-software-engineering/",
                src: "/images/studies/software-engineering.png",
                color: "bg-purple-600",
                startAt: "01-09-2018",
                endAt: "01-09-2022"
            }
        ]
    },
    {
        id: "61e4342e-9a66-4da2-94af-68c0b7663442",
        name: "Gilde Opleidingen",
        src: "/images/studies/gilde-logo.png",
        url: "https://www.gildeictcollege.nl/",
        color: "bg-red-800",
        description: "Developing professionals with a solid foundation for the future. That is what we at Gilde Opleidingen work on with dedicated and inspiring professionals. But also together with you and your future employers. Because you, the student, are central to us. We prepare you for a future in society, as an employee, entrepreneur and citizen. Together we give shape and substance to lifelong development. To achieve this, we work according to three ambitions. ",
        routes: [
            {
                type: "MBO",
                name: "Software Developer",
                description: "During the course you will learn to work with programming tools and operating systems, among other things. For example, you will be asked to make a game. Therefore you will learn a lot in the field of ICT.",
                url: "https://www.gildeictcollege.nl/opleidingen/software-developer/",
                src: "/images/studies/software-developer.png",
                color: "bg-red-700",
                startAt: "01-09-2015",
                endAt: "01-09-2018"
            }
        ]
    },
]
const educationalData = computed(() => {
    return educationAt.map((school) : ISchool => {
        let totalDuration = 0;
        let formattedDuration = "";

        const routesWithDuration = school.routes.map(route => {
            return {
                ...route,
                duration: `${formatDate(parseDutchDate(route.startAt))} - ${formatDate(route.endAt ? parseDutchDate(route.endAt) : null)} | ${formatDuration(route.startAt, route.endAt)}`,
            };
        }).sort((a, b) => compareDates(a.endAt, b.endAt));

        formattedDuration = `${formatDate(parseDutchDate(school.routes[0].startAt))} - ${formatDate(school.routes[school.routes.length - 1].endAt ? parseDutchDate(school.routes[school.routes.length - 1].endAt) : null)} | ${getTotalDuration(school.routes)}`;

        return { ...school, totalDuration: formattedDuration, routes: routesWithDuration };
    }).sort((a, b) => compareDates(a.routes[a.routes.length - 1].endAt, b.routes[b.routes.length - 1].endAt));
});

function compareDates(a: string | null, b: string | null): number {
    const aDate = a ? new Date(a.split("-").reverse().join("-")) : new Date();
    const bDate = b ? new Date(b.split("-").reverse().join("-")) : new Date();

    return bDate.getTime() - aDate.getTime();
}
function parseDutchDate(dateString: string): Date {
    const [day, month, year] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
}
function formatDate(date: Date | null): string {
    if (!date) {
        return "Currently";
    }

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}
function getTotalDuration(items: string | any[]) {
    const startAt = items[0].startAt;
    const endAt = items[items.length - 1].endAt;
    return formatDuration(startAt, endAt);
}
function formatDuration(startAt: string, endAt: string | null) {
    const startDate = new Date(startAt.split("-").reverse().join("-"));
    const endDate = endAt ? new Date(endAt.split("-").reverse().join("-")) : new Date();
    const duration = endDate.getTime() - startDate.getTime();
    const days = Math.round(duration / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    let result = "";
    if (years > 0) {
        result += `${years} ${years === 1 ? "yr" : "yrs"} `;
    }

    if (months % 12 > 0) {
        result += `${months % 12} mos`;
    }

    if (endAt) {
        return result;
    } else {
        return result + " | Currently";
    }
}
onMounted(() => {
})
</script>

<template>
    <page-card title="has studied at" sub-title="schools where I did my studies" :padding="false" :bg="false">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <education-box v-for="(school, index) in educationalData" :key="index" :school="school" />
        </div>
    </page-card>
</template>

<style scoped>

</style>