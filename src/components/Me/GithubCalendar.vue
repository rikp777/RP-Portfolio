<template>
    <page-card title="Contributions" sub-title="github calendar heatmap">
        <div data-aos="fade-up" class="max-w-7xl mx-auto ">
            <div class="calendar max-w-6xl content-center lowercase">
                Loading the data just for you.
            </div>
        </div>
    </page-card>
</template>

<script>
import GitHubCalendar from 'github-calendar'
import PageCard from "../common/PageCard.vue";

export default {
    name: "GithubCalendar",
    components: {PageCard},
    mounted() {
        GitHubCalendar(".calendar", "rikp777", { responsive: true, tooltips: false });
    }
}
</script>

<style scoped>
>>> rect.ContributionCalendar-day[data-level='0'] {
    @apply fill-current text-gray-900;
}

>>> rect.ContributionCalendar-day[data-level='1'] {
    fill: rgb(14, 68, 41);
}

>>> rect.ContributionCalendar-day[data-level='2'] {
    fill: rgb(0, 109, 50);
}

>>> rect.ContributionCalendar-day[data-level='3'] {
    fill: rgb(38, 166, 65);
}

>>> rect.ContributionCalendar-day[data-level='4'] {
    fill: rgb(57, 211, 83);
}

>>> .graph-before-activity-overview {
    border: none;
}

.calendar {
    border: none;
}

.calendar >>> .width-full > .float-right {
    @apply text-sm text-gray-400 flex flex-row items-center justify-center px-4;
}

.calendar >>> .width-full > .float-right svg {
    @apply mx-0.5;
}


.calendar >>> .width-full > .float-left {
    @apply flex items-center justify-center;
}

.calendar >>> .width-full > .float-left a {
    @apply pl-8 text-sm text-gray-400 hover:text-indigo-500;
}

>>> text.ContributionCalendar-label {
    font-size: 9px;
    @apply text-gray-500;
}

>>> .contrib-column {
    @apply border-none;
}

>>> .contrib-number {
    @apply text-gray-400 font-bold;
}

>>> .text-muted {
    @apply text-gray-400;
}

/*@media (min-width: 768px) {*/
/*  .calendar {*/
/*    padding-right: 3rem !important;*/
/*  }*/
/*}*/

</style>
