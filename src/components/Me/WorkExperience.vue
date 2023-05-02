<script setup lang="ts">
import {computed, onMounted} from "vue";
import JobBox, {IJob} from "../common/JobBox.vue";
import PageCard from "../common/PageCard.vue";
const workedAt = [
    {
        id: "63fc3e66-5ae2-4a33-a620-5d49f06f1599",
        name: "Energy essentials",
        src: '/images/jobs/energyessentials-logo.png',
        url: "https://www.energyessentials.nl/",
        color: "bg-pink-800",
        description: "Energy Essentials provides appropriate solutions in the field of market and business processes in the energy sector through application development, process automation and consultancy.",
        positions: [
            {
                type: "internship",
                title: "Software Engineer",
                description: null,
                startAt: "01-02-2022",
                endAt: "01-08-2022",
                color: "bg-pink-700",
                technologies: [
                    "C#",
                    "ASP.NET CORE",
                    "entity-framework"
                ]
            }
        ],
        profession: true
    },
    {
        id: "63fc3e66-5ae2-4a33-a620-5d49f06f1599",
        name: "Cre8media",
        src: '/images/jobs/cre8media-logo.png',
        url: "https://www.cre8media.nl/",
        color: "bg-green-800",
        description: null,
        positions: [
            {
                type: "internship",
                title: "Application Developer",
                description: null,
                startAt: "01-09-2016",
                endAt: "01-03-2017",
                color: "bg-green-700",
                technologies: [
                    "php",
                    "laravel",
                    "eloquent-orm"
                ],
            }
        ],
        profession: true
    },
    {
        id: "dccf1a31-2abf-48a6-8055-8dc4b0374c4e",
        name: "Jumbo Supermarkten",
        src: '/images/jobs/jumbo-logo.png',
        url: 'https://www.jumbo.com/winkel/jumbo-panningen-jumbo-harald-en-ilse-van-beek',
        color: "bg-yellow-800",
        description: null,
        positions: [
            {
                type: "partTime",
                title: "Vakkenvuller",
                description: null,
                startAt: "01-06-2015",
                endAt: "01-05-2018",
                color: "bg-yellow-700",
            }
        ],
        profession: false
    },
    {
        id: "37bd13ed-ce8d-4693-b092-121448216d96",
        name: "De maris B.V.",
        src: '/images/jobs/maris-logo.png',
        url: 'https://kwekerij-demaris.nl/',
        color: "bg-green-800",
        description: null,
        positions: [
            {
                type: "partTime",
                title: "Functioneel medewerker",
                description: null,
                startAt: "01-10-2012",
                endAt: "01-08-2018",
                color: "bg-green-700",
            }
        ],
        profession: false
    },
    {
        id: "59303b9b-3348-4f0c-9fb3-5a595a8381de",
        name: "CytoSMART Technologies B.V.",
        src: '/images/jobs/cytosmart-logo.svg',
        url: 'https://cytosmart.com/',
        color: "bg-blue-800",
        description: "CytoSMART has developed cell based label-free assays that are supported by image analysis algorithms. Obtain whole-well data on live-cells. CytoSMART software packages support wound healing assays, confluence detection, colony counting and more. ",
        positions: [
            {
                type: "internship",
                title: "Software Engineer",
                description: "Research and implementation of features/modules in order to make CytoSMART’s cell counter comply to FDA 21 CFR part 11 regulations. In order to do so, I had to delve myself in extensive documentation and law legislation's. Final grade: 8,9 ",
                startAt: "01-09-2020",
                endAt: "01-03-2021",
                color: "bg-blue-700",
                technologies: [
                    "c#",
                    "asp.net",
                    "entity-framework"
                ]
            }
        ],
        profession: true
    },
    {
        id: "16c6a7ed-e4e2-428f-8fd1-da8cd55b4564",
        name: "GoStudent",
        src: '/images/jobs/gostudent-logo.png',
        url: 'https://www.gostudent.org/en',
        color: "bg-indigo-800",
        description: "GoStudent connects students with suitable experts in different school subjects. ",
        positions: [
            {
                type: "freelance",
                title: "Bijlesdocent informatica",
                description: null,
                startAt: "01-08-2021",
                endAt: null,
                color: "bg-indigo-700",
                technologies: [
                    "java"
                ]
            }
        ],
        profession: true
    },
    {
        id: "bf781026-28a1-4b80-a683-1673b5da2522",
        name: "Limax",
        description: "We are Limax and we want as many people as possible to enjoy our fresh, super tasty and extremely healthy products on a daily basis: our vitality boosters. ",
        src: '/images/jobs/limax-logo.png',
        url: 'https://www.limax.nl/',
        color: "bg-amber-800",
        positions: [
            {
                type: "internship",
                title: "Software Engineer",
                description: "Digitization of distribution and production processes. Final grade: 8 ",
                startAt: "01-02-2018",
                endAt: "01-08-2018",
                color: "bg-amber-700",
                technologies: [
                    "php",
                    "laravel",
                    "eloquent-orm",
                    "blade",
                    "javascript"
                ]
            },
            {
                type: "partTime",
                title: "Junior Employee Supply Chain / IT",
                description: "Developing the digitalization of the distribution processes with the latest techniques",
                startAt: "01-08-2018",
                endAt: null,
                color: "bg-amber-600",
                technologies: [
                    "java",
                    "spring-boot",
                    "hibernate-orm",
                    "typescript",
                    "vue-js",
                    "vuex",
                    "axios",
                    "msw"
                ]
            }
        ],
        profession: true
    },
]

const workData = computed(() => {
    return workedAt.map((job) : IJob => {
        const positionsWithDuration = job.positions.map(position => {
            return {
                ...position,
                duration:  `${formatDate(parseDutchDate(position.startAt))} - ${formatDate(position.endAt ? parseDutchDate(position.endAt) : null)} | ${formatDuration(position.startAt, position.endAt)}`,
            };
        }).sort((a, b) => compareDates(a.endAt, b.endAt));

        const totalDuration = `${formatDate(parseDutchDate(job.positions[0].startAt))} - ${formatDate(job.positions[job.positions.length - 1].endAt ? parseDutchDate(job.positions[job.positions.length - 1].endAt) : null)} | ${getTotalDuration(job.positions)}`;

        return { ...job, totalDuration, positions: positionsWithDuration };
    }).sort((a, b) => compareDates(a.positions[a.positions.length - 1].endAt, b.positions[b.positions.length - 1].endAt));
})
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

  <page-card title="worked at" sub-title="in the past I worked at the following companies" :padding="false" :bg="false">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <job-box v-for="(job, index) in workData" :key="index" :job="job" />
      </div>
  </page-card>
</template>

<style scoped>

</style>