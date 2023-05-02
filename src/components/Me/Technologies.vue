<script setup lang="ts">

import {computed} from "vue";
import CardTitle from "../common/CardTitle.vue";
import PageCard from "../common/PageCard.vue";

interface ITechnologyFrameworkSub {
    id: string;
    name: string;
    url: string | null;
}

interface ITechnologyFramework {
    id: string;
    name: string;
    url: string | null;
    subs?: ITechnologyFrameworkSub[];
}

interface ITechnology {
    id: string;
    name: string;
    url: string | null;
    frameworks?: ITechnologyFramework[];
    subs?: ITechnologyFrameworkSub[];
}

const technologies =
    [
        {
            id: "python",
            name: "Python",
            url: null,
            frameworks: [
                {
                    id: "django",
                    name: "Django",
                    url: 'https://github.com/django/django',
                }
            ],
            subs: [
                {
                    id: "project-jupyter",
                    name: "Project Jupyter",
                    url: "https://jupyter.org/"
                },
                {
                    id: "pandas",
                    name: "Pandas",
                    url: "https://pandas.pydata.org/"
                },
                {
                    id: "scikit-learn",
                    name: "Scikit-learn",
                    url: "https://scikit-learn.org/stable/"
                }
            ]
        },
        {
            id: "c#",
            name: "C#",
            url: null,
            frameworks: [
                {
                    id: "asp.net",
                    name: "ASP.NET 5",
                    url: "https://dotnet.microsoft.com/en-us/apps/aspnet",
                },
                {
                    id: "asp.net",
                    name: "ASP.NET Core 6",
                    url: "https://docs.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-6.0",
                    subs: [
                        {
                            id: "minimal-api",
                            name: "Minimal API",
                            url: "https://docs.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis?view=aspnetcore-6.0"
                        }
                    ]
                }
            ],
            subs: [
                {
                    id: "entity-framework",
                    name: "Entity Framework",
                    url: "https://docs.microsoft.com/en-us/ef/"
                }
            ]
        },
        {
            id: "java",
            name: "Java",
            url: null,
            frameworks: [
                {
                    id: "spring-boot \n",
                    name: "Springboot",
                    url: "https://spring.io/guides/gs/spring-boot/"
                },
            ],
            subs: [
                {
                    id: "hibernate-orm",
                    name: "Hibernate ORM",
                    url: "https://hibernate.org/"
                },
                {
                    id: 'jpa',
                    name: 'Spring Data JPA',
                    url: 'https://spring.io/projects/spring-data-jpa'
                },
                {
                    id: "lombok",
                    name: "Lombok",
                    url: "https://projectlombok.org/"
                }
            ]
        },
        {
            id: "php",
            name: "PHP",
            url: null,
            frameworks: [
                {
                    id: "laravel",
                    name: "Laravel",
                    url: "https://laravel.com/",
                    subs: [
                        {
                            id: "eloquent-orm",
                            name: "Eloquent ORM",
                            url: "https://laravel.com/docs/eloquent"
                        },
                        {
                            id: "blade",
                            name: "Blade Template",
                            url: "https://laravel.com/docs/blade"
                        },
                        {
                            id: "symfony",
                            name: "Symfony",
                            url: "https://symfony.com/"
                        },
                        {
                            id: "composer",
                            name: "Composer",
                            url: "https://getcomposer.org/"
                        }
                    ]
                }
            ]
        },
        {
            id: "javascript",
            name: "JavaScript / TypeScript",
            url: "https://www.javascript.com/",
            frameworks: [
                {
                    id: "note-js",
                    name: "Note.js",
                    url: 'https://nodejs.org/en/'
                },
                {
                    id: "vue-js",
                    name: "Vue.js",
                    url: "https://vuejs.org/",
                    subs: [
                        {
                            id: "20a14816-0799-4b97-896e-48a62da0144b",
                            name: "Vuex",
                            url: "https://vuex.vuejs.org/"
                        }
                    ]
                }
            ],
            subs: [
                {
                    id: "tailwind",
                    name: "Tailwind",
                    url: "https://tailwindcss.com"
                },
                {
                    id: "msw",
                    name: "MSW js",
                    url: "https://mswjs.io"
                },
                {
                    id: "axios",
                    name: "Axios",
                    url: "https://github.com/axios/axios"
                }
            ]
        },
        {
            id: "cloud",
            name: "Cloud",
            url: null,
            frameworks: [
                {
                    id: 'k8s',
                    name: "Kubernetes (k8s)",
                    url: 'https://kubernetes.io/',
                    subs: [
                        {
                            id: 'minikube',
                            name: 'MiniKube',
                            url: 'https://minikube.sigs.k8s.io/docs/'
                        }
                    ]
                },
                {
                    id: 'azure',
                    name: 'Azure',
                    url: 'https://azure.microsoft.com/nl-nl/',
                    subs: [
                        {
                            id: 'keyvault',
                            name: 'Key vault',
                            url: 'https://azure.microsoft.com/nl-nl/services/key-vault/'
                        },
                        {
                            id: 'blobstorage',
                            name: 'Blob storage',
                            url: 'https://azure.microsoft.com/nl-nl/services/storage/blobs/'
                        }
                    ]
                },
            ]
        },
        {
            id: 'tooling',
            name: 'Tooling',
            url: '',
            frameworks: [
                {
                    id: 'git',
                    name: 'Git',
                    url: 'https://git-scm.com/'
                },
                {
                    id: 'docker',
                    name: 'Docker',
                    url: 'https://www.docker.com/'
                },
                {
                    id: 'kafka',
                    name: 'Kafka',
                    url: 'https://kafka.apache.org/'
                },
                {
                    id: 'redis',
                    name: 'Redis',
                    url: 'https://redis.io/'
                },
                {
                    id: 'databases',
                    name: 'Databases',
                    url: null,
                    subs: [
                        {
                            id: 'mssql',
                            name: 'MSSQL',
                            url: 'https://www.microsoft.com/en-us/sql-server'
                        },
                        {
                            id: 'mysql',
                            name: 'MySQL/Mariadb',
                            url: 'https://www.mysql.com/'
                        }
                    ]
                }
            ]
        },
        {
            id: 'software',
            name: 'software',
            url: null,
            frameworks: [
                {
                    id: 'operating',
                    name: 'Operating system',
                    url: null,
                    subs: [
                        {
                            id: 'linux arch',
                            name: 'Linux Arch',
                            url: 'https://archlinux.org/',
                        },
                        {
                            id: 'windows',
                            name: 'Windows 11',
                            url: 'https://www.microsoft.com/en-us/windows/windows-11',
                        }
                    ]
                },

            ]
        }
    ]


const technologiesData = computed(() => {
    return technologies
})
</script>

<template>
    <page-card title="Technologies" sub-title="Here are a few technologies I’ve been working with recently">
        <div>
            <div class="col-span-1">
                <h1 class="mb-6">Working Skills</h1>
                <div class=" mb-7">
                    <div class="flex justify-between py-1">
                        <span class="text-base text-secondary-content font-semibold">Java</span>
                        <span class="text-base font-semibold text-secondary-content pr-5">95%</span>
                    </div>
                    <progress class="progress progress-primary w-full" :value="95" :max="100"></progress>
                </div>
                <div class=" mb-7">
                    <div class="flex justify-between py-1">
                        <span class="text-base text-secondary-content font-semibold">Vue js</span>
                        <span class="text-base font-semibold text-secondary-content pr-5">90%</span>
                    </div>
                    <progress class="progress progress-primary w-full" :value="90" :max="100"></progress>
                </div>
                <div class=" mb-7">
                    <div class="flex justify-between py-1">
                        <span class="text-base text-secondary-content font-semibold">Spring</span>
                        <span class="text-base font-semibold text-secondary-content pr-5">80%</span>
                    </div>
                    <progress class="progress progress-primary w-full" :value="80" :max="100"></progress>
                </div>
            </div>
            <div class="col-span-1">
                <h1 class="mb-8">Knowledges</h1>
                <div class="grid grid-cols-3 gap-3">
                    <div v-for="(technology, index) in technologiesData" :key="`rec-${index}`" class="">
                        <a href="#" target="_blank" rel="noreferrer" class="hover:text-primary">
                            <strong class="font-semibold uppercase">{{ technology.name }}</strong>
                        </a>

                        <div v-for="(framework, index) in technology.frameworks" :key="index">
                            <a :href="framework.url" class="hover:text-primary">{{ framework.name }}</a>
                            <ul v-for="(sub, subIndex) in framework.subs" :key="subIndex" class="ml-5 list-disc">
                                <li>
                                    <a :href="sub.url" target="_blank" class="hover:text-primary">{{ sub.name }}</a>
                                </li>
                            </ul>
                        </div>

                        <div v-if="technology.subs && technology.subs.length > 0">
                            <h5>Libs</h5>
                            <ul v-for="(sub, index) in technology.subs" :key="index" class="ml-5 list-disc">
                                <li><a :href="sub.url" target="_blank" class="hover:text-primary">{{ sub.name }}</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <!--                            {{technologiesData}}-->

                <div class="flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap mt-5">
                    <button class="btn btn-sm">test</button>
                    <button class="btn btn-sm">test</button>
                    <button class="btn btn-sm">test</button>
                </div>
            </div>
        </div>
    </page-card>

</template>

<style scoped>

</style>