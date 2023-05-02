<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import EducationBox, {ISchool} from "../common/EducationBox.vue";
import JobBox, {IJob} from "../common/JobBox.vue";
import PageCard from "../common/PageCard.vue";
import ResumeBox from "./ResumeBox.vue";
const workedAt = [
    {
        id: "63fc3e66-5ae2-4a33-a620-5d49f06f1599",
        name: "Energy essentials",
        src: '/images/jobs/energyessentials-logo.png',
        url: "https://www.energyessentials.nl/",
        color: "bg-pink-50",
        description: "Energy Essentials provides appropriate solutions in the field of market and business processes in the energy sector through application development, process automation and consultancy.",
        positions: [
            {
                type: "internship",
                title: "Software Engineer",
                description: null,
                startAt: "01-02-2022",
                endAt: "01-08-2022",
                color: "bg-pink-100",
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
        color: "bg-green-50",
        description: null,
        positions: [
            {
                type: "internship",
                title: "Application Developer",
                description: null,
                startAt: "01-09-2016",
                endAt: "01-03-2017",
                color: "bg-green-100",
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
        color: "bg-yellow-50",
        description: null,
        positions: [
            {
                type: "partTime",
                title: "Vakkenvuller",
                description: null,
                startAt: "01-06-2015",
                endAt: "01-05-2018",
                color: "bg-yellow-100",
            }
        ],
        profession: false
    },
    {
        id: "37bd13ed-ce8d-4693-b092-121448216d96",
        name: "De maris B.V.",
        src: '/images/jobs/maris-logo.png',
        url: 'https://kwekerij-demaris.nl/',
        color: "bg-green-50",
        description: null,
        positions: [
            {
                type: "partTime",
                title: "Functioneel medewerker",
                description: null,
                startAt: "01-10-2012",
                endAt: "01-08-2018",
                color: "bg-green-100",
            }
        ],
        profession: false
    },
    {
        id: "59303b9b-3348-4f0c-9fb3-5a595a8381de",
        name: "CytoSMART Technologies B.V.",
        src: '/images/jobs/cytosmart-logo.svg',
        url: 'https://cytosmart.com/',
        color: "bg-blue-100",
        description: "CytoSMART has developed cell based label-free assays that are supported by image analysis algorithms. Obtain whole-well data on live-cells. CytoSMART software packages support wound healing assays, confluence detection, colony counting and more. ",
        positions: [
            {
                type: "internship",
                title: "Software Engineer",
                description: "Research and implementation of features/modules in order to make CytoSMART’s cell counter comply to FDA 21 CFR part 11 regulations. In order to do so, I had to delve myself in extensive documentation and law legislation's. Final grade: 8,9 ",
                startAt: "01-09-2020",
                endAt: "01-03-2021",
                color: "bg-blue-200",
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
        color: "bg-indigo-50",
        description: "GoStudent connects students with suitable experts in different school subjects. ",
        positions: [
            {
                type: "freelance",
                title: "Bijlesdocent informatica",
                description: null,
                startAt: "01-08-2021",
                endAt: null,
                color: "bg-indigo-100",
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
        color: "bg-amber-50",
        positions: [
            {
                type: "internship",
                title: "Software Engineer",
                description: "Digitization of distribution and production processes. Final grade: 8 ",
                startAt: "01-02-2018",
                endAt: "01-08-2018",
                color: "bg-amber-100",
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
                color: "bg-amber-200",
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
const educationAt = [
    {
        id: "c0471990-f7f9-4299-988a-ec39ec573a64",
        name: "Fontys university",
        src: "/images/studies/fontys-logo.png",
        url: "https://fontys.edu/",
        color: "bg-purple-50",
        description: "Fontys is one of the largest universities of applied sciences in the Netherlands and located in the most innovative region of our country and perhaps the whole of Europe. It is the most exciting possible place to be for anyone with an interest in technology, entrepreneurship and creativity. Students of more than 100 nationalities study at one of our campuses.",
        routes: [
            {
                type: "Minor",
                name: "Cyber Security",
                description: "In this cyber security semester you can specialize further as a cyber security professional. The focus in the semester is on your personal security specialization and on cyber security related innovation through research and development. ",
                url: "https://fontys.edu/education/programmes/minor-cyber-security/",
                src: "/images/studies/cyber-security.png",
                color: "bg-purple-100",
                startAt: "01-09-2021",
                endAt: "01-02-2022"
            },
            {
                type: "Bachelor",
                name: "Software Engineering",
                description: "Software Engineering is about the process of making and improving software systems, from the initial idea to implementation and management of the system. You’ll learn how to produce high-quality software systems instead of spaghetti-code with bugs in it. The type of system to develop, the operating system to develop for and the environment to develop in do not play a role, as a software engineer is qualified for all of them. ",
                url: "https://fontys.edu/education/programmes/bachelor-software-engineering/",
                src: "/images/studies/software-engineering.png",
                color: "bg-purple-200",
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
        color: "bg-red-50",
        description: "Developing professionals with a solid foundation for the future. That is what we at Gilde Opleidingen work on with dedicated and inspiring professionals. But also together with you and your future employers. Because you, the student, are central to us. We prepare you for a future in society, as an employee, entrepreneur and citizen. Together we give shape and substance to lifelong development. To achieve this, we work according to three ambitions. ",
        routes: [
            {
                type: "MBO",
                name: "Software Developer",
                description: "During the course you will learn to work with programming tools and operating systems, among other things. For example, you will be asked to make a game. Therefore you will learn a lot in the field of ICT.",
                url: "https://www.gildeictcollege.nl/opleidingen/software-developer/",
                src: "/images/studies/software-developer.png",
                color: "bg-red-100",
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
const workData = computed(() => {
    return workedAt.map((job) : IJob => {
        const routesWithDuration = job.positions.map(position => {
            return {
                ...position,
                duration:  `${formatDate(parseDutchDate(position.startAt))} - ${formatDate(position.endAt ? parseDutchDate(position.endAt) : null)} | ${formatDuration(position.startAt, position.endAt)}`,
            };
        }).sort((a, b) => compareDates(a.endAt, b.endAt));

        const totalDuration = `${formatDate(parseDutchDate(job.positions[0].startAt))} - ${formatDate(job.positions[job.positions.length - 1].endAt ? parseDutchDate(job.positions[job.positions.length - 1].endAt) : null)} | ${getTotalDuration(job.positions)}`;

        return { ...job, totalDuration, routes: routesWithDuration };
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
        <page-card>
            <div>
                <div class="container px-4 sm:px-5 md:px-10 lg:px-14 card-transition">
                    <div class="py-12">
                        <h1>Resume</h1>
                        <small>work experience and knowledge </small>

                        <resume-box title="has studied at" icon="" sub-text="schools where I did my studies">
                            <education-box v-for="(school, index) in educationalData" :key="index" :school="school" />
                        </resume-box>
                        <resume-box title="worked at" icon="" sub-text="in the past I worked at the following companies">
                            <job-box v-for="(job, index) in workData" :key="index" :job="job" />
                        </resume-box>

                        <resume-box title="technologies" icon="" sub-text="Here are a few technologies I’ve been working with recently" :cols="3">
                            <div v-for="(technology, index) in technologiesData" :key="`rec-${index}`" class="">
                                <a href="#" target="_blank" rel="noreferrer">
                                    <strong class="font-semibold uppercase">{{ technology.name }}</strong>
                                </a>
                                <div v-for="(framework, index) in technology.frameworks" :key="index">
                                    <h4 class="">{{framework.name}}</h4>
                                    <ul v-for="(sub, subIndex) in framework.subs" :key="subIndex" class="ml-5 list-disc">
                                        <li>
                                            <a :href="sub.url" target="_blank" class="hover:text-hot-pink">{{sub.name}}</a>
                                        </li>
                                    </ul>
                                </div>

                                <h5 class="">Libs:</h5>
                                <ul v-for="(sub, index) in technology.subs" :key="index" class="ml-5 list-disc">
                                    <li>
                                        <a :href="sub.url" target="_blank" class="hover:text-hot-pink">{{sub.name}}</a>
                                    </li>
                                </ul>
                            </div>
                        </resume-box>
                    </div>
                </div>

            </div>
        </page-card>
</template>


<style scoped>

</style>