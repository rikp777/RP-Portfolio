<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import JobBox, {IJob} from "../common/JobBox.vue";
import PageCard from "../common/PageCard.vue";
import JobGraphTimeline from "./JobGraphTimeline.vue";
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
                description: "As an intern at Energy Essentials, I assisted with the migration of the Vertex software solution to a new platform. This involved working closely with the team to ensure a smooth transition and minimal disruption to the company's operations. I also contributed to the development of a CQRS .NET 6 reference architecture, and assisted with the migration from .NET 5 to .NET 6. Through this internship, I gained hands-on experience with software migration and development, and helped to modernize the company's technology infrastructure.",
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
        description: "Cre8media is a creative digital agency specializing in web design, web development, and online marketing services. With a team of skilled designers and developers, Cre8media provides innovative solutions for businesses of all sizes, helping them enhance their online presence, increase customer engagement, and achieve their digital goals.",
        positions: [
            {
                type: "internship",
                title: "Application Developer",
                description: "During my internship at Cre8 Media, I assisted with UI and UX design and implementation for various projects. This involved working closely with the design team to create visually appealing and user-friendly interfaces, and helping to ensure that the designs were properly implemented in the final product. Through this internship, I gained valuable experience in design and development, and contributed to the creation of high-quality digital products for the company's clients.",
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
        description: "Jumbo Supermarkten is a leading supermarket chain in the Netherlands, providing a wide range of high-quality groceries, fresh produce, and household items at affordable prices. With exceptional customer service and a commitment to sustainability, Jumbo is dedicated to making every shopping experience enjoyable and convenient for their customers.",
        positions: [
            {
                type: "partTime",
                title: "Vakkenvuller",
                description: "As a shelf worker at Jumbo Supermarked, I was responsible for maintaining the store's product displays and ensuring that products were properly stocked and organized on the shelves. I also assisted customers with locating products and provided recommendations as needed. Through this work, I gained valuable experience in customer service and inventory management. 😂",
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
        description: "De Maris B.V. is a family-owned and operated plant nursery, cultivating a diverse range of high-quality ornamental plants and flowers. With a strong focus on sustainable practices and innovative cultivation techniques, De Maris B.V. is committed to providing beautiful, healthy plants to customers while minimizing their environmental impact.",
        positions: [
            {
                type: "partTime",
                title: "Greenhouse worker",
                description: "As a greenhouse worker at the Maris, I gained extensive practical experience in agriculture and horticulture. My responsibilities included planting, tending, and harvesting cucumbers, as well as maintaining the greenhouse to ensure the optimal conditions for plant growth. Over the course of almost six years, I developed a strong foundation in these areas.",
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
        description: "Axion BioSystems, a leading provider of advanced cell analysis tools, has acquired CytoSMART Technologies B.V., a pioneer in live-cell imaging and analysis solutions. Now operating under the Axion BioSystems name, the company continues to offer cutting-edge imaging and analysis solutions for live-cell research. Their innovative, label-free assays are supported by state-of-the-art image analysis algorithms that enable researchers to obtain whole-well data and monitor cellular processes in real time. With a comprehensive suite of software packages, Axion BioSystems offers a range of applications including wound healing assays, confluence detection, and colony counting, empowering researchers to make groundbreaking discoveries in cell biology.",
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
const flatWorkedAtPositions = computed(() => {
    return workData.value
        .flatMap((job) => job.positions)
});

const workDataTimeline = computed(() => {
    return flatWorkedAtPositions.value.sort((a, b) => compareDates(a.endAt, b.endAt));
})

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
    }).sort((a, b) => {
        const aEndDate = a.positions[0].endAt;
        const bEndDate = b.positions[0].endAt;

        // Prioritize professional positions over non-professional ones
        if (a.profession && !b.profession) return -1;
        if (!a.profession && b.profession) return 1;

        // Check if a is currently active
        const aIsActive = aEndDate == null;

        // Check if b is currently active
        const bIsActive = bEndDate == null;

        // If both a and b are active, sort based on profession status
        if (aIsActive && bIsActive) {
            if (a.profession && !b.profession) return -1;
            if (!a.profession && b.profession) return 1;
            return 0;
        }

        // If a is active and b is not, prioritize a
        if (aIsActive) return -1;

        // If b is active and a is not, prioritize b
        if (bIsActive) return 1;

        // Sort by end date if neither are active
        return compareDates(aEndDate, bEndDate);
    });

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

const timeline = ref(true);
</script>

<template>

  <page-card title="worked at" sub-title="in the past I worked at the following companies" :padding="false" :bg="false">
      <div>
        <div class="form-control w-40">
            <label class="label cursor-pointer">
                <span class="label-text"> {{ timeline ? "Show all" : "Show timeline" }}</span>
                <input type="checkbox" class="toggle" checked  @click="timeline = !timeline"/>
            </label>
        </div>
        <page-card v-if="timeline">
            <job-graph-timeline :positions="workDataTimeline" />
        </page-card>

        <page-card v-if="!timeline" :padding="false" :bg="false">
          <div class="grid grid-cols-1 lg:gap-4 sm:grid-cols-2">
              <job-box v-for="(job, index) in workData" :key="index" :job="job"/>
          </div>
          <div class="max-w-2xl mx-auto">
              <ol class="relative border-l border-gray-200 dark:border-gray-700">
                  <li class="mb-10 ml-4" v-for="(job, index) in workData" :key="index">
                      <div
                          class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                      </div>
                      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                          {{ job.totalDuration }}
                      </time>
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ job.name }}</h3>
                      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ job.description }}</p>
                  </li>
              </ol>
              <p class="mt-5">This timeline component is part of a larger, open-source library of Tailwind CSS
                  components. Learn more
                  by going to the official <a class="text-blue-600 hover:underline"
                                              href="#" target="_blank">Flowbite Documentation</a>.
              </p>
          </div>
        </page-card>
      </div>
  </page-card>
</template>

<style scoped>

</style>