<template>
    <page-card>
        <div class="container px-4 sm:px-5 md:px-10 lg:px-14 card-transition">
            <grid-graph-visualization></grid-graph-visualization>
            <path-finder></path-finder>
        </div>
    </page-card>
</template>

<script>
import GridGraphVisualization from "../algorithms/GridGraphVisualization.vue";
import PathFinder from "../algorithms/PathFinder.vue";
import PageCard from "../common/PageCard.vue";

export default {
    name: "PlayDashboard",
    components: {PageCard, PathFinder, GridGraphVisualization}
}
</script>

<style scoped>

</style>